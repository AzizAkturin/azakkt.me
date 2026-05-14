import Link from "next/link";
import ProjectsCarousel from "./components/ProjectsCarousel";
import LandingHero from "./components/LandingHero";
import PixelStars from "./components/PixelStars";
import { projects } from "./data/projects";

export default function Home() {
  const csProjects = projects.filter((p) => p.category === 'cs');
  const otherProjects = projects.filter((p) => p.category === 'other');

  return (
    <>
      <LandingHero />

      {/* CS Projects */}
      <div style={{ backgroundColor: "#1e2d1e" }} className="relative">
        <PixelStars />
        <div className="relative z-[1]">
          <ProjectsCarousel projects={csProjects} title="work." />
        </div>
      </div>

      {/* Other Projects */}
      <div style={{ backgroundColor: "#1e2d1e" }} className="relative border-t border-white/10">
        <PixelStars />
        <div className="relative z-[1]">
          <ProjectsCarousel projects={otherProjects} title="other." />
        </div>
      </div>

      {/* About */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat px-8 py-24 flex flex-col border-t border-white/10"
        style={{ backgroundImage: "url('/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
          {/* Header */}
          <div className="relative flex items-center justify-between mb-16">
            <h2 className="text-3xl font-black text-white lowercase tracking-tight">about.</h2>
            <Link href="/about" className="text-sm text-white/70 hover:text-black border border-white/40 hover:bg-white px-4 py-1.5 transition-colors">
              show more
            </Link>
          </div>

        <div className="relative max-w-4xl mx-auto w-full flex flex-col flex-1">

          {/* Large bio statement */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="overflow-hidden mb-16">
              <p
                className="reveal-bottom font-black leading-[1.1] tracking-tight text-white lowercase"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', animationDelay: '80ms' }}
              >
                uoregon math + cs + chem &apos;28.<br />
                won 3 hackathons. crimson 18 under 18.<br />
                founded a college counseling business<br />
                with 680+ customers across 11 countries.<br />
                heading toward a phd in computational biology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/20 pt-10 max-w-2xl">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-5">education</p>
                <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-sm">
                  <span className="text-white/30 uppercase tracking-widest text-xs">school</span>
                  <span className="text-white/70">university of oregon</span>
                  <span className="text-white/30 uppercase tracking-widest text-xs">degree</span>
                  <span className="text-white/70">b.s. mathematics and computer science</span>
                  <span className="text-white/30 uppercase tracking-widest text-xs">location</span>
                  <span className="text-white/70">eugene, oregon</span>
                  <span className="text-white/30 uppercase tracking-widest text-xs">interests</span>
                  <span className="text-white/70">8+ yrs basketball, piano, fashion, cooking, 8+ yrs clash royale</span>
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-5">stack</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Python', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'React Native', 'Raspberry Pi', 'GitHub Actions', 'AI Agents', 'NumPy'].map((s, i) => (
                    <div key={s} className="overflow-hidden">
                      <span
                        className="reveal-bottom inline-block border border-white/30 text-white/60 text-xs px-3 py-1"
                        style={{ animationDelay: `${160 + i * 40}ms` }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1e2d1e' }}
        className="relative min-h-screen px-8 py-24 flex flex-col border-t border-white/10"
      >
        <PixelStars />
        <div className="relative z-[1] max-w-4xl mx-auto w-full flex flex-col flex-1">

          <div className="flex-1 flex flex-col justify-center">
            <div className="overflow-hidden mb-10">
              <h2
                className="reveal-bottom font-black leading-[1.05] tracking-tight text-white lowercase"
                style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', animationDelay: '80ms' }}
              >
                interested?<br />
                <span className="text-white/40">full-time, hackathons,<br />startups.</span>
              </h2>
            </div>

            <div className="overflow-hidden flex items-center gap-6">
              <a
                href="/contact"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '200ms' }}
              >
                get in touch
              </a>
              <div className="overflow-hidden">
                <span className="reveal-bottom flex items-center gap-2 text-sm text-white/50" style={{ animationDelay: '280ms' }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" style={{ boxShadow: '0 0 6px #4ade80' }} />
                  available for work
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-end justify-between pt-16 border-t border-white/10">
            <div>
              <p className="text-white/60 text-xs">azizakturin@gmail.com</p>
              <p className="text-white/50 text-xs mt-1">eugene, oregon</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs">designed &amp; developed</p>
              <p className="text-white/50 text-xs">by aziz akturin ©2026</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
