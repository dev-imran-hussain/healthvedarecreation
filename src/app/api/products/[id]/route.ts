import { NextRequest } from 'next/server';
import { getProduct } from '@/services/product.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProduct(id);
    return apiSuccess(product);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Product not found';
    return apiError('NOT_FOUND', message, 404);
  }
}

