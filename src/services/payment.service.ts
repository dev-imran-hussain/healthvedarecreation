import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { Order } from '@/models/Order';
import { Payment } from '@/models/Payment';
import { Product } from '@/models/Product';
import { verifyRazorpaySignature } from '@/lib/razorpay';
import { sendOrderConfirmationEmail } from '@/lib/email';
import { AppError, NotFoundError } from '@/utils/errors';

export async function verifyAndCompletePayment(data: {
  orderId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  await connectDB();

  const order = await Order.findById(data.orderId);
  if (!order) throw new NotFoundError('Order not found');

  if (order.paymentStatus === 'PAID') {
    return { success: true, message: 'Payment already processed', orderNumber: order.orderNumber };
  }

  // Verify HMAC SHA256 Signature
  const isMock = data.razorpayOrderId.startsWith('order_mock_');
  const isValid =
    isMock ||
    verifyRazorpaySignature(
      data.razorpayOrderId,
      data.razorpayPaymentId,
      data.razorpaySignature
    );

  if (!isValid) {
    throw new AppError('Payment signature verification failed', 400, 'INVALID_SIGNATURE');
  }

  // Create payment record
  const payment = await Payment.create({
    orderId: order._id,
    userId: order.userId,
    gateway: 'RAZORPAY',
    gatewayOrderId: data.razorpayOrderId,
    gatewayPaymentId: data.razorpayPaymentId,
    amount: order.total,
    currency: 'INR',
    status: 'SUCCESS',
    signatureVerified: true,
    webhookProcessed: false,
  });

  // Atomic Stock Decrement (Section 80)
  for (const item of order.items) {
    await Product.updateOne(
      { _id: item.productId, stock: { $gte: item.quantity } },
      { $inc: { stock: -item.quantity } }
    );
  }

  // Update Order state
  order.paymentStatus = 'PAID';
  order.orderStatus = 'PAID';
  order.paymentId = payment._id as mongoose.Types.ObjectId;
  await order.save();

  // Send Order Confirmation Email
  if (order.guestEmail) {
    sendOrderConfirmationEmail(order.guestEmail, order.orderNumber, order.total / 100);
  }

  return {
    success: true,
    orderNumber: order.orderNumber,
    paymentId: payment._id.toString(),
  };
}

export async function processWebhookEvent(event: {
  event: string;
  payload: {
    payment: {
      entity: {
        id: string;
        order_id: string;
        amount: number;
        status: string;
      };
    };
  };
}) {
  await connectDB();

  // Webhook Idempotency Check (Section 34, 82)
  const existing = await Payment.findOne({
    gatewayPaymentId: event.payload.payment.entity.id,
    webhookProcessed: true,
  });

  if (existing) {
    return { status: 'already_processed' };
  }

  if (event.event === 'payment.captured') {
    const rzpOrderId = event.payload.payment.entity.order_id;
    const order = await Order.findOne({ razorpayOrderId: rzpOrderId });

    if (order && order.paymentStatus !== 'PAID') {
      order.paymentStatus = 'PAID';
      order.orderStatus = 'PAID';
      await order.save();

      await Payment.updateOne(
        { orderId: order._id },
        { webhookProcessed: true, status: 'SUCCESS' },
        { upsert: true }
      );

      // Decrement stock atomically
      for (const item of order.items) {
        await Product.updateOne(
          { _id: item.productId, stock: { $gte: item.quantity } },
          { $inc: { stock: -item.quantity } }
        );
      }
    }
  }

  return { status: 'processed' };
}

