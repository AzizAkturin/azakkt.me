"use client";

import Link from "next/link";
import { useState } from "react";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/20">
        {/* Left: logo */}
        <Link
          href="/"
          className="reveal-top font-mono text-lg font-semibold text-white tracking-tight hover:opacity-60 transition-opacity"
          style={{ animationDelay: "0ms" }}
        >
          az.akkt.
        </Link>

        {/* Right: socials + hamburger */}
        <div className="flex items-center gap-5 text-white">
          <a href="https://linkedin.com/in/azizakturin" target="_blank" rel="noopener noreferrer"
            className="reveal-top block hover:opacity-70 transition-opacity" style={{ animationDelay: "100ms" }} aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/AzizAkturin" target="_blank" rel="noopener noreferrer"
            className="reveal-top block hover:opacity-70 transition-opacity" style={{ animationDelay: "200ms" }} aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://medium.com/@azizakturin" target="_blank" rel="noopener noreferrer"
            className="reveal-top block hover:opacity-70 transition-opacity" style={{ animationDelay: "300ms" }} aria-label="Medium">
            <MediumIcon />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="reveal-top flex flex-col gap-[5px]"
            style={{ animationDelay: "400ms" }}
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-end pt-24 px-8 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(30, 40, 30, 0.97)" }}
      >
        <nav className="flex flex-col items-end gap-6 mt-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-mono text-3xl font-semibold text-white hover:opacity-60 transition-opacity tracking-tight"
          >
            homepage
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="font-mono text-3xl font-semibold text-white hover:opacity-60 transition-opacity tracking-tight"
          >
            about
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-3xl font-semibold text-white hover:opacity-60 transition-opacity tracking-tight"
          >
            contact
          </Link>
        </nav>
      </div>
    </>
  );
}
