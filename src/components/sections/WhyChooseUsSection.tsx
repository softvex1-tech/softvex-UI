import { Award, BrainCircuit, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-cyan-500" />,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies to build future-proof digital products that give you a competitive edge.',
  },
  {
    icon: <Users className="h-8 w-8 text-teal-500" />,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand your goals and deliver tailored solutions.',
  },
  {
    icon: <Award className="h-8 w-8 text-sky-500" />,
    title: 'Proven Expertise',
    description: 'Our team of experienced developers, designers, and marketers has a track record of delivering excellence.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-blue-500" />,
    title: 'Agile & Transparent',
    description: 'We follow agile methodologies and maintain open communication, ensuring you are involved at every stage.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Softvex?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            We are more than just a service provider; we are your technology partner.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-lg transition-all">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
