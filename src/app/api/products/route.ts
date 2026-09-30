import { NextRequest } from 'next/server';
import { productQuerySchema, createProductSchema } from '@/validations/product.schema';
import { getProducts } from '@/services/product.service';
import { Product } from '@/models/Product';
import { connectDB } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { apiPaginated, apiSuccess, apiError } from '@/lib/response';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const params = productQuerySchema.parse({
      page: url.searchParams.get('page') || 1,
      limit: url.searchParams.get('limit') || 20,
      category: url.searchParams.get('category') || undefined,
      search: url.searchParams.get('search') || undefined,
      sort: url.searchParams.get('sort') || 'newest',
      featured: url.searchParams.get('featured') || undefined,
    });

    const result = await getProducts(params);
    return apiPaginated(result.products, result.pagination);
  } catch (err: any) {
    return apiError('FETCH_FAILED', err.message, 400);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return apiError('FORBIDDEN', 'Admin privileges required', 403);
    }

    const body = await req.json();
    const validated = createProductSchema.parse(body);

    await connectDB();
    const product = await Product.create(validated);
    return apiSuccess(product, 'Product created successfully', 201);
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return apiError('VALIDATION_ERROR', err.errors[0]?.message || 'Invalid product payload', 422);
    }
    return apiError('CREATE_FAILED', err.message, 400);
  }
}
