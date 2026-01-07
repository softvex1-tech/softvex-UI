import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-8 w-8"
      >
        <defs>
          <linearGradient
            id="softvex-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#softvex-gradient)"
          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.42,142.28a12,12,0,0,1-17,17l-39.5-39.5a12,12,0,0,1,0-17l39.5-39.5a12,12,0,1,1,17,17L144.9,128Zm-73.84,0L82.58,98.78a12,12,0,1,1,17-17L139.09,128,99.58,167.5a12,12,0,0,1-17-17Z"
        />
      </svg>
      <span className="text-xl font-bold text-foreground">Softvex</span>
    </div>
  );
}
