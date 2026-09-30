import { clearAuthCookie } from '@/lib/auth';
import { apiSuccess } from '@/utils/response';

export async function POST() {
  await clearAuthCookie();
  return apiSuccess({ loggedOut: true }, 'Successfully logged out');
}

