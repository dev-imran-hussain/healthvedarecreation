import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { updateOrderStatus } from '@/services/order.service';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const updateStatusSchema = z.object({
  status: z.enum([
    'PENDING_PAYMENT',
    'PAID',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED',
    'PAYMENT_FAILED',
    'REFUNDED',
  ]),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    const { id } = await params;
    const body = await req.json();
    const parsed = updateStatusSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const order = await updateOrderStatus(id, parsed.data.status);
    return apiSuccess(order, 'Order status updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating order status';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
