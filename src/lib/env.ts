'use server';

import { z } from 'zod';

const envSchema = z.object({
  // Google Sheets
  GOOGLE_SHEET_ID: z.string().min(1, 'Google Sheet ID is required'),
  GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().email('Valid Google service account email is required'),
  GOOGLE_PRIVATE_KEY: z.string().min(1, 'Google private key is required'),

  // Email (Nodemailer)
  EMAIL_HOST: z.string().min(1, 'Email host is required'),
  EMAIL_PORT: z.coerce.number().int().positive('Email port must be a positive integer'),
  EMAIL_USER: z.string().min(1, 'Email user is required'),
  EMAIL_PASS: z.string().min(1, 'Email password is required'),
  EMAIL_FROM: z.string().email('Valid "From" email address is required'),
  EMAIL_TO: z.string().email('Valid "To" email address is required'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors,
  );
  throw new Error('Invalid environment variables.');
}

export const env = parsedEnv.data;
