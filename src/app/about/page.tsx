import { Timeline } from './Timeline';

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

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to empower businesses with transformative technology. We believe in the power of code to solve complex problems, create opportunities, and build a better digital future. We are committed to excellence, collaboration, and pushing the boundaries of what's possible.
          </p>
          <h2 className="font-headline text-3xl font-bold pt-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be a leading digital solutions partner, recognized for our innovation, quality, and commitment to client success. We envision a world where technology is a seamless extension of human potential, and we strive to be at the forefront of that evolution.
          </p>
        </div>
        <div>
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
