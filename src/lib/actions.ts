'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { careerFormSchema, contactFormSchema } from './schema';

/* ======================
   Types
====================== */
type ContactFormState = {
  success: boolean;
  message: string;
};

type CareerFormState = {
  success: boolean;
  message: string;
};

/* ======================
   Google Sheet
====================== */
function getGoogleSheet() {
  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
}

/* ======================
   Email Transport
====================== */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(subject: string, html: string): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: `Softvex <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

/* ======================
   Contact Form
====================== */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validated = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validated.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, phone, service, message } = validated.data;

  try {
    const doc = getGoogleSheet();
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle['Contact Form'];
    if (!sheet) throw new Error('Contact Form sheet not found');

    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
      Phone: phone || '',
      Service: service,
      Message: message,
    });

    await sendEmail(
      'New Contact Form Submission',
      `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || 'N/A'}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Message:</b> ${message}</p>
      `
    );

    return { success: true, message: 'Message sent successfully.' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: 'Server error. Try again later.' };
  }
}

/* ======================
   Career Form
====================== */
export async function submitCareerForm(
  prevState: CareerFormState,
  formData: FormData
): Promise<CareerFormState> {
  const validated = careerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
    resumeUrl: formData.get('resumeUrl'),
  });

  if (!validated.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, role, resumeUrl } = validated.data;

  try {
    const doc = getGoogleSheet();
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle['Career Form'];
    if (!sheet) throw new Error('Career Form sheet not found');

    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
      Role: role,
      ResumeURL: resumeUrl,
    });

    await sendEmail(
      `New Job Application: ${role}`,
      `
      <h3>New Job Application</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Role:</b> ${role}</p>
      <p><b>Resume:</b> <a href="${resumeUrl}">${resumeUrl}</a></p>
      `
    );

    return { success: true, message: 'Application submitted successfully.' };
  } catch (error) {
    console.error('Career form error:', error);
    return { success: false, message: 'Server error. Try again later.' };
  }
}
