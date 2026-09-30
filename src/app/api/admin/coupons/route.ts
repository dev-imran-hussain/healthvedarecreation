import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { connectDB } from '@/lib/db';
import { Coupon } from '@/models/Coupon';
import { createAdminCoupon } from '@/services/coupon.service';
import { createCouponSchema } from '@/validations/coupon.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const coupons = await Coupon.find().sort({ createdAt: -1 });
    return apiSuccess(coupons);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}

export async function POST(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    const body = await req.json();
    const parsed = createCouponSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const coupon = await createAdminCoupon(parsed.data);
    return apiSuccess(coupon, 'Coupon created successfully', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error creating coupon';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
