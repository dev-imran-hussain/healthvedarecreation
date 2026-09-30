import { z } from 'zod';
import { addressSchema } from './auth.schema';

export const checkoutSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string().min(1),
      quantity: z.number().int().min(1),
    })
  ).min(1, 'Cart must have at least one item'),
  shippingAddress: addressSchema,
  couponCode: z.string().optional(),
  guestEmail: z.string().email().optional(),
  gateway: z.enum(['RAZORPAY', 'COD']).default('RAZORPAY'),
});

export const orderStatusSchema = z.object({
  status: z.enum([
    'PENDING_PAYMENT',
    'PAID',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED',
    'PAYMENT_FAILED',
  ]),
});
