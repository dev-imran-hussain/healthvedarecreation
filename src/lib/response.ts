import { NextResponse } from 'next/server';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total?: number;
    hasNextPage: boolean;
  };
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export function apiSuccess<T>(data: T, message = 'Operation successful', status = 200) {
  return NextResponse.json<ApiResponse<T>>(
    { success: true, data, message },
    { status }
  );
}

export function apiPaginated<T>(
  data: T[],
  pagination: { page: number; limit: number; total?: number; hasNextPage: boolean },
  message = 'Data retrieved successfully'
) {
  return NextResponse.json<ApiResponse<T[]>>(
    { success: true, data, pagination, message },
    { status: 200 }
  );
}

export function apiError(
  code: string,
  message: string,
  status = 400,
  details?: unknown
) {
  return NextResponse.json<ApiResponse>(
    {
      success: false,
      error: { code, message, details },
    },
    { status }
  );
}
