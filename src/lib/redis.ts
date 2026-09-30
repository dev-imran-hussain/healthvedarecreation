import Redis from 'ioredis';
import { config } from './config';

class MemoryCache {
  private store = new Map<string, { value: string; expiry: number }>();

  async get(key: string): Promise<string | null> {
    const item = this.store.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key: string, value: string, exOption?: string, seconds?: number): Promise<'OK'> {
    const ttl = (exOption === 'EX' && seconds) ? seconds * 1000 : 3600 * 1000;
    this.store.set(key, { value, expiry: Date.now() + ttl });
    return 'OK';
  }

  async del(key: string): Promise<number> {
    return this.store.delete(key) ? 1 : 0;
  }
}

let redisClient: {
  get: (key: string) => Promise<string | null>;
  set: (key: string, value: string, ex?: string, ttl?: number) => Promise<string>;
  del: (key: string) => Promise<number>;
};

if (config.REDIS_URL) {
  try {
    const client = new Redis(config.REDIS_URL, {
      maxRetriesPerRequest: 1,
      lazyConnect: true,
    });
    client.on('error', (err) => {
      console.warn('⚠️ Redis error, falling back to in-memory cache:', err.message);
    });
    redisClient = client as unknown as typeof redisClient;
  } catch {
    redisClient = new MemoryCache() as unknown as typeof redisClient;
  }
} else {
  redisClient = new MemoryCache() as unknown as typeof redisClient;
}

export const redis = redisClient;
export { redisClient };
