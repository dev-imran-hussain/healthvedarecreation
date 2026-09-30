import { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';
import { getCart, clearCart, mergeGuestCart } from '@/services/cart.service';
import { mergeCartSchema } from '@/validations/cart.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    const { searchParams } = new URL(req.url);
    const guestId = searchParams.get('guestId') || undefined;

    const cart = await getCart(session?.userId, guestId);
    return apiSuccess(cart || { items: [] });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching cart';
    return apiError('CART_ERROR', message, 500);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession();
    const { searchParams } = new URL(req.url);
    const guestId = searchParams.get('guestId') || undefined;

    await clearCart(session?.userId, guestId);
    return apiSuccess({ cleared: true }, 'Cart cleared successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error clearing cart';
    return apiError('CART_ERROR', message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return apiError('UNAUTHORIZED', 'Authentication required to merge cart', 401);
    }

    const body = await req.json();
    const parsed = mergeCartSchema.safeParse(body);
    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const cart = await mergeGuestCart(parsed.data.guestId, session.userId);
    return apiSuccess(cart, 'Guest cart merged successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error merging cart';
    return apiError('CART_ERROR', message, 400);
  }
}
