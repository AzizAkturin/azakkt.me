'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingScreen() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;
    if (sessionStorage.getItem('loaded')) return;
    sessionStorage.setItem('loaded', '1');
    setShow(true);

    const hold = setTimeout(() => setPhase('hold'),  500);
    const out  = setTimeout(() => setPhase('out'),  2500);
    const done = setTimeout(() => setPhase('done'), 3000);
    return () => { clearTimeout(hold); clearTimeout(out); clearTimeout(done); };
  }, [pathname]);

  if (!show || phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{
        backgroundColor: '#1e2d1e',
        opacity: phase === 'out' ? 0 : 1,
        transition: phase === 'out' ? 'opacity 0.5s ease' : undefined,
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* Pokéball */}
      <div style={{
        opacity: phase === 'in' ? 0 : 1,
        transition: 'opacity 0.5s ease',
        animation: 'spin 1.4s linear infinite',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cursor-pokeball.png"
          alt="loading"
          width={96}
          height={96}
          style={{ imageRendering: 'pixelated', display: 'block' }}
        />
      </div>

      {/* Label */}
      <p className="font-mono text-sm text-white/40 tracking-widest uppercase"
        style={{ opacity: phase === 'in' ? 0 : 1, transition: 'opacity 0.5s ease 0.05s' }}>
        aziz akturin portfolio
      </p>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full">
        <div
          className="h-full bg-white/50"
          style={{
            width: phase === 'hold' ? '75%' : '100%',
            transition: phase === 'hold'
              ? 'width 3s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
