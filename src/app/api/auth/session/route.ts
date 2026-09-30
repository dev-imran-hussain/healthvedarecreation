import { getSession } from '@/lib/auth';
import { getUserProfile } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/lib/response';

export async function GET() {
  const session = await getSession();
  if (!session) {
    return apiError('UNAUTHENTICATED', 'No active session found', 401);
  }

  try {
    const user = await getUserProfile(session.userId);
    return apiSuccess({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      addresses: user.addresses,
    });
  } catch {
    return apiError('USER_NOT_FOUND', 'Session user could not be found', 404);
  }
}
