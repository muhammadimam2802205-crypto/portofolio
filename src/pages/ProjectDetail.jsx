import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white">
          Proyek tidak ditemukan
        </h1>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-light text-white text-sm font-medium hover:bg-maroon transition-colors"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>
    )
  }

  return (
    <article className="pt-28 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Link
          to="/#project"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Kembali ke Proyek
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-maroon-light font-medium">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl text-white leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
            {project.summary}
          </p>
        </motion.header>

        <motion.img
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          src={project.image}
          alt={project.title}
          className="mt-10 w-full aspect-video object-cover rounded-2xl border border-white/10"
        />

        <div className="mt-12 grid md:grid-cols-[1.6fr_1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h2 className="font-display text-xl md:text-2xl text-white mb-3">
              Tentang Proyek
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            <h2 className="font-display text-xl md:text-2xl text-white mt-10 mb-3">
              Hal Utama
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm md:text-base text-white/70"
                >
                  <CheckCircle2
                    size={16}
                    className="text-maroon-light mt-0.5 shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] h-fit"
          >
            <div className="mb-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                Peran
              </p>
              <p className="mt-1 text-sm text-white">{project.role}</p>
            </div>
            <div className="mb-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                Tahun
              </p>
              <p className="mt-1 text-sm text-white">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-maroon-light hover:text-white transition-colors"
              >
                Kunjungi Proyek <ArrowUpRight size={14} />
              </a>
            )}
          </motion.aside>
        </div>
      </div>
    </article>
  )
}