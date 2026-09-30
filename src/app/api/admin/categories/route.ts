import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { slugify } from '@/utils/slug';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string().min(2, 'Category name is required').trim(),
  slug: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  parentId: z.string().nullable().optional(),
  isActive: z.boolean().default(true),
});

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const categories = await Category.find().sort({ name: 1 });
    return apiSuccess(categories);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}

export async function POST(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const body = await req.json();
    const parsed = categorySchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const slug = parsed.data.slug ? slugify(parsed.data.slug) : slugify(parsed.data.name);
    const category = await Category.create({
      ...parsed.data,
      slug,
    });

    return apiSuccess(category, 'Category created successfully', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error creating category';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
