import { NextRequest } from 'next/server';
import { checkoutSchema } from '@/validations/checkout.schema';
import { createOrder, getUserOrders } from '@/services/order.service';
import { getSession } from '@/lib/auth';
import { apiSuccess, apiError } from '@/utils/response';
import { checkRateLimit } from '@/middleware/rate-limit';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 10, 60 * 1000, 'create_order');
  if (!rateLimit.allowed) return rateLimit.response!;

  try {
    const session = await getSession();
    const body = await req.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const orderData = await createOrder({
      userId: session?.userId,
      guestEmail: parsed.data.guestEmail,
      items: parsed.data.items,
      shippingAddress: parsed.data.shippingAddress,
      couponCode: parsed.data.couponCode,
      gateway: parsed.data.gateway,
    });

    return apiSuccess(orderData, 'Order created successfully', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Checkout failed';
    return apiError('CHECKOUT_FAILED', message, 400);
  }
}

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return apiError('UNAUTHENTICATED', 'Sign in to view orders', 401);
    }

    const orders = await getUserOrders(session.userId);
    return apiSuccess(orders);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching orders';
    return apiError('FETCH_FAILED', message, 400);
  }
}

