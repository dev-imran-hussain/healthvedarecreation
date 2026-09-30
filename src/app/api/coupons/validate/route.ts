import { NextRequest } from 'next/server';
import { validateCouponSchema } from '@/validations/coupon.schema';
import { validateAndApplyCoupon } from '@/services/coupon.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = validateCouponSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await validateAndApplyCoupon(parsed.data.code, parsed.data.subtotal);
    return apiSuccess(result, 'Coupon applied successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Coupon validation failed';
    return apiError('COUPON_ERROR', message, 400);
  }
}
