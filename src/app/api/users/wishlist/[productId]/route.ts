import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { removeFromWishlist } from '@/services/user.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const session = await authenticateRequest(req);
    const { productId } = await params;
    const wishlist = await removeFromWishlist(session.userId, productId);
    return apiSuccess(wishlist, 'Item removed from wishlist');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating wishlist';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

