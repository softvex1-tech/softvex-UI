import { cn } from '@/lib/utils';
import { SiReact, SiNodedotjs, SiFirebase, SiMongodb, SiGooglecloud, SiAmazon, SiFlutter, SiWordpress } from 'react-icons/si';

const technologies = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiGooglecloud, name: 'Google Cloud', color: '#4285F4' },
  { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
  { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
  { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
];

export function TechStackSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            We use cutting-edge technologies to build robust and scalable solutions.
          </p>
        </div>
        <div className="tech-scroller w-full overflow-hidden">
          <div className="tech-scroller-inner flex w-max gap-16 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="group relative flex flex-col items-center justify-center gap-2">
                <tech.icon className="h-16 w-16 transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                 <span className="text-sm font-medium text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">{tech.name}</span>
                 <span className="absolute top-full mt-2 rounded-md bg-popover px-2 py-1 text-sm font-medium text-popover-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
