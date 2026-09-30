import { NextRequest } from 'next/server';
import { authenticateRequest } from '@/middleware/auth';
import { updateAddress, deleteAddress } from '@/services/user.service';
import { addressSchema } from '@/validations/user.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await authenticateRequest(req);
    const { id } = await params;
    const body = await req.json();
    const parsed = addressSchema.partial().safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const addresses = await updateAddress(session.userId, id, parsed.data);
    return apiSuccess(addresses, 'Address updated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error updating address';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await authenticateRequest(req);
    const { id } = await params;
    const addresses = await deleteAddress(session.userId, id);
    return apiSuccess(addresses, 'Address deleted successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error deleting address';
    return apiError('OPERATION_FAILED', message, 400);
  }
}

