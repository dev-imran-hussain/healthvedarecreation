import { z } from 'zod';
import { addressSchema } from './user.schema';

export const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1, 'Product ID is required'),
        quantity: z.number().int().min(1, 'Quantity must be at least 1'),
      })
    )
    .min(1, 'Cart must have at least one item'),
  shippingAddress: addressSchema,
  couponCode: z.string().optional(),
  gateway: z.enum(['RAZORPAY', 'COD']).default('RAZORPAY'),
  guestEmail: z.string().email().optional(),
});

