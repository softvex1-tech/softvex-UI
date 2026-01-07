'use client';

import { ClipboardList, DraftingCompass, Code, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const timelineEvents = [
  {
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    date: 'Step 1',
    title: 'Discovery & Planning',
    description: 'We start by understanding your vision, goals, and requirements to create a detailed project roadmap.',
  },
  {
    icon: <DraftingCompass className="h-6 w-6 text-white" />,
    date: 'Step 2',
    title: 'Design & Prototyping',
    description: 'Our team designs intuitive UI/UX and creates interactive prototypes to visualize the end product.',
  },
  {
    icon: <Code className="h-6 w-6 text-white" />,
    date: 'Step 3',
    title: 'Development & Testing',
    description: 'We build the application using agile methodology and conduct rigorous testing to ensure quality.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    date: 'Step 4',
    title: 'Deployment & Support',
    description: 'We handle the launch and provide ongoing support to ensure smooth operation and future growth.',
  },
];

function TimelineItem({ event, index }: { event: (typeof timelineEvents)[0], index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center w-full',
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      )}
    >
      <div className={cn('w-1/2', index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left')}>
        <div
          className={cn(
            'p-6 rounded-lg glass-card transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="font-bold text-primary mb-1">{event.date}</p>
          <h3 className="font-headline text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-muted-foreground text-sm">{event.description}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineNode({ index }: { index: number }) {
   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const event = timelineEvents[index];
  
  return (
     <div
      ref={ref}
      className={cn(
        'absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background transition-all duration-500',
        inView ? 'scale-100' : 'scale-0'
      )}
      style={{ top: `calc(${(index / (timelineEvents.length - 1)) * 100}% - 24px)` }}
    >
      {event.icon}
    </div>
  )
}


export function Timeline() {
  return (
    <div className="mt-24 md:mt-32">
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
        How We Work
      </h2>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
        <div className="relative space-y-16">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
        {timelineEvents.map((_, index) => (
            <TimelineNode key={index} index={index} />
          ))}
      </div>
    </div>
  );
}
