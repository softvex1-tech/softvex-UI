import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-3" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-8 w-8"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
          </linearGradient>
        </defs>
        <path fill="#59C1D4" d="M50 8.35L8.35 50 50 91.65 91.65 50z"/>
        <path fill="#3FA6BE" d="M50 8.35L8.35 50 50 50z"/>
        <path fill="#7DBAD2" d="M50 8.35L91.65 50 50 50z"/>
        <path fill="#2E86A4" d="M8.35 50L50 91.65 50 50z"/>
        <path fill="#5DA4CB" d="M91.65 50L50 91.65 50 50z"/>
        <path fill="#222A3F" d="M50 30L30 50 50 70 70 50z" />
        <path fill="#85D5E1" d="M50 41L41 50 50 59 59 50z" />
      </svg>
      <span className="text-2xl font-bold tracking-tight" style={{ color: '#222A3F' }}>
        softvex
      </span>
    </div>
  );
}
