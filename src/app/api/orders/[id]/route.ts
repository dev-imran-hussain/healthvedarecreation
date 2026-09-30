import { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';
import { getOrder } from '@/services/order.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    const { id } = await params;
    const order = await getOrder(id, session?.userId, session?.role === 'admin');
    return apiSuccess(order);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Order not found';
    return apiError('NOT_FOUND', message, 404);
  }
}
