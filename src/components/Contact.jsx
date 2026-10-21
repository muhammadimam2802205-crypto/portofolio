import { motion } from 'motion/react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import SectionReveal from './SectionReveal'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'imam@example.com',
    href: 'mailto:imam@example.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/username',
    href: 'https://github.com/username',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/username',
    href: 'https://linkedin.com/in/username',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-base border-t border-white/5 overflow-hidden"
    >
      {/* Glow marun halus */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(127,29,29,0.35)_0%,transparent_70%)]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-maroon-light font-medium mb-3">
              Hubungi Saya
            </p>
            <h2 className="font-display text-3xl md:text-6xl text-white leading-[1.05] tracking-tight">
              Punya proyek?
              <br />
              <span className="text-white/60">Mari kita mulai.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/60 leading-relaxed">
              Saya terbuka untuk kolaborasi, freelance, maupun posisi penuh
              waktu. Kirim pesan singkat tentang ide atau kebutuhan kamu — saya
              akan balas secepatnya.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:imam@example.com"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-maroon-light text-white text-sm font-medium hover:bg-maroon transition-colors duration-300"
              >
                Kirim Email
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium hover:border-maroon-light transition-colors duration-300"
              >
                Lihat Proyek Lagi
              </a>
            </div>
          </div>
        </SectionReveal>

        {/* Channel grid */}
        <div className="mt-14 md:mt-20 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {channels.map((c, i) => {
            const Icon = c.icon
            return (
              <SectionReveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-maroon-light/60 transition-colors duration-300"
                >
                  <span className="p-2 rounded-lg bg-maroon/30 text-maroon-light">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                      {c.label}
                    </p>
                    <p className="text-sm text-white/80 truncate group-hover:text-white transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}