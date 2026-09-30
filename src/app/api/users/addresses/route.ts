import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { getUserAddresses, addAddress } from '@/services/user.service';
import { addressSchema } from '@/validations/user.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const addresses = await getUserAddresses(session.userId);
    return apiSuccess(addresses);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error fetching addresses';
    return apiError('UNAUTHORIZED', message, 401);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await authenticateRequest(req);
    const body = await req.json();
    const parsed = addressSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const addresses = await addAddress(session.userId, parsed.data);
    return apiSuccess(addresses, 'Address added successfully', 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error adding address';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

