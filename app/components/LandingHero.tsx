'use client';

import { useState } from 'react';

export default function LandingHero() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('azizakturin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="min-h-screen flex flex-col px-16 pt-28 pb-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Large name */}
      <div className="relative flex-1 flex flex-col justify-start">
        <h1
          className="font-black leading-[0.88] tracking-tight text-white lowercase"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 13rem)' }}
        >
          <span className="block overflow-hidden">
            <span className="reveal-bottom block" style={{ animationDelay: '100ms' }}>aziz</span>
          </span>
          <span className="block overflow-hidden">
            <span className="reveal-bottom block" style={{ animationDelay: '180ms' }}>akturin.</span>
          </span>
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="relative flex items-end justify-between mt-16">
        {/* Email + copy */}
        <div className="overflow-hidden">
          <div className="reveal-bottom flex items-center gap-3" style={{ animationDelay: '300ms' }}>
            <span className="font-mono text-sm text-white/60">azizakturin@gmail.com</span>
            <button
              onClick={copy}
              aria-label="Copy email"
              className="text-white/30 hover:text-white/70 transition-colors"
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden max-w-sm text-right">
          <p
            className="reveal-bottom text-white/70 text-2xl font-semibold leading-snug"
            style={{ animationDelay: '360ms' }}
          >
            i build to make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
