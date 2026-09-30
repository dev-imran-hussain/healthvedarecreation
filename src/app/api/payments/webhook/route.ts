import { NextRequest } from 'next/server';
import crypto from 'crypto';
import { env } from '@/lib/config';
import { processWebhookEvent } from '@/services/payment.service';
import { apiSuccess, apiError } from '@/lib/response';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    // Webhook verification if secret configured
    if (env.RAZORPAY_WEBHOOK_SECRET && env.RAZORPAY_WEBHOOK_SECRET !== 'mock_webhook_secret') {
      const expectedSignature = crypto
        .createHmac('sha256', env.RAZORPAY_WEBHOOK_SECRET)
        .update(rawBody)
        .digest('hex');

      if (signature !== expectedSignature) {
        return apiError('INVALID_SIGNATURE', 'Invalid webhook signature', 400);
      }
    }

    const payload = JSON.parse(rawBody);
    const result = await processWebhookEvent(payload);

    return apiSuccess(result, 'Webhook acknowledged');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook error';
    return apiError('WEBHOOK_ERROR', message, 500);
  }
}
