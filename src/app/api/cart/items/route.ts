import { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';
import { addItemToCart } from '@/services/cart.service';
import { addItemSchema } from '@/validations/cart.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const body = await req.json();
    const parsed = addItemSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const cart = await addItemToCart(
      parsed.data.productId,
      parsed.data.quantity,
      session?.userId,
      parsed.data.guestId
    );

    return apiSuccess(cart, 'Item added to cart', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error adding item to cart';
    return apiError('CART_ERROR', message, 400);
  }
}
