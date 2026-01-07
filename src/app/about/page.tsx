'use client';

import { Timeline } from './Timeline';
import { Target, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <div className="container mx-auto py-16 md:py-24 overflow-hidden">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-reveal-wrapper">
            <span className="text-reveal" style={{ animationDelay: '0s' }}>About Softvex</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
          We are a team of passionate innovators, dedicated to crafting digital
          experiences that drive success and inspire change.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-24">
        <div className="space-y-8">
            <div 
              ref={missionRef}
              className={cn(
                "p-8 rounded-lg glass-card transition-all duration-700",
                missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: '0.2s' }}
            >
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
             <div 
                ref={visionRef}
                className={cn(
                  "p-8 rounded-lg glass-card transition-all duration-700",
                  visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: '0.4s' }}
              >
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
      </div>
      
      <Timeline />
    </div>
  );
}
