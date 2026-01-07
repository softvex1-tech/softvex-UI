'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { contactFormSchema } from '@/lib/schema';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

type FormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

function ContactFormComponent() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service');
  
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    message: '',
  });
  
  const services = ["Web Development", "App Development", "Digital Marketing", "CRM/ERP Solutions", "Custom Software", "Branding & UI/UX", "Other"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: services.includes(serviceQuery || '') ? serviceQuery : undefined,
    }
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        reset({ service: undefined, name: '', email: '', phone: '', message: '' });
      }
    }
  }, [state, toast, reset]);
  
  const selectedService = watch('service');

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} placeholder="Enter your full name" />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} placeholder="Enter your email address" />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" {...register('phone')} placeholder="Enter your phone number" />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select 
          name="service" 
          value={selectedService}
          onValueChange={(value) => {
            setValue('service', value);
            trigger('service');
        }}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map(service => (
              <SelectItem key={service} value={service}>{service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register('message')} rows={4} placeholder="How can we help you?" />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactFormComponent />
    </Suspense>
  )
}
