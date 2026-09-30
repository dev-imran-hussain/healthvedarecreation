import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { slugify } from '@/utils/slug';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const updateCategorySchema = z.object({
  name: z.string().min(2).optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  parentId: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const parsed = updateCategorySchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const updateData: Record<string, unknown> = { ...parsed.data };
    if (parsed.data.slug) {
      updateData.slug = slugify(parsed.data.slug);
    }

    const category = await Category.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    if (!category) return apiError('NOT_FOUND', 'Category not found', 404);

    return apiSuccess(category, 'Category updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating category';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const { id } = await params;
    const category = await Category.findByIdAndUpdate(id, { $set: { isActive: false } });
    if (!category) return apiError('NOT_FOUND', 'Category not found', 404);

    return apiSuccess({ deleted: true }, 'Category deactivated');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error deleting category';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
