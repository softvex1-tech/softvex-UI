import { Timeline } from './Timeline';
import { Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          About Softvex
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          We are a team of passionate innovators, dedicated to crafting digital
          experiences that drive success and inspire change.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-24">
        <div className="order-2 lg:order-1 space-y-8">
            <div className="p-8 rounded-lg glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To empower businesses with transformative technology. We believe in the power of code to solve complex problems, create opportunities, and build a better digital future through excellence and collaboration.
              </p>
            </div>
             <div className="p-8 rounded-lg glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-headline text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To be a leading digital partner, recognized for our innovation and quality. We envision a world where technology seamlessly extends human potential, and we strive to be at the forefront of that evolution.
              </p>
            </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://picsum.photos/seed/aboutus/600/500"
            alt="Team working together"
            className="rounded-lg shadow-lg"
            data-ai-hint="team collaboration"
          />
        </div>
      </div>
      
      <Timeline />
    </div>
  );
}
