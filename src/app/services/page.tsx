'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { servicePlaceholders } from '@/lib/placeholder-images';


function ServiceCard({ service, index }: { service: (typeof servicePlaceholders)[0], index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'glass-card rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col md:flex-row gap-8 items-center',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="md:w-1/3">
        <Image
          src={service.imageUrl}
          alt={service.description}
          width={400}
          height={300}
          data-ai-hint={service.imageHint}
          className="rounded-lg object-cover aspect-[4/3]"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.description}</p>
        <Button variant="link" asChild className="p-0 h-auto">
          <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          A deep dive into how we can help your business thrive in the digital age.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {servicePlaceholders.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
