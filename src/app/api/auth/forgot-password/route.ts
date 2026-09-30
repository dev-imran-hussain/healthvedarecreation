import { NextRequest } from 'next/server';
import { forgotPasswordSchema } from '@/validations/auth.schema';
import { forgotPassword } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/utils/response';
import { checkRateLimit } from '@/middleware/rate-limit';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 5, 60 * 1000, 'auth_forgot_password');
  if (!rateLimit.allowed) return rateLimit.response!;

  try {
    const body = await req.json();
    const parsed = forgotPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await forgotPassword(parsed.data.email);
    return apiSuccess(result, result.message);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error processing request';
    return apiError('REQUEST_FAILED', message, 400);
  }
}
