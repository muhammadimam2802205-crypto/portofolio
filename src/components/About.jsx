import { Code2, Server, Layers, MapPin, Mail } from 'lucide-react'
import SectionReveal from './SectionReveal'
import PhotoPrint from './PhotoPrint'
import { GithubIcon } from './Icons'
import { TapeStrip, TornEdge, XGrid } from './PaperBits'

const EMAIL = 'muhammadimam2802205@gmail.com'
const GITHUB = 'https://github.com/muhammadimam2802205-crypto'

const roles = [
  {
    icon: Code2,
    title: 'Web Development',
    detail: 'React · Vite · Tailwind CSS',
  },
  {
    icon: Server,
    title: 'Backend & API',
    detail: 'Laravel · Express · Flask',
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    detail: 'MySQL · PostgreSQL · Docker',
  },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <div className="paper-card relative -rotate-[0.25deg] border border-ink/20 p-5 shadow-paper md:p-10">
            <TornEdge className="absolute -right-1 top-10 h-24 w-4 text-ink md:h-32 md:w-5" />

            <div className="grid gap-9 md:grid-cols-[0.75fr_1.25fr] md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              {/* Foto */}
              <div className="relative mx-auto w-full max-w-[230px] sm:max-w-[270px] md:mx-0 md:max-w-[250px] md:self-start lg:max-w-[320px]">
                <TapeStrip className="absolute -top-2.5 left-1/2 z-20 w-20 -translate-x-1/2 -rotate-2 sm:w-24" />
                <PhotoPrint
                  src="/about.jpg"
                  alt="Foto Muhammad Imam"
                  caption="Muhammad Imam"
                  note="2026"
                  className="-rotate-1"
                />
              </div>

              {/* Teks */}
              <div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-editorial text-2xl italic leading-none text-accent md:text-3xl">
                      Hello, I&apos;m
                    </p>
                    <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] text-ink md:text-6xl">
                      About Me
                    </h2>
                    <p className="text-outline font-display text-5xl uppercase leading-[0.9] md:text-6xl">
                      Imam
                    </p>
                  </div>
                  <XGrid
                    rows={2}
                    cols={5}
                    className="hidden w-24 pt-2 lg:grid"
                  />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-ink/70 md:text-[15px]">
                  Saya <strong className="font-semibold text-ink">Muhammad Imam</strong>,
                  mahasiswa Teknologi Informasi yang fokus pada web development
                  dan backend. Saya mengerjakan proyek dari sisi antarmuka React
                  sampai REST API dan pengelolaan database.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 md:text-[15px]">
                  Setiap proyek saya gunakan untuk melatih struktur kode dan
                  alur kerja yang lebih rapi. Saat ini saya terbuka untuk
                  magang, kolaborasi, dan proyek freelance.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                  {roles.map((role, index) => {
                    const Icon = role.icon
                    return (
                      <div
                        key={role.title}
                        className="border border-ink/15 bg-paper/60 p-3"
                      >
                        <div className="flex items-center justify-between">
                          <Icon size={16} className="text-accent" />
                          <span className="font-editorial text-xs italic text-ink/35">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-3 font-display text-sm uppercase leading-tight text-ink">
                          {role.title}
                        </p>
                        <p className="mt-1 text-[10px] leading-relaxed text-ink/50">
                          {role.detail}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-7 border-t border-ink/20 pt-5">
                  <p className="font-display text-lg uppercase tracking-wide text-ink">
                    Contact Me
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-ink/65">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-2 transition-colors hover:text-ink"
                    >
                      <Mail size={14} className="text-accent" />
                      {EMAIL}
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 transition-colors hover:text-ink"
                    >
                      <GithubIcon size={14} className="text-accent" />
                      muhammadimam2802205-crypto
                    </a>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent" />
                      Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
