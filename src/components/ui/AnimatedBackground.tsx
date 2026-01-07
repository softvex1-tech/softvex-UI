'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const blobsData = [
  {
    class: 'bg-primary',
    initial: 'top-1/4 left-1/4 w-96 h-96',
    animation: {
      translateX: '200px',
      translateY: '100px',
      scale: '1.2',
    },
    duration: '25s',
  },
  {
    class: 'bg-accent',
    initial: 'bottom-1/4 right-1/4 w-80 h-80',
    animation: {
      translateX: '-150px',
      translateY: '-50px',
      scale: '1.1',
    },
    duration: '30s',
  },
  {
    class: 'bg-secondary',
    initial: 'top-1/2 left-1/3 w-72 h-72',
    animation: {
      translateX: '100px',
      translateY: '-150px',
      scale: '0.9',
    },
    duration: '20s',
  },
];

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-20 h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl"></div>
      {blobsData.map((blob, i) => (
        <div
          key={i}
          className={cn('blob', blob.class, blob.initial)}
          style={{
            animationDuration: blob.duration,
            '--tw-translate-x': blob.animation.translateX,
            '--tw-translate-y': blob.animation.translateY,
            '--tw-scale-x': blob.animation.scale,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
