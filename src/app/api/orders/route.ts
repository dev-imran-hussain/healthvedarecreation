import { NextRequest } from 'next/server';
import { checkoutSchema } from '@/validations/order.schema';
import { createCheckoutOrder, getUserOrders } from '@/services/order.service';
import { getSession } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/response';

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const body = await req.json();
    const validated = checkoutSchema.parse(body);

    const orderData = await createCheckoutOrder({
      userId: session?.userId,
      guestEmail: validated.guestEmail,
      items: validated.items,
      shippingAddress: validated.shippingAddress,
      couponCode: validated.couponCode,
      gateway: validated.gateway,
    });

    return apiSuccess(orderData, 'Order initialized successfully', 201);
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return apiError('VALIDATION_ERROR', err.errors[0]?.message || 'Invalid checkout payload', 422);
    }
    return apiError('CHECKOUT_FAILED', err.message, 400);
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
  } catch (err: any) {
    return apiError('FETCH_FAILED', err.message, 400);
  }
}
