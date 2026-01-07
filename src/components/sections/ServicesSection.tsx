'use client';

import * as React from 'react';
import {
  Code2,
  Smartphone,
  TrendingUp,
  DatabaseZap,
  PenTool,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const services = [
  {
    icon: <Code2 className="h-10 w-10 text-cyan-500" />,
    title: 'Web Development',
    description:
      'Crafting high-performance, scalable web applications tailored to your business needs.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-teal-500" />,
    title: 'App Development',
    description:
      'Building intuitive and engaging mobile apps for both iOS and Android platforms.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-sky-500" />,
    title: 'Digital Marketing',
    description:
      'Driving growth and visibility with data-driven SEO, SEM, and social media strategies.',
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-blue-500" />,
    title: 'CRM and ERP Solutions',
    description:
      'Streamlining your business operations with custom CRM and ERP integrations.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-indigo-500" />,
    title: 'Custom Software',
    description:
      'Developing bespoke software solutions to solve unique business challenges.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-violet-500" />,
    title: 'QA & Testing',
    description:
      'Ensuring your digital products are bug-free, reliable, and performant.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            We provide a comprehensive suite of IT services to propel your
            business forward.
          </p>
        </div>
        <div className="scroller w-full overflow-hidden">
          <div className="scroller-inner flex w-max gap-8 py-4">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="w-[350px]">
                 <Card
                    className="glass-card group h-full text-center hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <CardHeader className="items-center">
                      <div className="rounded-full bg-card/80 p-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
