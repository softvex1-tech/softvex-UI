import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingShapes } from './FloatingShapes';

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-reveal-wrapper">
              <span className="text-reveal">Building Digital Solutions</span>
            </span>
            <span className="text-reveal-wrapper">
              <span
                className="text-reveal bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                style={{ animationDelay: '0.2s' }}
              >
                That Power Your Growth
              </span>
            </span>
          </h1>
          <p
            className="fade-in-up max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.5s' }}
          >
            Web development, mobile apps, and digital marketing under one roof.
            We turn your ideas into high-performance digital products.
          </p>
          <div
            className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{ animationDelay: '0.7s' }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-full min-h-[400px] w-full flex items-center justify-center">
          <FloatingShapes />
        </div>
      </div>
    </section>
  );
}
