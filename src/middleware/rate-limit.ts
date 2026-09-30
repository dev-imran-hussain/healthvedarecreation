import { NextRequest } from 'next/server';
import { apiError } from '@/utils/response';

/**
 * In-Memory Rate Limiter (Sections 48, 49, 50)
 * Memory-efficient sliding window counter by IP address.
 * No Redis infrastructure needed for lean deployments on Hostinger.
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const memoryRateLimitStore = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of memoryRateLimitStore.entries()) {
    if (now > record.resetAt) {
      memoryRateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function checkRateLimit(
  req: NextRequest,
  limit = 20,
  windowMs = 60 * 1000,
  identifier = ''
): { allowed: boolean; remaining: number; response?: ReturnType<typeof apiError> } {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  const key = `${identifier}:${ip}`;
  const now = Date.now();
  const existing = memoryRateLimitStore.get(key);

  if (!existing || now > existing.resetAt) {
    memoryRateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      response: apiError(
        'TOO_MANY_REQUESTS',
        'Too many requests. Please wait a moment and try again.',
        429
      ),
    };
  }

  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count };
}

