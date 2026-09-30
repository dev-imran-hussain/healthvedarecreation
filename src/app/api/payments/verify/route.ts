import { NextRequest } from 'next/server';
import { z } from 'zod';
import { verifyAndCompletePayment } from '@/services/payment.service';
import { apiSuccess, apiError } from '@/utils/response';

const verifySchema = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
  razorpayOrderId: z.string().min(1, 'Razorpay Order ID is required'),
  razorpayPaymentId: z.string().min(1, 'Razorpay Payment ID is required'),
  razorpaySignature: z.string().min(1, 'Razorpay Signature is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = verifySchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await verifyAndCompletePayment(parsed.data);
    return apiSuccess(result, 'Payment verified and order finalized');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Payment verification failed';
    return apiError('PAYMENT_ERROR', message, 400);
  }
}
