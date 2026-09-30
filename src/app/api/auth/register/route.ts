import { NextRequest } from 'next/server';
import { registerSchema } from '@/validations/auth.schema';
import { registerUser } from '@/services/auth.service';
import { setAuthCookie } from '@/lib/auth';
import { apiSuccess, apiError } from '@/utils/response';
import { checkRateLimit } from '@/middleware/rate-limit';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 10, 60 * 1000, 'auth_register');
  if (!rateLimit.allowed) return rateLimit.response!;

  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await registerUser(parsed.data);
    await setAuthCookie(result.token);

    return apiSuccess(result.user, 'Registration successful', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Registration failed';
    return apiError('REGISTRATION_FAILED', message, 400);
  }
}

