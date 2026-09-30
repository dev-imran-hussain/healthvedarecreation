import { NextRequest } from 'next/server';
import { getOrder } from '@/services/order.service';
import { createRazorpayOrder } from '@/lib/razorpay';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const createPaymentSchema = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const order = await getOrder(parsed.data.orderId);
    if (order.paymentStatus === 'PAID') {
      return apiError('ALREADY_PAID', 'This order is already paid for', 400);
    }

    const razorpayOrder = await createRazorpayOrder(order.total, order.orderNumber);
    order.razorpayOrderId = razorpayOrder.id;
    await order.save();

    return apiSuccess({ razorpayOrder, total: order.total }, 'Razorpay order created');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error creating payment';
    return apiError('PAYMENT_INITIATION_FAILED', message, 400);
  }
}
