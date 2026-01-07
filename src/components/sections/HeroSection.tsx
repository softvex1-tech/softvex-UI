import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40">
       <div className="absolute inset-0 z-0 animated-gradient bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>

      <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 text-center">
        <div className="space-y-6 col-span-1">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-reveal-wrapper">
              <span className="text-reveal">Digital Solutions That</span>
            </span>
            <span className="text-reveal-wrapper">
              <span
                className="text-reveal bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ animationDelay: '0.2s' }}
              >
                Power Your Growth
              </span>
            </span>
          </h1>
          <p
            className="fade-in-up max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.5s' }}
          >
            Web development, mobile apps, and digital marketing under one roof. We
            transform ideas into powerful digital experiences.
          </p>
          <div
            className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '0.7s' }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
