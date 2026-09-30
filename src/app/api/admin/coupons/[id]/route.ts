import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { updateAdminCoupon, deleteAdminCoupon } from '@/services/coupon.service';
import { createCouponSchema } from '@/validations/coupon.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    const { id } = await params;
    const body = await req.json();
    const parsed = createCouponSchema.partial().safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const coupon = await updateAdminCoupon(id, parsed.data);
    return apiSuccess(coupon, 'Coupon updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating coupon';
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
    await deleteAdminCoupon(id);
    return apiSuccess({ deleted: true }, 'Coupon deleted successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error deleting coupon';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
