import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { getUserSessionProfile } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const profile = await getUserSessionProfile(session.userId);
    return apiSuccess({ session, profile });
  } catch {
    return apiError('UNAUTHENTICATED', 'No active session found', 401);
  }
}

