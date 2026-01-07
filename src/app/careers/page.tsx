import { CareerForm } from './CareerForm';

export default function CareersPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Join Our Team
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          We are always looking for talented individuals to join our mission. If you are passionate about technology and innovation, we would love to hear from you.
        </p>
      </div>
      <div className="rounded-lg glass-card p-8 md:p-12">
        <h2 className="font-headline text-2xl font-bold mb-6 text-center">Apply Now</h2>
        <CareerForm />
      </div>
    </div>
  );
}
