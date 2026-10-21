import { Code2, Server, Smartphone, Database, Wrench } from 'lucide-react'
import SectionReveal from './SectionReveal'
import SectionTitle from './SectionTitle'

const groups = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'Laravel', 'PHP', 'REST API'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Prisma'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Android', 'iOS basics'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-base border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionReveal>
          <SectionTitle
            eyebrow="Keahlian"
            title="Tools yang saya pakai sehari-hari."
            description="Bukan daftar panjang — hanya yang benar-benar saya gunakan untuk mengerjakan proyek."
          />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {groups.map((g, i) => {
            const Icon = g.icon
            return (
              <SectionReveal key={g.title} delay={i * 0.06}>
                <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-maroon-light/50 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-maroon/30 text-maroon-light">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-base md:text-lg text-white">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}