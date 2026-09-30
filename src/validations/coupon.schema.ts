import { z } from 'zod';

export const validateCouponSchema = z.object({
  code: z.string().min(1, 'Coupon code is required').trim(),
  subtotal: z.number().min(0, 'Subtotal is required'),
});

export const createCouponSchema = z.object({
  code: z.string().min(3).trim().toUpperCase(),
  type: z.enum(['PERCENTAGE', 'FIXED']),
  value: z.number().min(1),
  minimumOrderValue: z.number().min(0).default(0),
  maximumDiscount: z.number().optional(),
  usageLimit: z.number().int().optional(),
  perUserLimit: z.number().int().default(1),
  startsAt: z.coerce.date().default(() => new Date()),
  expiresAt: z.coerce.date(),
  isActive: z.boolean().default(true),
});
