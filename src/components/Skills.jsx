import SectionReveal from './SectionReveal'
import { TornEdge, XGrid } from './PaperBits'

const groups = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'CodeIgniter 4', 'Node.js', 'Express', 'Flask', 'REST API'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
]

const stickers = [
  { name: 'React', slug: 'react', rotate: '-rotate-3' },
  { name: 'Laravel', slug: 'laravel', rotate: 'rotate-2' },
  { name: 'Node', slug: 'nodedotjs', rotate: 'rotate-1' },
  { name: 'Tailwind', slug: 'tailwindcss', rotate: '-rotate-2' },
  { name: 'MySQL', slug: 'mysql', rotate: 'rotate-3' },
  { name: 'Docker', slug: 'docker', rotate: '-rotate-1' },
  { name: 'Git', slug: 'git', rotate: 'rotate-2' },
  { name: 'Python', slug: 'python', rotate: '-rotate-2' },
  { name: 'PHP', slug: 'php', rotate: 'rotate-1' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <div className="paper-card relative rotate-[0.25deg] overflow-hidden border border-ink/20 px-5 py-8 shadow-paper md:px-10 md:py-11">
            <TornEdge className="absolute -right-1 top-12 h-24 w-4 text-ink md:h-36 md:w-5" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-editorial text-2xl italic leading-none text-accent md:text-3xl">
                  My
                </p>
                <h2 className="mt-1 font-display text-5xl uppercase leading-[0.9] text-ink md:text-6xl">
                  Skills
                </h2>
              </div>
              <div className="text-right">
                <XGrid rows={1} cols={6} className="hidden w-24 sm:grid" />
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/40">
                  Since 2024
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-9 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {groups.map((group) => (
                  <div key={group.title}>
                    <p className="flex items-center gap-2 font-display text-sm uppercase tracking-wide text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {group.title}
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-baseline gap-2 text-[11px] leading-relaxed text-ink/60 md:text-xs"
                        >
                          <span className="text-ink/25">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative hidden md:block">
                <div className="grid grid-cols-3 gap-3">
                  {stickers.map((sticker) => (
                    <div
                      key={sticker.name}
                      className={`flex flex-col items-center justify-center gap-1.5 border border-ink/15 bg-paper px-2 py-2.5 shadow-sm transition-transform duration-300 hover:rotate-0 ${sticker.rotate}`}
                    >
                      <img
                        src={`/logos/${sticker.slug}.svg`}
                        alt=""
                        width="28"
                        height="28"
                        loading="lazy"
                        decoding="async"
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-ink/45">
                        {sticker.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center font-editorial text-sm italic text-ink/40">
                  tools I use daily
                </p>
              </div>
            </div>

            <p className="mt-8 border-t border-ink/15 pt-4 text-[10px] leading-relaxed text-ink/45 md:text-[11px]">
              Berdasarkan proyek yang benar-benar saya kerjakan — bukan daftar
              tools yang hanya pernah dicoba sekali.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
