import { NextRequest } from 'next/server';
import { getProductBySlugOrId } from '@/services/product.service';
import { apiSuccess, apiError } from '@/lib/response';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProductBySlugOrId(id);
    return apiSuccess(product);
  } catch (err: any) {
    return apiError('PRODUCT_NOT_FOUND', err.message, 404);
  }
}
