'use client';

import { useEffect, useState } from 'react';

type Star = {
  x: number;
  y: number;
  px: number;      // pixel unit size
  opacity: number;
  type: 'dot' | 'cross' | 'small';
};

export default function PixelStars({ count = 55 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => {
        const r = Math.random();
        return {
          x: Math.random() * 100,
          y: Math.random() * 100,
          px: r > 0.8 ? 3 : r > 0.5 ? 2 : 1,
          opacity: 0.12 + Math.random() * 0.25,
          type: r > 0.65 ? 'cross' : r > 0.35 ? 'dot' : 'small',
        };
      })
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s, i) => {
        const p = s.px;
        if (s.type === 'cross') {
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                opacity: s.opacity,
                width: p * 5,
                height: p * 5,
              }}
            >
              {/* horizontal bar */}
              <div style={{ position: 'absolute', left: 0, top: p * 2, width: p * 5, height: p, backgroundColor: 'white' }} />
              {/* vertical bar */}
              <div style={{ position: 'absolute', left: p * 2, top: 0, width: p, height: p * 5, backgroundColor: 'white' }} />
            </div>
          );
        }
        if (s.type === 'dot') {
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: p * 2,
                height: p * 2,
                backgroundColor: 'white',
                opacity: s.opacity,
              }}
            />
          );
        }
        // small: single pixel
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: p,
              height: p,
              backgroundColor: 'white',
              opacity: s.opacity,
            }}
          />
        );
      })}
    </div>
  );
}
