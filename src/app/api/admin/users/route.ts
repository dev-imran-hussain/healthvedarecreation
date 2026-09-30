import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { apiSuccess, apiError } from '@/utils/response';
import { z } from 'zod';

const toggleUserSchema = z.object({
  userId: z.string().min(1),
  isActive: z.boolean(),
});

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const users = await User.find().select('-passwordHash').sort({ createdAt: -1 });
    return apiSuccess(users);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();
    const body = await req.json();
    const parsed = toggleUserSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const user = await User.findByIdAndUpdate(
      parsed.data.userId,
      { $set: { isActive: parsed.data.isActive } },
      { new: true }
    ).select('-passwordHash');

    if (!user) return apiError('NOT_FOUND', 'User not found', 404);

    return apiSuccess(user, 'User status updated');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating user';
    return apiError('OPERATION_FAILED', message, 400);
  }
}
