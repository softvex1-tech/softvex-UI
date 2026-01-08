'use server';
import 'dotenv/config';
import { z } from 'zod';
import { contactFormSchema, careerFormSchema } from '@/lib/schema';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import nodemailer from 'nodemailer';
import { env } from './env';

type FormState = {
  success: boolean;
  message: string;
};

// --- Google Sheets and Nodemailer Setup ---

// Google Sheets
const doc = new GoogleSpreadsheet(env.GOOGLE_SHEET_ID);

async function appendToSheet(sheetTitle: string, data: Record<string, any>) {
  await doc.useServiceAccountAuth({
    client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle[sheetTitle];
  if (!sheet) {
    throw new Error(`Sheet "${sheetTitle}" not found.`);
  }
  await sheet.addRow(data);
}

// Nodemailer
const transporter = nodemailer.createTransport({
  host: env.EMAIL_HOST,
  port: env.EMAIL_PORT,
  secure: env.EMAIL_PORT === 465,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

async function sendEmail(subject: string, html: string) {
  await transporter.sendMail({
    from: `"Softvex Website" <${env.EMAIL_FROM}>`,
    to: env.EMAIL_TO,
    subject,
    html,
  });
}

// --- Server Actions ---

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const parsed = contactFormSchema.safeParse(Object.fromEntries(data.entries()));

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map((e) => e.message).join(', '),
    };
  }

  const formData = parsed.data;

  try {
    // 1. Send to Google Sheets
    await appendToSheet('Contact Inquiries', {
      Timestamp: new Date().toISOString(),
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone || 'N/A',
      Service: formData.service,
      Message: formData.message,
    });

    // 2. Send Email Notification
    await sendEmail(
      'New Contact Form Submission',
      `
      <h1>New Contact Inquiry</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
      `
    );

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    };
  }
}

export async function submitCareerForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const parsed = careerFormSchema.safeParse(Object.fromEntries(data.entries()));

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map((e) => e.message).join(', '),
    };
  }

  const formData = parsed.data;

  try {
    // 1. Send to Google Sheets
    await appendToSheet('Career Applications', {
      Timestamp: new Date().toISOString(),
      Name: formData.name,
      Email: formData.email,
      Role: formData.role,
      Resume: formData.resumeUrl,
    });
    
    // 2. Send Email Notification
     await sendEmail(
      'New Career Application',
      `
      <h1>New Career Application</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Applying for:</strong> ${formData.role}</p>
      <p><strong>Resume Link:</strong> <a href="${formData.resumeUrl}">${formData.resumeUrl}</a></p>
      `
    );

    return {
      success: true,
      message: 'Your application has been submitted successfully. We will be in touch!',
    };
  } catch (error) {
    console.error('Error submitting career form:', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    };
  }
}
