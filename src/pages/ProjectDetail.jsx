import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Info,
  ListOrdered,
} from 'lucide-react'
import { projects, statusMeta } from '../data/projects'
import BrowserFrame from '../components/BrowserFrame'
import { TornEdge } from '../components/PaperBits'

function DetailSection({ title, icon: Icon, children, className = '' }) {
  return (
    <section className={className}>
      <h2 className="mb-3 flex items-center gap-2 font-display text-xl uppercase tracking-wide text-ink md:text-2xl">
        {Icon && <Icon size={18} className="shrink-0 text-accent" />}
        {title}
      </h2>
      {children}
    </section>
  )
}

function MetaItem({ label, value }) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
        {label}
      </p>
      <p className="mt-1 text-sm text-ink">{value}</p>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const projectIndex = projects.findIndex((p) => p.id === id)
  const project = projectIndex >= 0 ? projects[projectIndex] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-editorial text-2xl italic text-accent">404</p>
        <h1 className="font-display text-3xl uppercase text-ink md:text-5xl">
          Proyek tidak ditemukan
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          Proyek yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
        >
          <ArrowLeft size={15} /> Kembali
        </button>
      </div>
    )
  }

  const status = statusMeta[project.status]
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <article className="pb-20 pt-28 md:pt-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Link
          to="/#project"
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} /> Kembali ke Proyek
        </Link>

        <header className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="font-editorial text-lg italic text-accent">
              {project.category}
            </p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink/35">
              · {project.year}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-medium ${status.className}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
          </div>
          <h1 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent"
            >
              <Github size={15} /> Lihat Repository
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </header>

        <div
          className="mt-10 animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <BrowserFrame
            src={project.image}
            alt={`Thumbnail proyek ${project.title}`}
            url={`imam.dev/project/${project.id}`}
            aspect="aspect-[4/3]"
            className="max-h-[540px]"
            priority
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div
            className="space-y-10 animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            <DetailSection title="Ringkasan">
              <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                {project.overview}
              </p>
            </DetailSection>

            <DetailSection title="Latar Belakang">
              <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                {project.context}
              </p>
            </DetailSection>

            <DetailSection title="Solusi & Pendekatan">
              <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                {project.solution}
              </p>
            </DetailSection>

            <DetailSection title="Cara Kerja" icon={ListOrdered}>
              <ol className="space-y-3">
                {project.workflow.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-ink/70 md:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-[10px] font-semibold text-accent">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </DetailSection>

            <DetailSection title="Fitur Utama">
              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-ink/70 md:text-base"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Yang Saya Kerjakan">
              <ul className="space-y-2.5">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink/70 md:text-base"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-700"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {project.note && (
                <div className="mt-5 flex items-start gap-2.5 border border-amber-800/25 bg-amber-700/[0.07] p-4 text-xs leading-relaxed text-amber-950/80 md:text-sm">
                  <Info size={16} className="mt-0.5 shrink-0 text-amber-700" />
                  <p>{project.note}</p>
                </div>
              )}
            </DetailSection>
          </div>

          <aside className="paper-card relative h-fit space-y-4 border border-ink/20 p-6 shadow-paper md:sticky md:top-24">
            <TornEdge className="absolute -right-1 top-8 h-16 w-3 text-ink" />
            <MetaItem label="Peran" value={project.role} />
            <MetaItem label="Kategori" value={project.category} />
            <MetaItem label="Tahun" value={project.year} />
            <MetaItem label="Status" value={status.label} />

            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                Teknologi
              </p>
              <div className="space-y-3">
                {(project.stackGroups ?? [
                  { label: null, items: project.stack },
                ]).map((group) => (
                  <div key={group.label ?? 'stack'}>
                    {group.label && (
                      <p className="mb-1.5 text-[10px] text-ink/40">
                        {group.label}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="border border-ink/15 bg-paper/60 px-2 py-0.5 text-[9px] uppercase tracking-[0.06em] text-ink/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
            >
              Buka di GitHub <ArrowUpRight size={14} />
            </a>
          </aside>
        </div>

        <nav className="mt-16 grid gap-3 sm:grid-cols-2">
          <Link
            to={`/project/${prevProject.id}`}
            className="group border border-ink/20 bg-paper-light/60 p-4 transition-colors hover:border-ink/40"
          >
            <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/40">
              <ArrowLeft size={12} /> Sebelumnya
            </span>
            <span className="mt-1.5 block font-display text-sm uppercase text-ink transition-colors group-hover:text-accent md:text-base">
              {prevProject.shortTitle}
            </span>
          </Link>
          <Link
            to={`/project/${nextProject.id}`}
            className="group border border-ink/20 bg-paper-light/60 p-4 transition-colors hover:border-ink/40 sm:text-right"
          >
            <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/40 sm:justify-end">
              Berikutnya <ArrowRight size={12} />
            </span>
            <span className="mt-1.5 block font-display text-sm uppercase text-ink transition-colors group-hover:text-accent md:text-base">
              {nextProject.shortTitle}
            </span>
          </Link>
        </nav>

        <div className="mt-8 border-t border-ink/15 pt-6">
          <Link
            to="/#project"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50 transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} /> Kembali ke semua proyek
          </Link>
        </div>
      </div>
    </article>
  )
}
