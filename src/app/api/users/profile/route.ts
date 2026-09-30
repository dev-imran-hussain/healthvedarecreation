import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { getUserProfile, updateUserProfile } from '@/services/user.service';
import { updateProfileSchema } from '@/validations/user.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const profile = await getUserProfile(session.userId);
    return apiSuccess(profile);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching profile';
    return apiError('PROFILE_ERROR', message, 401);
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const body = await req.json();
    const parsed = updateProfileSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const updated = await updateUserProfile(session.userId, parsed.data);
    return apiSuccess(updated, 'Profile updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating profile';
    return apiError('UPDATE_FAILED', message, 400);
  }
}

