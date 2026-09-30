import { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';
import { updateCartItemQuantity, removeCartItem } from '@/services/cart.service';
import { updateItemSchema } from '@/validations/cart.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const session = await getSession();
    const { productId } = await params;
    const body = await req.json();
    const parsed = updateItemSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const cart = await updateCartItemQuantity(
      productId,
      parsed.data.quantity,
      session?.userId,
      parsed.data.guestId
    );

    return apiSuccess(cart, 'Cart updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating cart item';
    return apiError('CART_ERROR', message, 400);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const session = await getSession();
    const { productId } = await params;
    const { searchParams } = new URL(req.url);
    const guestId = searchParams.get('guestId') || undefined;

    const cart = await removeCartItem(productId, session?.userId, guestId);
    return apiSuccess(cart, 'Item removed from cart');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error removing cart item';
    return apiError('CART_ERROR', message, 400);
  }
}
