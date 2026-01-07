'use server';

import { z } from 'zod';
import { contactFormSchema, careerFormSchema } from '@/lib/schema';

type FormState = {
  success: boolean;
  message: string;
};

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

  try {
    console.log('Contact form submitted:', parsed.data);
    // Simulate backend processing (e.g., save to Google Sheet, send email)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would implement Nodemailer to send emails and Google Sheets API to save data.
    // This is a simulation.

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

  try {
    console.log('Career form submitted:', parsed.data);
    // Simulate backend processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would implement Nodemailer to send emails and Google Sheets API to save data.
    // This is a simulation.
    
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
