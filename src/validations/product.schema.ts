import { z } from 'zod';

export const productImageSchema = z.object({
  url: z.string().min(1, 'Image URL is required'),
  publicId: z.string().optional(),
});

export const createProductSchema = z.object({
  name: z.string().min(2, 'Name is required').trim(),
  slug: z.string().optional(),
  sku: z.string().min(2, 'SKU is required').trim(),
  description: z.string().min(10, 'Description is required'),
  shortDescription: z.string().optional(),
  categoryId: z.string().optional(),
  price: z.number().int().min(100, 'Price must be at least ₹1 (100 paise)'),
  compareAtPrice: z.number().int().optional(),
  stock: z.number().int().min(0, 'Stock cannot be negative').default(0),
  images: z.array(productImageSchema).min(1, 'At least one image is required'),
  attributes: z.record(z.string(), z.unknown()).optional(),
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
});

export const updateProductSchema = createProductSchema.partial();

