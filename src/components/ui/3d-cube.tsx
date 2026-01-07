'use client';
import { cn } from '@/lib/utils';

export function Cube() {
  return (
    <div className="scene">
      <div className="cube-wrapper">
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>
    </div>
  );
}
