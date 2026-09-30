import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { cancelOrder } from '@/services/order.service';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const cancelSchema = z.object({
  reason: z.string().min(3, 'Cancellation reason is required').default('Customer requested cancellation'),
});

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await authenticateRequest(req);
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const parsed = cancelSchema.safeParse(body);
    const reason = parsed.success ? parsed.data.reason : 'Customer requested cancellation';

    const order = await cancelOrder(id, session.userId, reason);
    return apiSuccess(order, 'Order cancelled successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error cancelling order';
    return apiError('CANCELLATION_FAILED', message, 400);
  }
}
