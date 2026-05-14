'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects as allProjects, Project } from '../data/projects';

const ACTIVE_W = 420;
const ACTIVE_H = 420;
const SIDE_W = 280;
const SIDE_H = 280;
const OUTER_W = 180;
const OUTER_H = 180;
const GAP = 28;

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M5 12l7-7M5 12l7 7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function ProjectsCarousel({ projects = allProjects, title = 'work.' }: { projects?: Project[]; title?: string }) {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const getOffset = (idx: number) => {
    let offset = idx - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section className="min-h-screen px-8 py-24 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-3xl font-black text-white lowercase tracking-tight">{title}</h2>
        <span className="text-xs text-white/40 tracking-widest uppercase">{active + 1} / {total}</span>
      </div>

      {/* Carousel */}
      <div className="flex-1 flex flex-col items-center justify-center gap-14">
        <div
          className="relative w-full flex items-center justify-center"
          style={{ height: ACTIVE_H }}
        >
          {projects.map((project, idx) => {
            const offset = getOffset(idx);
            if (Math.abs(offset) > 2) return null;

            const isActive = offset === 0;
            const isOuter = Math.abs(offset) === 2;

            const xOffset =
              offset === 0 ? 0
              : Math.sign(offset) * (ACTIVE_W / 2 + GAP + SIDE_W / 2)
              + (Math.abs(offset) === 2 ? Math.sign(offset) * (SIDE_W / 2 + GAP + OUTER_W / 2) : 0);

            const scale = isActive ? 1 : isOuter ? OUTER_H / ACTIVE_H : SIDE_H / ACTIVE_H;
            const opacity = isActive ? 1 : isOuter ? 0.25 : 0.5;

            return (
              <div
                key={project.slug}
                className="absolute"
                style={{
                  width: ACTIVE_W,
                  height: ACTIVE_H,
                  transform: `translateX(${xOffset}px) scale(${scale})`,
                  opacity,
                  zIndex: isActive ? 10 : 1,
                  transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: isActive ? 'pointer' : 'pointer',
                }}
                onClick={!isActive ? (offset < 0 ? prev : next) : undefined}
              >
                {isActive ? (
                  <Link href={`/works/${project.slug}`} className="block w-full h-full">
                    <ProjectCard project={project} featured />
                  </Link>
                ) : (
                  <ProjectCard project={project} />
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-9 h-9 border border-white/30 text-white/70 flex items-center justify-center hover:border-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 border border-white/30 text-white/70 flex items-center justify-center hover:border-white/70 hover:text-white transition-colors"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: typeof projects[0]; featured?: boolean }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-xl"
      style={{ backgroundColor: project.cover }}
    >
      {project.image && (
        <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
      )}
      {project.badge && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#f59e0b' }}>
            {project.badge}
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {featured && (
          <p className="text-white/50 text-xs uppercase tracking-widest mb-1.5">{project.subtitle}</p>
        )}
        <p className="text-white font-bold text-xl leading-tight">{project.title}</p>
      </div>
    </div>
  );
}
