import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { getAdminOrders } from '@/services/order.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || undefined;

    const orders = await getAdminOrders(status);
    return apiSuccess(orders);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}
