import { NextRequest } from 'next/server';
import { authenticateRequest } from './auth';
import { ForbiddenError } from '@/utils/errors';
import { TokenPayload } from '@/lib/auth';

export async function authorizeAdmin(req?: NextRequest): Promise<TokenPayload> {
  const session = await authenticateRequest(req);
  if (session.role !== 'admin') {
    throw new ForbiddenError('Admin privileges required to access this resource');
  }
  return session;
}

