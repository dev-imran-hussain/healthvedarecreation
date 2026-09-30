import Razorpay from 'razorpay';
import crypto from 'crypto';
import { config } from './config';

export const razorpay = new Razorpay({
  key_id: config.RAZORPAY_KEY_ID,
  key_secret: config.RAZORPAY_KEY_SECRET,
});

export async function createRazorpayOrder(amountInPaise: number, receipt: string) {
  if (config.RAZORPAY_KEY_ID === 'rzp_test_mock_123456789') {
    return {
      id: `order_mock_${Date.now()}`,
      amount: amountInPaise,
      currency: 'INR',
      receipt,
    };
  }

  const order = await razorpay.orders.create({
    amount: amountInPaise,
    currency: 'INR',
    receipt,
  });

  return {
    id: order.id,
    amount: Number(order.amount),
    currency: order.currency,
  };
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const generatedSignature = crypto
    .createHmac('sha256', config.RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
}

export function verifyWebhookSignature(
  rawBody: string,
  webhookSignature: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', config.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest('hex');

  return expectedSignature === webhookSignature;
}

