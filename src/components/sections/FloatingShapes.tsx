'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Globe, Layers, Server, Smartphone } from 'lucide-react';

const shapes = [
  {
    icon: <Layers size={48} className="text-primary" />,
    className: 'top-1/4 left-1/4',
    parallaxFactor: 0.03,
    animationDelay: '0s',
  },
  {
    icon: <Code size={32} className="text-accent" />,
    className: 'top-1/2 right-1/4',
    parallaxFactor: 0.05,
    animationDelay: '2s',
  },
  {
    icon: <Database size={40} className="text-secondary-foreground" />,
    className: 'bottom-1/4 left-1/3',
    parallaxFactor: 0.02,
    animationDelay: '4s',
  },
  {
    icon: <Globe size={36} className="text-primary" />,
    className: 'bottom-1/3 right-1/2',
    parallaxFactor: 0.04,
    animationDelay: '6s',
  },
  {
    icon: <Server size={28} className="text-accent" />,
    className: 'top-1/3 right-1/3',
    parallaxFactor: 0.06,
    animationDelay: '8s',
  },
  {
    icon: <Smartphone size={44} className="text-secondary-foreground" />,
    className: 'bottom-1/2 left-1/2',
    parallaxFactor: 0.035,
    animationDelay: '10s',
  },
];

export function FloatingShapes() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isMounted) return null;
  
  const getTransform = (factor: number) => {
    const x = (mousePos.x - window.innerWidth / 2) * factor;
    const y = (mousePos.y - window.innerHeight / 2) * factor;
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="absolute inset-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={cn(
            'absolute p-4 rounded-full glass-card transition-transform duration-500 ease-out',
            shape.className
          )}
          style={{
            ...getTransform(shape.parallaxFactor),
            animation: `float 12s infinite ease-in-out alternate`,
            animationDelay: shape.animationDelay,
            '--tw-translate-x': `${(Math.random() - 0.5) * 100}px`,
            '--tw-translate-y': `${(Math.random() - 0.5) * 100}px`,
            '--tw-scale-x': `${1 + (Math.random() - 0.5) * 0.2}`,
          } as React.CSSProperties}
        >
          {shape.icon}
        </div>
      ))}
    </div>
  );
}
