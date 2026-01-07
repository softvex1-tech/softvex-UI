'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const serviceDetails = [
  {
    title: 'Web Development',
    description: 'We build beautiful, responsive, and lightning-fast websites and web applications. Our solutions are engineered for performance, security, and scalability.',
  },
  {
    title: 'App Development',
    description: 'Our team creates native and cross-platform mobile applications for iOS and Android that captivate users and drive engagement and ensure your app stands out.',
  },
  {
    title: 'Digital Marketing',
    description: 'Amplify your online presence with our data-driven digital marketing strategies. We specialize in SEO, PPC, content marketing, and social media management.',
  },
  {
    title: 'CRM & ERP Solutions',
    description: 'Integrate and automate your business processes with our custom CRM and ERP solutions. We help you streamline operations and improve customer engagement.',
  },
  {
    title: 'Custom Software',
    description: 'We design and develop bespoke software solutions tailored to your unique business challenges, helping you achieve specific goals and improve efficiency.',
  },
  {
    title: 'Branding & UI/UX',
    description: 'Our creative team crafts memorable brand identities and designs intuitive, user-friendly interfaces that deliver exceptional experiences and conversions.',
  }
];

function ServiceCard({ service, index }: { service: typeof serviceDetails[0], index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'glass-card rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-muted-foreground mb-6">{service.description}</p>
      <Button variant="link" asChild className="p-0 h-auto">
        <Link href="/contact">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceDetails.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
