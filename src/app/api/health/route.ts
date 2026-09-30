import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { redisClient } from '@/lib/redis';

export async function GET() {
  let dbStatus = 'disconnected';
  try {
    await connectDB();
    dbStatus = 'connected';
  } catch (e: unknown) {
    dbStatus = 'error: ' + (e instanceof Error ? e.message : 'failed');
  }

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: dbStatus,
      cache: redisClient ? 'active' : 'memory_fallback',
    },
    uptime: process.uptime(),
  });
}
