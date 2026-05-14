import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects';
import GalleryVideo from '../../components/GalleryVideo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main style={{ backgroundColor: '#1e2d1e' }} className="min-h-screen px-8 pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto">
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

      {/* Hero row */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-28">
        {/* Cover */}
        <div className="overflow-hidden rounded-xl flex-shrink-0 w-full md:w-80 h-80">
          <div
            className="reveal-bottom w-full h-full relative overflow-hidden rounded-xl"
            style={{ backgroundColor: project.cover, animationDelay: '100ms' }}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center max-w-lg">
          <div className="overflow-hidden mb-4">
            <p className="reveal-bottom text-white/40 text-xs uppercase tracking-widest" style={{ animationDelay: '80ms' }}>
              {project.event}
            </p>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight lowercase mb-5">
            <span className="block overflow-hidden">
              <span className="reveal-bottom block" style={{ animationDelay: '160ms' }}>{project.title}</span>
            </span>
          </h1>
          <div className="overflow-hidden mb-10">
            <p className="reveal-bottom text-white/60 text-base leading-relaxed" style={{ animationDelay: '240ms' }}>
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="reveal-bottom grid grid-cols-[auto_1fr] gap-x-10 gap-y-4 text-sm" style={{ animationDelay: '320ms' }}>
              <span className="text-white/30 uppercase tracking-widest text-xs">industry</span>
              <span className="text-white/70">{project.industry}</span>

              <span className="text-white/30 uppercase tracking-widest text-xs">year</span>
              <span className="text-white/70">{project.year}</span>

              <span className="text-white/30 uppercase tracking-widest text-xs">sprint</span>
              <span className="text-white/70">{project.sprint}</span>

              <span className="text-white/30 uppercase tracking-widest text-xs">award</span>
              <span className="text-white/70">{project.award}</span>
            </div>
          </div>

          <div className="overflow-hidden mt-10 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '400ms' }}
              >
                view on github
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '440ms' }}
              >
                view the website
              </a>
            )}
            {project.article && (
              <a
                href={project.article}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '480ms' }}
              >
                view article
              </a>
            )}
            {project.telegram && (
              <a
                href={project.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '520ms' }}
              >
                view telegram
              </a>
            )}
            {project.devpost && (
              <a
                href={project.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-bottom inline-block border border-white/30 text-white/80 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
                style={{ animationDelay: '560ms' }}
              >
                view on devpost
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Gallery 2x2 */}
      {project.gallery && (
        <div className="mb-20">
          <div className="grid grid-cols-2 gap-4">
            {project.gallery.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <div
                  className="reveal-bottom relative aspect-video overflow-hidden rounded-xl bg-black/20"
                  style={{ animationDelay: `${560 + i * 80}ms` }}
                >
                  {item.type === 'video' ? (
                    <GalleryVideo src={item.src} speed={item.speed} startTime={item.startTime} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/50 to-transparent flex items-end px-3 pb-2">
                    <span className="text-white/60 text-[10px] uppercase tracking-widest">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech stack */}
      <div className="border-t border-white/10 pt-10">
        <div className="overflow-hidden mb-4">
          <p className="reveal-bottom text-white/30 text-xs uppercase tracking-widest" style={{ animationDelay: '460ms' }}>stack</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <div key={t} className="overflow-hidden">
              <span
                className="reveal-bottom inline-block border border-white/20 text-white/60 text-xs px-3 py-1"
                style={{ animationDelay: `${500 + i * 60}ms` }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}
