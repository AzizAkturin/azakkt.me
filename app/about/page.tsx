import Link from 'next/link';
import Image from 'next/image';

const stack = [
  'TypeScript', 'JavaScript', 'Python', 'Go', 'SQL',
  'React', 'Next.js', 'Vue.js', 'React Native', 'Tailwind CSS',
  'Node.js', 'Express', 'FastAPI', 'Bun',
  'PostgreSQL', 'Docker', 'GitHub Actions',
  'Claude', 'Codex', 'ElevenLabs', 'AI Agents',
  'Nozomio', 'NumPy', 'Raspberry Pi', 'Algorithms',
];

const experience = [
  {
    role: 'student compliance analyst',
    org: 'information services office · university of oregon',
    period: 'feb 2026 – present',
    detail: 'analyzing digital resources, software tools, and subscriptions across the university to identify security vulnerabilities, compliance risks, and inefficiencies. building algorithmic approaches in smartsheet to audit platforms and support uo\'s transition to a centralized microsoft ecosystem.',
  },
  {
    role: 'research assistant',
    org: 'ray computational biophysics group · university of oregon',
    period: 'jan 2026 – present',
    detail: 'studying enhanced sampling methods for molecular dynamics simulations in dr. dhiman ray\'s lab. research focuses on designing interpretable, data-driven collective variables to capture biomolecular motions more efficiently. combines machine learning, sparse modeling, and physically meaningful molecular features to make simulations more powerful and understandable.',
  },
  {
    role: 'founder · synrax',
    org: 'oregon innovation challenge',
    period: 'jan 2026 – present',
    detail: 'building an ai-powered project intelligence platform that ingests data from github, task boards, calendars, and team communications to surface execution bottlenecks, delayed milestones, and unclear ownership. combines workflow analytics with ai-generated recommendations to give early-stage teams a clear picture of what is slowing them down — and exactly what to fix.',
  },
  {
    role: 'senior software engineer',
    org: 'QuackHacks · university of oregon',
    period: 'oct 2025 – present',
    detail: 'building and maintaining the technical infrastructure for one of the fastest-growing mlh hackathons on the west coast — 500+ applicants from 37 universities, $10k+ in prizes, sponsors include google, openai, pipeworks, base44, and emberex. full-stack work across the event website, application systems, registration tools, and internal platforms using next.js, react, and tailwind css.',
  },
  {
    role: 'hackathons',
    org: 'makemit · beaverhacks · quackhacks 2 · nozomio',
    period: 'sep 2024 – present',
    detail: 'won 3 hackathons across hardware, ai, and full-stack. makemit, cambridge, MA · beaverhacks, corvallis, OR · quackhacks 2, eugene, OR — best use of gemini api & top 5 / 41 projects · nozomio, san francisco, CA — best use of tensorlake & top 2 best use of insforge & top 8 / 70+ teams',
  },
  {
    role: 'founder & mentor',
    org: 'college mentor quest',
    period: 'apr 2024 – aug 2025',
    detail: 'founded a profitable college admissions business with 680+ subscribers and $2000+ revenue. conducted 1.5-hour sessions covering essay writing, college list strategy, and portfolio development. coordinated 81 students across 12 countries — 12 achieved 700+ in sat math, 2 reached a perfect 800, average boost of +230 points. acceptances to lumiere education research program and stanford pre-college.',
  },
  {
    role: 'founder',
    org: 'aquasync · international baccalaureate · crimson education',
    period: 'mar 2023 – aug 2024',
    detail: 'built an arduino-based irrigation system with a swift ios app to automate watering and monitor soil/air data via esp8266 sensors — improved irrigation efficiency by 56%. modeled the system as a weighted graph, using bfs and dijkstra\'s algorithm to optimize data transfer and detect low-humidity regions. awarded a $2,100 grant at the festival of hope (out of 500+ teams, created by international baccalaureate). won crimson 18 under 18 by pitching aquasync.',
  },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#1e2d1e' }} className="min-h-screen text-white">

      {/* Back */}
      <div className="px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/80 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          back
        </Link>
      </div>

      {/* Hero — header + photo */}
      <section className="px-8 pt-20 pb-28 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-20">
          <div className="flex-1">
            <div className="overflow-hidden mb-6">
              <p className="reveal-bottom text-white/40 text-xs uppercase tracking-widest" style={{ animationDelay: '60ms' }}>
                aziz akturin
              </p>
            </div>
            <h1 className="font-black leading-[1.0] tracking-tight lowercase text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
              <span className="block overflow-hidden">
                <span className="reveal-bottom block" style={{ animationDelay: '100ms' }}>i build to</span>
              </span>
              <span className="block overflow-hidden">
                <span className="reveal-bottom block" style={{ animationDelay: '160ms' }}>make an</span>
              </span>
              <span className="block overflow-hidden">
                <span className="reveal-bottom block" style={{ animationDelay: '220ms' }}>impact.</span>
              </span>
            </h1>
            <div className="overflow-hidden">
              <div className="reveal-bottom grid grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-sm max-w-xs" style={{ animationDelay: '300ms' }}>
                <span className="text-white/30 uppercase tracking-widest text-xs">school</span>
                <span className="text-white/70">university of oregon</span>
                <span className="text-white/30 uppercase tracking-widest text-xs">degree</span>
                <span className="text-white/70">b.s. math + cs</span>
                <span className="text-white/30 uppercase tracking-widest text-xs">location</span>
                <span className="text-white/70">eugene, oregon</span>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="overflow-hidden flex-shrink-0">
            <div className="reveal-bottom w-56 md:w-64 aspect-[3/4] relative overflow-hidden rounded-xl" style={{ animationDelay: '200ms' }}>
              <Image src="/profile.png" alt="Aziz Akturin" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-8 py-20 border-t border-white/10 max-w-4xl mx-auto">
        <div className="overflow-hidden mb-6">
          <p className="reveal-bottom text-white/30 text-xs uppercase tracking-widest" style={{ animationDelay: '0ms' }}>bio</p>
        </div>
        <div className="overflow-hidden max-w-2xl">
          <p className="reveal-bottom text-white/70 text-base leading-relaxed" style={{ animationDelay: '80ms' }}>
            uoregon math + cs + chem &apos;28. won 3 hackathons. crimson 18 under 18. founded a college counseling business with 680+ customers across 11 countries. heading toward a phd in computational biology.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="px-8 py-20 border-t border-white/10 max-w-4xl mx-auto">
        <div className="overflow-hidden mb-8">
          <p className="reveal-bottom text-white/30 text-xs uppercase tracking-widest" style={{ animationDelay: '0ms' }}>stack</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((s, i) => (
            <div key={s} className="overflow-hidden">
              <span
                className="reveal-bottom inline-block border border-white/20 text-white/60 text-xs px-3 py-1"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-20 border-t border-white/10 max-w-4xl mx-auto">
        <div className="overflow-hidden mb-10">
          <p className="reveal-bottom text-white/30 text-xs uppercase tracking-widest" style={{ animationDelay: '0ms' }}>experience</p>
        </div>
        <div className="flex flex-col divide-y divide-white/10">
          {experience.map((e, i) => (
            <div key={i} className="overflow-hidden py-7 first:pt-0">
              <div className="reveal-bottom grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-10 mb-3" style={{ animationDelay: `${i * 80}ms` }}>
                <div>
                  <p className="text-white font-semibold text-sm lowercase">{e.role}</p>
                  <p className="text-white/40 text-xs mt-0.5 lowercase">{e.org}</p>
                </div>
                <p className="text-white/30 text-xs">{e.period}</p>
              </div>
              <div className="overflow-hidden">
                <p className="reveal-bottom text-white/50 text-sm leading-relaxed max-w-lg mb-2" style={{ animationDelay: `${i * 80 + 60}ms` }}>{e.detail}</p>
              </div>
              {'bullets' in e && Array.isArray(e.bullets) && (
                <p className="mt-2 text-white/40 text-xs leading-relaxed max-w-lg">
                  {(e.bullets as string[]).join(' · ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interested CTA */}
      <section className="px-8 py-24 border-t border-white/10 max-w-4xl mx-auto">
        <div className="overflow-hidden mb-8">
          <h2
            className="reveal-bottom font-black leading-[1.05] tracking-tight text-white lowercase"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', animationDelay: '80ms' }}
          >
            interested?<br />
            <span className="text-white/40">full-time, hackathons,<br />startups.</span>
          </h2>
        </div>
        <div className="overflow-hidden flex items-center gap-6">
          <Link
            href="/contact"
            className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors"
            style={{ animationDelay: '200ms' }}
          >
            get in touch
          </Link>
          <div className="overflow-hidden">
            <span className="reveal-bottom flex items-center gap-2 text-sm text-white/50" style={{ animationDelay: '280ms' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
              available for work
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
