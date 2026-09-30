import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { createProduct } from '@/services/product.service';
import { createProductSchema } from '@/validations/product.schema';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const products = await Product.find().sort({ displayOrder: 1, createdAt: -1 });
    return apiSuccess(products);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}

export async function POST(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    const body = await req.json();
    const parsed = createProductSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const product = await createProduct(parsed.data);
    return apiSuccess(product, 'Product created successfully', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error creating product';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
