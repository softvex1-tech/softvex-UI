'use client';
import { ContactForm } from './ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { AmazingFactWindow } from '@/components/ui/AmazingFactWindow';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Have a project in mind or just want to say hello? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="rounded-lg glass-card p-8 md:p-12">
          <h2 className="font-headline text-2xl font-bold mb-6">Send us a message</h2>
          <ContactForm />
        </div>
        <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:info@softvex.in" className="block hover:text-primary"><span className="font-semibold">Inquiries:</span> info@softvex.in</a>
                        <a href="mailto:support@softvex.in" className="block hover:text-primary"><span className="font-semibold">Support:</span> support@softvex.in</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1"/>
                    <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p>Bandra, Mumbai, Maharashtra</p>
                    </div>
                </div>
            </div>
            <div className="pt-8 flex justify-center">
              <AmazingFactWindow />
            </div>
        </div>
      </div>
    </div>
  );
}
