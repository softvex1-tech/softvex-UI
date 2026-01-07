'use server';

import { z } from 'zod';

const envSchema = z.object({
  // Google Sheets
  GOOGLE_SHEET_ID: z.string().min(1, 'Google Sheet ID is required'),
  GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().email('Valid Google service account email is required'),
  GOOGLE_PRIVATE_KEY: z.string().min(1, 'Google private key is required'),

  // Email (Nodemailer)
  EMAIL_HOST: z.string().min(1, 'smtp.zoho.in'),
  EMAIL_PORT: z.coerce.number().int().positive('587'),
  EMAIL_USER: z.string().min(1, 'info@softvex.in'),
  EMAIL_PASS: z.string().min(1, 'va0ZwVNFBjRs'),
  EMAIL_FROM: z.string().email('Valid "From" info@softvex.in'),
  EMAIL_TO: z.string().email('Valid "To" info@softvex.in'),
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
