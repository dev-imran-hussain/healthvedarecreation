import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';
import { validateAndApplyCoupon } from './coupon.service';
import { AppError } from '@/utils/errors';
import { IOrderItemSnapshot } from '@/models/Order';

export interface CheckoutCalculationItem {
  productId: string;
  quantity: number;
}

export interface CheckoutResult {
  items: IOrderItemSnapshot[];
  subtotal: number; // in paise
  discount: number; // in paise
  shippingFee: number; // in paise
  tax: number; // in paise
  total: number; // in paise
  couponCode?: string;
}

export async function validateAndCalculateCheckout(
  rawItems: CheckoutCalculationItem[],
  couponCode?: string
): Promise<CheckoutResult> {
  await connectDB();

  if (!rawItems || rawItems.length === 0) {
    throw new AppError('Cart cannot be empty for checkout', 400);
  }

  const items: IOrderItemSnapshot[] = [];
  let subtotal = 0;

  for (const item of rawItems) {
    const product = await Product.findById(item.productId);
    if (!product || !product.isActive) {
      throw new AppError(`Product ${item.productId} is unavailable`, 400, 'PRODUCT_UNAVAILABLE');
    }

    if (product.stock < item.quantity) {
      throw new AppError(
        `Insufficient stock for "${product.name}". Only ${product.stock} units available.`,
        400,
        'OUT_OF_STOCK'
      );
    }

    const unitPrice = product.price; // authoritative minor unit from DB
    const lineTotal = unitPrice * item.quantity;
    subtotal += lineTotal;

    const firstImage = product.images?.[0]?.url || '';

    items.push({
      productId: product._id,
      nameSnapshot: product.name,
      skuSnapshot: product.sku,
      imageSnapshot: firstImage,
      unitPrice,
      quantity: item.quantity,
      lineTotal,
    });
  }

  // Section 26: Free shipping threshold at ₹499 (49900 paise)
  const shippingFee = subtotal >= 49900 ? 0 : 5000; // ₹50 shipping if under ₹499
  const tax = 0; // Inclusive in supplement prices

  let discount = 0;
  let validatedCode: string | undefined = undefined;

  if (couponCode && couponCode.trim()) {
    const couponResult = await validateAndApplyCoupon(couponCode, subtotal);
    discount = couponResult.discount;
    validatedCode = couponResult.code;
  }

  const total = Math.max(0, subtotal - discount + shippingFee + tax);

  return {
    items,
    subtotal,
    discount,
    shippingFee,
    tax,
    total,
    couponCode: validatedCode,
  };
}

