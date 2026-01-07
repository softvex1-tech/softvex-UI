import { Button } from '@/components/ui/button';
import Link from 'next/link';

const serviceDetails = [
  {
    title: 'Web Development',
    description: 'We build beautiful, responsive, and lightning-fast websites and web applications. From corporate sites to complex e-commerce platforms, our solutions are engineered for performance, security, and scalability. We utilize modern frameworks like React, Next.js, and Node.js to deliver exceptional user experiences.',
    imageUrl: 'https://picsum.photos/seed/webdev/600/400',
    imageHint: 'web development code'
  },
  {
    title: 'App Development',
    description: 'Our team creates native and cross-platform mobile applications for iOS and Android that captivate users and drive engagement. We handle the entire lifecycle from UI/UX design to deployment and maintenance, ensuring your app stands out in a crowded marketplace.',
    imageUrl: 'https://picsum.photos/seed/appdev/600/400',
    imageHint: 'mobile app interface'
  },
  {
    title: 'Digital Marketing',
    description: 'Amplify your online presence with our data-driven digital marketing strategies. We specialize in Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, content marketing, and social media management to increase your visibility, generate leads, and boost your ROI.',
    imageUrl: 'https://picsum.photos/seed/marketing/600/400',
    imageHint: 'marketing analytics chart'
  },
  {
    title: 'CRM & ERP Solutions',
    description: 'Integrate and automate your business processes with our custom Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) solutions. We help you streamline operations, improve customer engagement, and make smarter, data-backed decisions.',
    imageUrl: 'https://picsum.photos/seed/erp/600/400',
    imageHint: 'business process flowchart'
  }
];

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
      <div className="space-y-24">
        {serviceDetails.map((service, index) => (
          <div
            key={service.title}
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-row-dense' : ''}`}
          >
            <div className={`space-y-4 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
              <p className="text-muted-foreground">{service.description}</p>
              <Button asChild>
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className={`${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
              <img
                src={service.imageUrl}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-auto"
                data-ai-hint={service.imageHint}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
