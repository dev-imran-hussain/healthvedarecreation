import { logoutUser } from '@/services/auth.service';
import { apiSuccess } from '@/lib/response';

export async function POST() {
  await logoutUser();
  return apiSuccess({ loggedOut: true }, 'Successfully logged out');
}
