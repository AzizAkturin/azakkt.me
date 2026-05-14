'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sendEmail } from '../actions/sendEmail';

const EMAIL = 'azizakturin@gmail.com';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendEmail(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'something went wrong. try again.');
      setStatus('error');
    }
  };

  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat px-8 pt-32 pb-24 text-white" style={{ backgroundImage: "url('/contact-bg.png')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-4xl mx-auto">

        {/* Back */}
        <div className="overflow-hidden mb-20">
          <Link
            href="/"
            className="reveal-bottom inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/80 transition-colors"
            style={{ animationDelay: '0ms' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            back
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Left — email */}
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden mb-6">
              <h1
                className="reveal-bottom text-3xl font-black tracking-tight lowercase"
                style={{ animationDelay: '60ms' }}
              >
                contact.
              </h1>
            </div>
            <div className="overflow-hidden mb-10">
              <p
                className="reveal-bottom text-white/50 text-sm leading-relaxed"
                style={{ animationDelay: '120ms' }}
              >
                have a project in mind, want to collaborate, or just want to say hi? reach out.
              </p>
            </div>

            <div className="overflow-hidden">
              <div
                className="reveal-bottom flex items-center gap-3 border border-white/20 px-4 py-3"
                style={{ animationDelay: '180ms' }}
              >
                <span className="text-white/70 text-sm font-mono flex-1">{EMAIL}</span>
                <button
                  onClick={copy}
                  className="text-xs text-white/40 hover:text-white transition-colors border border-white/20 px-3 py-1 hover:border-white/60 flex-shrink-0"
                >
                  {copied ? 'copied!' : 'copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'sent' ? (
              <div className="flex flex-col justify-center h-full gap-4">
                <p className="text-white/70 text-sm">message sent.</p>
                <p className="text-white/50 text-sm">i will get back to you within 48 hours. if not, email <a href="mailto:azizakturin@gmail.com" className="underline hover:text-white/80 transition-colors">azizakturin@gmail.com</a></p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-white/40 text-xs hover:text-white/70 transition-colors self-start"
                >
                  send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="overflow-hidden">
                  <div className="reveal-bottom flex flex-col gap-1.5" style={{ animationDelay: '100ms' }}>
                    <label className="text-white/30 text-xs uppercase tracking-widest">name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="bg-transparent border border-white/20 px-4 py-2.5 text-white text-sm outline-none focus:border-white/60 transition-colors placeholder:text-white/20"
                      placeholder="your name"
                    />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="reveal-bottom flex flex-col gap-1.5" style={{ animationDelay: '160ms' }}>
                    <label className="text-white/30 text-xs uppercase tracking-widest">email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="bg-transparent border border-white/20 px-4 py-2.5 text-white text-sm outline-none focus:border-white/60 transition-colors placeholder:text-white/20"
                      placeholder="your email"
                    />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="reveal-bottom flex flex-col gap-1.5" style={{ animationDelay: '220ms' }}>
                    <label className="text-white/30 text-xs uppercase tracking-widest">message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="bg-transparent border border-white/20 px-4 py-2.5 text-white text-sm outline-none focus:border-white/60 transition-colors placeholder:text-white/20 resize-none"
                      placeholder="what's on your mind?"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">{errorMsg}</p>
                )}
                <div className="overflow-hidden">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="reveal-bottom w-full border border-white/30 text-white/80 text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors mt-2 disabled:opacity-40"
                    style={{ animationDelay: '280ms' }}
                  >
                    {status === 'sending' ? 'sending...' : 'send message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
