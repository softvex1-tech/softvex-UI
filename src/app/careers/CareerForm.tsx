'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { careerFormSchema } from '@/lib/schema';
import { submitCareerForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

type FormData = z.infer<typeof careerFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit Application'}
    </Button>
  );
}

export function CareerForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitCareerForm, {
    success: false,
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(careerFormSchema),
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        reset();
      }
    }
  }, [state, toast, reset]);
  
  const jobRoles = ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "UI/UX Designer", "Project Manager"];

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...register('name')} placeholder="Enter your full name" />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...register('email')} placeholder="Enter your email address" />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role">Job Role</Label>
        <Select name="role" onValueChange={(value) => {
            setValue('role', value);
            trigger('role');
        }}>
          <SelectTrigger>
            <SelectValue placeholder="Select a job role" />
          </SelectTrigger>
          <SelectContent>
            {jobRoles.map(role => (
              <SelectItem key={role} value={role}>{role}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="resumeUrl">Resume URL</Label>
        <Input id="resumeUrl" {...register('resumeUrl')} placeholder="https://linkedin.com/in/your-profile" />
        {errors.resumeUrl && <p className="text-sm text-destructive">{errors.resumeUrl.message}</p>}
      </div>

      <SubmitButton />
    </form>
  );
}
