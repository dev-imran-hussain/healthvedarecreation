import { connectDB } from '@/lib/db';
import { Category } from '@/models/Category';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({ isActive: true }).sort({ name: 1 });
    return apiSuccess(categories);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching categories';
    return apiError('CATEGORY_FETCH_FAILED', message, 500);
  }
}
