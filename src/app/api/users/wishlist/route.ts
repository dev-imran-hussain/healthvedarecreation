import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { getWishlist, addToWishlist } from '@/services/user.service';
import { wishlistSchema } from '@/validations/user.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const wishlist = await getWishlist(session.userId);
    return apiSuccess(wishlist);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching wishlist';
    return apiError('UNAUTHORIZED', message, 401);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const body = await req.json();
    const parsed = wishlistSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const wishlist = await addToWishlist(session.userId, parsed.data.productId);
    return apiSuccess(wishlist, 'Item added to wishlist', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating wishlist';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

