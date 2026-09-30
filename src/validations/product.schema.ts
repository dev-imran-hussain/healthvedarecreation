import { z } from 'zod';

export const productQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  category: z.string().optional(),
  search: z.string().optional(),
  sort: z.enum(['newest', 'price_asc', 'price_desc', 'popular']).default('newest'),
  featured: z.coerce.boolean().optional(),
});

export const createProductSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  sku: z.string().min(3),
  description: z.string().min(10),
  shortDescription: z.string().optional(),
  categoryId: z.string().optional(),
  categoryName: z.string().optional(),
  brand: z.string().default('Health Veda Organics'),
  price: z.number().min(0),
  compareAtPrice: z.number().optional(),
  stock: z.number().int().min(0),
  images: z.array(z.string().url()).min(1),
  bullets: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
});
