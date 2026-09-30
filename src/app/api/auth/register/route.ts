import { NextRequest } from 'next/server';
import { registerSchema } from '@/validations/auth.schema';
import { registerUser } from '@/services/auth.service';
import { apiSuccess, apiError } from '@/lib/response';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = registerSchema.parse(body);
    const user = await registerUser(validated);
    return apiSuccess(user, 'Registration successful', 201);
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return apiError('VALIDATION_ERROR', err.errors[0]?.message || 'Invalid data', 422);
    }
    return apiError('REGISTRATION_FAILED', err.message, 400);
  }
}
