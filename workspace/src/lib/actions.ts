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
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    throw new Error('Google Sheets environment variables are not properly set.');
  }

  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
}

async function sendEmail(subject: string, html: string, recipientEmail?: string): Promise<boolean> {
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM) {
        console.error('Email environment variables are not properly set.');
        return false;
    }

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Send notification to admin
        await transport.sendMail({
            from: `Softvex <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO, // Admin email
            subject: subject,
            html: html,
        });

        // Send confirmation to user if an email is provided
        if (recipientEmail) {
            await transport.sendMail({
                from: `Softvex <${process.env.EMAIL_FROM}>`,
                to: recipientEmail,
                subject: 'Thank you for contacting Softvex!',
                html: `
                    <h3>Thank You!</h3>
                    <p>We have received your message and will get back to you shortly.</p>
                    <p>Best regards,<br/>The Softvex Team</p>
                `,
            });
        }
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

    await sendEmail(
      'New Contact Form Submission',
      `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      email
    );
    
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

    await sendEmail(
      `New Job Application: ${role}`,
      `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
      `,
      email
    );

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
