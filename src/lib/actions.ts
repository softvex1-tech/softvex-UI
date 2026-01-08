'use server';

import { z } from 'zod';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { careerFormSchema, contactFormSchema } from './schema';

type ContactFormState = {
  success: boolean;
  message: string;
};

type CareerFormState = {
  success: boolean;
  message: string;
};

function getGoogleSheet() {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
}

async function sendEmail(subject: string, html: string): Promise<boolean> {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transport.sendMail({
            from: `Softvex <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO,
            subject: subject,
            html: html,
        });
        return true;
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }
}


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  const { name, email, phone, service, message } = validatedFields.data;

  try {
    const doc = getGoogleSheet();
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['Contact Form'];
    if (!sheet) {
        throw new Error('"Contact Form" sheet not found in the Google Sheet.');
    }
    await sheet.addRow([new Date().toISOString(), name, email, phone || '', service, message]);

    const emailSent = await sendEmail(
      'New Contact Form Submission',
      `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    );

    if (!emailSent) {
      // Still return success to the user, but log the error
      console.error('Failed to send contact form email, but sheet was updated.');
    }
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    };
  }
}

export async function submitCareerForm(
  prevState: CareerFormState,
  formData: FormData
): Promise<CareerFormState> {
  const validatedFields = careerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
    resumeUrl: formData.get('resumeUrl'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  const { name, email, role, resumeUrl } = validatedFields.data;

  try {
    const doc = getGoogleSheet();
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['Career Form'];
     if (!sheet) {
        throw new Error('"Career Form" sheet not found in the Google Sheet.');
    }
    await sheet.addRow([new Date().toISOString(), name, email, role, resumeUrl]);

    const emailSent = await sendEmail(
      `New Job Application: ${role}`,
      `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
      `
    );

     if (!emailSent) {
      console.error('Failed to send career form email, but sheet was updated.');
    }

    return {
      success: true,
      message: 'Thank you for your application! We will be in touch shortly.',
    };
  } catch (error) {
    console.error('Error processing career form:', error);
    return {
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    };
  }
}
