import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40">
       <div
        className="blob -top-1/4 left-1/4 h-[500px] w-[500px] bg-cyan-400/50"
        style={
          {
            '--tw-translate-x': '100px',
            '--tw-translate-y': '50px',
            '--tw-scale-x': '1.2',
            animationDuration: '25s'
          } as React.CSSProperties
        }
      ></div>
      <div
        className="blob -bottom-1/4 right-1/4 h-[500px] w-[500px] bg-teal-400/50"
        style={
          {
            '--tw-translate-x': '-80px',
            '--tw-translate-y': '-120px',
            '--tw-scale-x': '1.1',
             animationDelay: '5s',
             animationDuration: '30s'
          } as React.CSSProperties
        }
      ></div>
       <div
        className="blob top-1/4 right-1/2 h-[300px] w-[300px] bg-blue-400/50"
        style={
          {
            '--tw-translate-x': '120px',
            '--tw-translate-y': '-100px',
            '--tw-scale-x': '0.9',
             animationDelay: '10s',
             animationDuration: '35s'
          } as React.CSSProperties
        }
      ></div>
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 text-center">
        <div className="space-y-6 col-span-1">
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
            className="fade-in-up max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.5s' }}
          >
            Web development, mobile apps, and digital marketing under one roof.
            We turn your ideas into high-performance digital products.
          </p>
          <div
            className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
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
      </div>
    </section>
  );
}
