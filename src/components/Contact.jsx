import { Mail, ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon } from './Icons'
import SectionReveal from './SectionReveal'
import { TornEdge, XGrid } from './PaperBits'

const EMAIL = 'muhammadimam2802205@gmail.com'
const GITHUB = 'https://github.com/muhammadimam2802205-crypto'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'muhammadimam2802205-crypto',
    href: GITHUB,
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Indonesia · Remote friendly',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 pb-16 md:pb-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <div className="paper-card relative -rotate-[0.3deg] border border-ink/20 px-5 py-12 text-center shadow-paper md:px-10 md:py-16">
            <TornEdge className="absolute -right-1 top-12 h-24 w-4 text-ink md:h-32 md:w-5" />
            <TornEdge className="absolute -left-1 bottom-14 h-20 w-4 rotate-180 text-ink md:h-28 md:w-5" />

            <XGrid rows={1} cols={6} className="mx-auto w-28" />

            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-ink/45 md:text-[10px]">
              Contact · 2024 — 2026
            </p>

            <h2 className="mt-3 font-display text-[15vw] uppercase leading-[0.85] text-ink sm:text-[12vw] md:text-[7rem]">
              Thank You
            </h2>

            <p className="mt-3 font-editorial text-2xl italic text-accent md:text-3xl">
              Let&apos;s build something.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/60 md:text-[15px]">
              Saya terbuka untuk magang, kolaborasi, dan proyek freelance di
              bidang web development atau backend. Kirim pesan singkat tentang
              kebutuhan Anda.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
              >
                Kirim Email
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                Lihat Proyek
              </a>
            </div>

            <div className="mt-10 grid border-t border-ink/20 text-left sm:grid-cols-3">
              {channels.map((channel, index) => {
                const Icon = channel.icon
                const content = (
                  <>
                    <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                      <Icon size={14} className="text-accent" />
                      {channel.label}
                    </span>
                    <span className="mt-2 block break-words text-xs leading-relaxed text-ink/70">
                      {channel.value}
                    </span>
                  </>
                )

                return channel.href ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      channel.href.startsWith('http') ? 'noreferrer' : undefined
                    }
                    className={`block px-1 py-5 transition-colors hover:bg-ink/[0.03] sm:px-5 ${
                      index > 0 ? 'border-t border-ink/10 sm:border-l sm:border-t-0' : ''
                    }`}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={channel.label}
                    className={`px-1 py-5 sm:px-5 ${
                      index > 0 ? 'border-t border-ink/10 sm:border-l sm:border-t-0' : ''
                    }`}
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/35">
              Terbuka untuk magang &amp; kolaborasi
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
