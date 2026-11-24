import { ArrowUpRight, Github } from 'lucide-react'
import PhotoPrint from './PhotoPrint'
import { TapeStrip, TornEdge, XGrid } from './PaperBits'

const focusTags = ['React', 'Laravel', 'REST API', 'MySQL']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative md:pb-24">
          {/* Kartu cover */}
          <div className="paper-card relative border border-ink/20 px-5 py-8 shadow-paper md:px-12 md:py-12">
            <TornEdge className="absolute -right-1 top-8 h-24 w-4 text-ink md:-right-1.5 md:h-36 md:w-5" />
            <TornEdge className="absolute -left-1 bottom-10 h-20 w-4 rotate-180 text-ink md:-left-1.5 md:h-28 md:w-5" />

            <div className="flex items-start justify-between gap-4">
              <XGrid rows={2} cols={6} className="w-24 md:w-32" />
              <p className="pt-1 text-right text-[9px] font-semibold uppercase tracking-[0.26em] text-ink/45">
                Personal
                <br />
                Portfolio
              </p>
            </div>

            <h1 className="mt-7 text-center font-display text-[17vw] uppercase leading-[0.82] tracking-[-0.015em] text-ink sm:text-[15vw] md:mt-8 md:text-[7.5rem] lg:text-[10rem] xl:text-[11rem]">
              Portfolio
            </h1>

            <div className="mt-7 flex items-center gap-3 md:mt-9 md:gap-5 md:pr-64 lg:pr-80 xl:pr-[21rem]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/70 md:text-[10px]">
                Muhammad Imam
              </span>
              <span className="h-px flex-1 bg-ink/25" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/50 md:text-[10px]">
                2024 — 2026
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-7 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-10 md:pr-64 lg:pr-80 xl:pr-[21rem]">
              <div className="max-w-md text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent md:text-[11px]">
                  Web &amp; Backend Developer
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Saya membangun aplikasi web dan backend — dari antarmuka
                  React, REST API, sampai pengelolaan database.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a
                    href="#project"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent"
                  >
                    Lihat Proyek
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href="https://github.com/muhammadimam2802205-crypto"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-ink/40 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>

                <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/40 md:justify-start">
                  {focusTags.map((tag) => (
                    <li key={tag} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-accent/70" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40 md:mt-10">
              Based in Indonesia · Open for internship
            </p>
          </div>

          {/* Foto profil dalam bingkai cetak */}
          <div className="relative z-10 mx-auto mt-6 w-[68%] max-w-[220px] -rotate-2 sm:mt-8 sm:max-w-[250px] md:absolute md:bottom-0 md:right-2 md:mt-0 md:w-[232px] md:max-w-none lg:right-6 lg:w-[268px] xl:right-8 xl:w-[286px]">
            <TapeStrip className="absolute -top-2.5 left-1/2 z-20 w-20 -translate-x-1/2 -rotate-3 sm:w-24" />
            <PhotoPrint
              src="/profile.jpg"
              alt="Muhammad Imam"
              caption="Muhammad Imam"
              note="2026"
              priority
              className="rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
