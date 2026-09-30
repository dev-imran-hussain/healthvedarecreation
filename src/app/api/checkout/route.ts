import { NextRequest } from 'next/server';
import { validateAndCalculateCheckout } from '@/services/checkout.service';
import { checkoutSchema } from '@/validations/checkout.schema';
import { apiSuccess, apiError } from '@/utils/response';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', parsed.error.issues[0].message, 400);
    }

    const result = await validateAndCalculateCheckout(
      parsed.data.items,
      parsed.data.couponCode
    );

    return apiSuccess(result, 'Checkout calculated successfully');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Checkout calculation failed';
    return apiError('CHECKOUT_FAILED', message, 400);
  }
}
