import ProjectsCarousel from "./components/ProjectsCarousel";
import { projects } from "./data/projects";

export default function Home() {
  const csProjects = projects.filter((p) => p.category === 'cs');
  const otherProjects = projects.filter((p) => p.category === 'other');

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col px-8"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex-1 flex flex-col justify-center pt-20">
          <h1 className="text-[9vw] font-black leading-[0.9] tracking-tight text-white lowercase">
            <span className="block overflow-hidden">
              <span className="reveal-bottom block" style={{ animationDelay: "100ms" }}>aziz</span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-bottom block" style={{ animationDelay: "200ms" }}>akturin.</span>
            </span>
          </h1>

          <div className="overflow-hidden mt-4">
            <p className="reveal-bottom text-base text-white/80" style={{ animationDelay: "320ms" }}>
              i build to make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* CS Projects */}
      <div style={{ backgroundColor: "#1e2d1e" }}>
        <ProjectsCarousel projects={csProjects} title="work." />
      </div>

      {/* Other Projects */}
      <div style={{ backgroundColor: "#1e2d1e" }} className="border-t border-white/10">
        <ProjectsCarousel projects={otherProjects} title="other." />
      </div>
    </>
  );
}
