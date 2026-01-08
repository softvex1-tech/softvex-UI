import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export const careerFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  role: z.string().min(1, { message: 'Please select a job role.' }),
  resumeUrl: z.string().url({ message: 'Please provide a valid URL for your resume.' }),
});
