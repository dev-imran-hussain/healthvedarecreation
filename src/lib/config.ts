import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('3000'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  
  // Database
  MONGODB_URI: z.string().default('mongodb://127.0.0.1:27017/healthveda'),
  
  // Auth
  AUTH_SECRET: z.string().min(16).default('health_veda_secret_development_key_32_characters_long!'),
  AUTH_COOKIE_NAME: z.string().default('hvo_session'),
  AUTH_TOKEN_EXPIRY: z.string().default('7d'),
  
  // Razorpay
  RAZORPAY_KEY_ID: z.string().default('rzp_test_mock_123456789'),
  RAZORPAY_KEY_SECRET: z.string().default('rzp_test_secret_mock_987654321'),
  RAZORPAY_WEBHOOK_SECRET: z.string().default('rzp_webhook_secret_mock_abc'),
  
  // Cloudinary
  CLOUDINARY_CLOUD_NAME: z.string().optional().default('healthveda'),
  CLOUDINARY_API_KEY: z.string().optional().default('mock_api_key'),
  CLOUDINARY_API_SECRET: z.string().optional().default('mock_api_secret'),
  
  // Email Provider
  EMAIL_PROVIDER_API_KEY: z.string().optional().default('mock_email_key'),
  EMAIL_FROM: z.string().email().default('orders@healthvedaorganics.com'),
});

export const config = envSchema.parse(process.env);
export const env = config;

