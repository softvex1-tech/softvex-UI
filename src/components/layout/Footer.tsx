import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Building Digital Solutions That Power Your Growth.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Web Development</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">App Development</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">CRM Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Softvex Digital Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
