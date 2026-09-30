import { NextRequest } from 'next/server';
import { getProducts } from '@/services/product.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || undefined;

    const products = await getProducts(category);
    // Section 57: { success: true, data: [] } - no pagination metadata
    return apiSuccess(products);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching products';
    return apiError('PRODUCT_FETCH_FAILED', message, 500);
  }
}

