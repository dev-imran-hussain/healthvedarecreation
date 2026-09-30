import { z } from 'zod';

export const addItemSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1').default(1),
  guestId: z.string().optional(),
});

export const updateItemSchema = z.object({
  quantity: z.number().int().min(0, 'Quantity cannot be negative'),
  guestId: z.string().optional(),
});

export const mergeCartSchema = z.object({
  guestId: z.string().min(1, 'Guest ID is required'),
});

