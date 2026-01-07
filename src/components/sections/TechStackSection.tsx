import { cn } from '@/lib/utils';
import { SiReact, SiNodedotjs, SiFirebase, SiMongodb, SiGooglecloud, SiAmazonaws, SiFlutter, SiWordpress } from 'react-icons/si';

const technologies = [
  { icon: SiReact, name: 'React', size: 'h-10 w-10' },
  { icon: SiNodedotjs, name: 'Node.js', size: 'h-10 w-10' },
  { icon: SiFirebase, name: 'Firebase', size: 'h-10 w-10' },
  { icon: SiMongodb, name: 'MongoDB', size: 'h-10 w-10' },
  { icon: SiGooglecloud, name: 'Google Cloud', size: 'h-10 w-10' },
  { icon: SiAmazonaws, name: 'AWS', size: 'h-10 w-10' },
  { icon: SiFlutter, name: 'Flutter', size: 'h-10 w-10' },
  { icon: SiWordpress, name: 'WordPress', size: 'h-10 w-10' },
];

function TechIcon({ icon: Icon, name, size, style }: { icon: React.ElementType, name: string, size: string, style: React.CSSProperties }) {
  return (
    <div
      className="absolute flex h-24 w-24 items-center justify-center rounded-full glass-card"
      style={style}
    >
      <div className="group relative">
        <Icon className={cn(size, 'text-foreground/80')} />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-popover px-2 py-1 text-sm font-medium text-popover-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {name}
        </span>
      </div>
    </div>
  );
}

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
        <div className="relative flex h-96 items-center justify-center">
          <div className="absolute h-1 w-1 rounded-full bg-primary/50 shadow-[0_0_80px_40px_hsl(var(--primary))]"></div>
           {technologies.map((tech, index) => (
            <TechIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              size={tech.size}
              style={{
                animation: `orbit 20s linear infinite`,
                animationDelay: `${index * (20 / technologies.length)}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
