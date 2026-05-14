'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const SIZE = 28;

    document.documentElement.style.setProperty('cursor', 'none', 'important');
    document.body.style.setProperty('cursor', 'none', 'important');

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX - SIZE / 2}px`;
      el.style.top = `${e.clientY - SIZE / 2}px`;
      el.style.opacity = '1';
    };
    const hide = () => { el.style.opacity = '0'; };
    const show = () => { el.style.opacity = '1'; };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 28,
        height: 28,
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: 0,
        backgroundImage: "url('/cursor-pokeball.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageRendering: 'pixelated',
        filter: 'brightness(1)',
      }}
    />
  );
}
