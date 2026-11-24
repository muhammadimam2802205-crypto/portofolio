import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, statusMeta } from '../data/projects'
import SectionReveal from './SectionReveal'
import BrowserFrame from './BrowserFrame'
import { TornEdge } from './PaperBits'

const GITHUB = 'https://github.com/muhammadimam2802205-crypto'

const tilts = [
  '-rotate-[0.5deg]',
  'rotate-[0.35deg]',
  'rotate-[0.2deg]',
  '-rotate-[0.35deg]',
  '-rotate-[0.25deg]',
  'rotate-[0.4deg]',
]

function ProjectCard({ project, index }) {
  const status = statusMeta[project.status]

  return (
    <SectionReveal delay={index * 0.05} className="h-full">
      <article
        className={`paper-card group relative flex h-full flex-col border border-ink/20 p-4 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:rotate-0 md:p-5 ${tilts[index % tilts.length]}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-editorial text-lg italic leading-none text-accent md:text-xl">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-3xl uppercase leading-[0.92] text-ink md:text-4xl">
              <Link
                to={`/project/${project.id}`}
                className="transition-colors hover:text-accent"
              >
                {project.shortTitle}
              </Link>
            </h3>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/40">
              {project.year}
            </p>
            <span
              className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[9px] font-medium ${status.className}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </div>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="mt-4 block"
          aria-label={`Lihat detail ${project.title}`}
        >
          <BrowserFrame
            src={project.image}
            alt={`Thumbnail proyek ${project.title}`}
            url={`imam.dev/project/${project.id}`}
            aspect="aspect-[4/3]"
            imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <p className="mt-4 line-clamp-3 text-xs leading-relaxed text-ink/60 md:text-[13px]">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="border border-ink/15 bg-paper/60 px-2 py-0.5 text-[9px] uppercase tracking-[0.06em] text-ink/50"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1 py-0.5 text-[9px] text-ink/35">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/15 pt-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/50 transition-colors hover:text-ink"
          >
            <Github size={13} />
            Repository
          </a>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
          >
            Study Case
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </article>
    </SectionReveal>
  )
}

export default function Projects() {
  return (
    <section id="project" className="relative scroll-mt-20 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <header className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-editorial text-2xl italic leading-none text-accent md:text-3xl">
                Selected
              </p>
              <h2 className="mt-1 font-display text-5xl uppercase leading-[0.9] text-ink md:text-7xl">
                Projects
              </h2>
            </div>
            <div className="max-w-sm md:text-right">
              <p className="text-sm leading-relaxed text-ink/60">
                Hanya proyek yang benar-benar saya bangun dan ada kode
                sumbernya — aplikasi web, backend, sistem informasi, dan
                pemetaan.
              </p>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                {String(projects.length).padStart(2, '0')} Case Studies · 2024 — 2026
              </p>
            </div>
          </header>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          <SectionReveal delay={0.1} className="h-full md:col-span-2">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="paper-card group relative flex h-full min-h-[240px] rotate-[0.2deg] flex-col justify-between overflow-hidden border border-ink/20 p-6 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:rotate-0 md:flex-row md:items-end md:gap-10 md:p-8"
            >
              <TornEdge className="absolute -right-1 top-8 h-20 w-3 text-ink" />
              <div>
                <p className="font-editorial text-xl italic text-accent">
                  Lebih banyak di
                </p>
                <h3 className="mt-1 font-display text-4xl uppercase leading-none text-ink md:text-5xl">
                  GitHub
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
                  Repo, eksperimen, dan proyek lain yang sedang saya kerjakan.
                </p>
              </div>
              <div className="mt-7 flex items-end justify-between gap-6 border-t border-ink/15 pt-4 md:mt-0 md:w-[320px] md:shrink-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    Semua repositori
                  </p>
                  <p className="mt-1 truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                    @muhammadimam2802205-crypto
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors group-hover:bg-accent">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
