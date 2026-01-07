'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function InteractiveCharacter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return <div className="w-48 h-48 md:w-64 md:h-64" />;
  }

  const headX = mousePosition.x * 10;
  const headY = mousePosition.y * 10;
  const eyeX = mousePosition.x * 6;
  const eyeY = mousePosition.y * 6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
      className="w-48 h-48 md:w-64 md:h-64"
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <motion.ellipse
          cx="100"
          cy="185"
          rx="60"
          ry="10"
          fill="hsl(var(--primary) / 0.2)"
          animate={{ scale: [1, 1.05, 1], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        />

        {/* Body */}
        <motion.g animate={{ y: [-5, 5, -5], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}>
          <path d="M 50,180 Q 50,100 100,100 Q 150,100 150,180 Z" fill="url(#bodyGradient)" />
          <defs>
            <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
          <rect x="90" y="120" width="20" height="20" rx="5" fill="hsl(var(--primary))" />
        </motion.g>

        {/* Head */}
        <motion.g animate={{ x: headX, y: headY }} transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.1 }}>
            <rect x="60" y="30" width="80" height="80" rx="15" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
            {/* Screen */}
            <rect x="68" y="38" width="64" height="40" rx="5" fill="hsl(210, 40%, 90%)" className="dark:fill-gray-800" />

             {/* Eyes */}
            <motion.g animate={{ x: eyeX, y: eyeY }} transition={{ type: 'spring', stiffness: 80, damping: 15 }}>
                <circle cx="90" cy="58" r="5" fill="hsl(var(--foreground))" />
                <circle cx="110" cy="58" r="5" fill="hsl(var(--foreground))" />
                <circle cx="89" cy="57" r="1.5" fill="white" />
                <circle cx="109" cy="57" r="1.5" fill="white" />
            </motion.g>
             {/* Antenna */}
            <line x1="100" y1="30" x2="100" y2="15" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
            <motion.circle 
              cx="100" 
              cy="12" 
              r="4" 
              fill="hsl(var(--accent))" 
              animate={{ scale: [1, 1.2, 1], transition: { duration: 1, repeat: Infinity } }}
            />
        </motion.g>
      </svg>
    </motion.div>
  );
}
