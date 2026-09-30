import { NextRequest } from 'next/server';
import { loginSchema } from '@/validations/auth.schema';
import { loginUser } from '@/services/auth.service';
import { setAuthCookie } from '@/lib/auth';
import { apiSuccess, apiError } from '@/utils/response';
import { checkRateLimit } from '@/middleware/rate-limit';

export async function POST(req: NextRequest) {
  // Section 48: 5 attempts / minute / IP
  const rateLimit = checkRateLimit(req, 5, 60 * 1000, 'auth_login');
  if (!rateLimit.allowed) return rateLimit.response!;

  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await loginUser(parsed.data);
    await setAuthCookie(result.token);

    return apiSuccess(result.user, 'Login successful');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Invalid credentials';
    return apiError('UNAUTHORIZED', message, 401);
  }
}

