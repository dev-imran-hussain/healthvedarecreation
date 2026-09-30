import { NextRequest } from 'next/server';
import { loginSchema } from '@/validations/auth.schema';
import { loginUser } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/lib/response';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = loginSchema.parse(body);
    const user = await loginUser(validated.email, validated.password);
    return apiSuccess(user, 'Login successful');
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return apiError('VALIDATION_ERROR', err.errors[0]?.message || 'Invalid credentials', 422);
    }
    return apiError('UNAUTHORIZED', err.message, 401);
  }
}
