import { NextRequest } from 'next/server';
import { resetPasswordSchema } from '@/validations/auth.schema';
import { resetPassword } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/utils/response';
import { checkRateLimit } from '@/middleware/rate-limit';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 5, 60 * 1000, 'auth_reset_password');
  if (!rateLimit.allowed) return rateLimit.response!;

  try {
    const body = await req.json();
    const parsed = resetPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await resetPassword(parsed.data.token, parsed.data.password);
    return apiSuccess(result, result.message);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error resetting password';
    return apiError('RESET_FAILED', message, 400);
  }
}
