import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import SectionReveal from './SectionReveal'
import SectionTitle from './SectionTitle'
import { TiltCard } from './animations'

export default function Projects() {
  return (
    <section id="project" className="relative bg-base border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionReveal>
          <SectionTitle
            eyebrow="Proyek Pilihan"
            title="Beberapa hal yang saya bangun."
            description="Pilihan proyek terbaru — dari backend API hingga aplikasi mobile dan dashboard web."
          />
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 0.08}>
              <TiltCard intensity={6} className="h-full">
                <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-maroon-light/60 transition-colors duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-base/70 backdrop-blur-sm border border-white/10 text-white/70">
                      {p.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg md:text-xl text-white leading-tight">
                        {p.title}
                      </h3>
                      <span className="text-xs text-white/40 shrink-0">
                        {p.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3">
                      {p.summary}
                    </p>

                    {/* Stack chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/project/${p.id}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-maroon-light hover:text-white transition-colors duration-300"
                    >
                      Lihat Detail
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}