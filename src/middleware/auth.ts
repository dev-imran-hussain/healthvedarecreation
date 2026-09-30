import { NextRequest } from 'next/server';
import { getSession, verifyToken, TokenPayload } from '@/lib/auth';
import { UnauthorizedError } from '@/utils/errors';

export async function authenticateRequest(req?: NextRequest): Promise<TokenPayload> {
  // 1. Try HTTP-only session cookie
  const session = await getSession();
  if (session) return session;

  // 2. Try Authorization header (Bearer token)
  if (req) {
    const authHeader = req.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const payload = verifyToken(token);
      if (payload) return payload;
    }
  }

  throw new UnauthorizedError('Authentication required to access this resource');
}

