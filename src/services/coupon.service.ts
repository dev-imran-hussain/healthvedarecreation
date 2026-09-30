import { connectDB } from '@/lib/db';
import { Coupon } from '@/models/Coupon';

export async function validateAndApplyCoupon(code: string, subtotal: number, userId?: string) {
  await connectDB();
  const coupon = await Coupon.findOne({
    code: code.toUpperCase().trim(),
    isActive: true,
  });

  if (!coupon) {
    throw new Error('Invalid coupon code');
  }

  const now = new Date();
  if (coupon.startsAt > now || coupon.expiresAt < now) {
    throw new Error('Coupon code has expired');
  }

  if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
    throw new Error('Coupon usage limit reached');
  }

  if (subtotal < coupon.minimumOrderValue) {
    const minRupees = Math.round(coupon.minimumOrderValue / 100);
    throw new Error(`Minimum order value of ₹${minRupees} required for this coupon`);
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
