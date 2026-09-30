import { connectDB } from '@/lib/db';
import { Coupon, ICoupon } from '@/models/Coupon';
import { AppError, NotFoundError } from '@/utils/errors';

export async function validateAndApplyCoupon(code: string, subtotal: number) {
  await connectDB();
  const coupon = await Coupon.findOne({
    code: code.toUpperCase().trim(),
    isActive: true,
  });

  if (!coupon) {
    throw new NotFoundError('Invalid coupon code');
  }

  const now = new Date();
  if (coupon.startsAt > now || coupon.expiresAt < now) {
    throw new AppError('Coupon code has expired', 400, 'COUPON_EXPIRED');
  }

  if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
    throw new AppError('Coupon usage limit reached', 400, 'COUPON_LIMIT_REACHED');
  }

  if (subtotal < coupon.minimumOrderValue) {
    const minRupees = Math.round(coupon.minimumOrderValue / 100);
    throw new AppError(
      `Minimum order value of ₹${minRupees} required for this coupon`,
      400,
      'MINIMUM_ORDER_NOT_MET'
    );
  }

  let discount = 0;
  if (coupon.type === 'PERCENTAGE') {
    discount = Math.round((subtotal * coupon.value) / 100);
    if (coupon.maximumDiscount && discount > coupon.maximumDiscount) {
      discount = coupon.maximumDiscount;
    }
  } else {
    // FIXED amount in paise
    discount = Math.min(coupon.value, subtotal);
  }

  return {
    code: coupon.code,
    discount,
    finalTotal: subtotal - discount,
  };
}

export async function incrementCouponUsage(code: string): Promise<void> {
  await connectDB();
  await Coupon.updateOne(
    { code: code.toUpperCase().trim() },
    { $inc: { usageCount: 1 } }
  );
}

export async function createAdminCoupon(data: Partial<ICoupon>): Promise<ICoupon> {
  await connectDB();
  return Coupon.create(data);
}

export async function updateAdminCoupon(id: string, data: Partial<ICoupon>): Promise<ICoupon> {
  await connectDB();
  const coupon = await Coupon.findByIdAndUpdate(id, { $set: data }, { new: true });
  if (!coupon) throw new NotFoundError('Coupon not found');
  return coupon;
}

export async function deleteAdminCoupon(id: string): Promise<boolean> {
  await connectDB();
  const result = await Coupon.findByIdAndDelete(id);
  return !!result;
}

