import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { getUserOrders } from '@/services/user.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const orders = await getUserOrders(session.userId);
    return apiSuccess(orders);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching orders';
    return apiError('UNAUTHORIZED', message, 401);
  }
}

