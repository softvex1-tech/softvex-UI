'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-20 h-full w-full">
        <div className="radial-gradient"></div>
    </div>
  );
}
