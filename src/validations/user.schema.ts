import { z } from 'zod';

export const addressSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').trim(),
  phone: z.string().min(10, 'Valid 10-digit phone number is required').trim(),
  addressLine1: z.string().min(3, 'Address line 1 is required').trim(),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'City is required').trim(),
  state: z.string().min(2, 'State is required').trim(),
  pincode: z.string().min(4, 'Valid postal code is required').trim(),
  country: z.string().default('India'),
  isDefault: z.boolean().optional(),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
});

export const wishlistSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
});

