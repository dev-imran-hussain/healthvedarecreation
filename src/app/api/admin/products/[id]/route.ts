import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { updateProduct, archiveProduct } from '@/services/product.service';
import { updateProductSchema } from '@/validations/product.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    const { id } = await params;
    const body = await req.json();
    const parsed = updateProductSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const product = await updateProduct(id, parsed.data);
    return apiSuccess(product, 'Product updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating product';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    const { id } = await params;
    const result = await archiveProduct(id);
    return apiSuccess(result, 'Product archived');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error archiving product';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
