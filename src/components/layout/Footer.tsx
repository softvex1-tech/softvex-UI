import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-[#161C2C] text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Logo src="/assets/logo2.png" />
            <p className="text-sm text-gray-400">
              Building Digital Solutions That Power Your Growth.
            </p>
            <div className="flex space-x-2">
                <Button variant="outline" size="icon" className='bg-white/10 hover:bg-white/20 border-0 rounded-full'>
                    <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
                </Button>
                <Button variant="outline" size="icon" className='bg-white/10 hover:bg-white/20 border-0 rounded-full'>
                     <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white"><Twitter size={20} /></a>
                </Button>
                 <Button variant="outline" size="icon" className='bg-white/10 hover:bg-white/20 border-0 rounded-full'>
                     <a href="#" aria-label="Github" className="text-gray-300 hover:text-white"><Github size={20} /></a>
                </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">App Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white">CRM Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <a href="mailto:info@softvex.in" className="text-sm text-gray-400 hover:text-white block"><span className="font-semibold">Inquiries:</span> info@softvex.in</a>
            <a href="mailto:support@softvex.in" className="text-sm text-gray-400 hover:text-white block"><span className="font-semibold">Support:</span> support@softvex.in</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Softvex Digital Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
