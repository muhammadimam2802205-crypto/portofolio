import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Mail } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#project' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  {
    icon: Github,
    href: 'https://github.com/muhammadimam2802205-crypto',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:muhammadimam2802205@gmail.com',
    label: 'Email',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll manual saat link section diklik dari halaman utama.
  // Tanpa ini, klik ulang ke section yang hash-nya sama tidak melakukan apa-apa.
  const handleSectionClick = (event, href) => {
    setOpen(false)
    if (pathname !== '/') return

    const target = document.getElementById(href.slice(1))
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `/${href}`)
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md animate-fade-down">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-10">
          <Link
            to="/#home"
            onClick={(event) => handleSectionClick(event, '#home')}
            className="relative z-50 font-display text-2xl tracking-[0.02em] text-ink"
          >
            IMAM<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.2em] md:flex">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  to={`/${l.href}`}
                  onClick={(event) => handleSectionClick(event, l.href)}
                  className="text-ink/55 transition-colors duration-300 hover:text-ink"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            onClick={(event) => handleSectionClick(event, '#contact')}
            className="hidden items-center rounded-full bg-ink px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-accent md:inline-flex"
          >
            Hubungi Saya
          </Link>

          <button
            onClick={() => setOpen((value) => !value)}
            className="relative z-50 -mr-2 p-2 text-ink/80 transition-colors hover:text-ink md:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] animate-fade-in md:hidden"
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="fixed right-4 top-[64px] z-50 w-[260px] origin-top-right overflow-hidden rounded-xl border border-ink/20 bg-paper-light shadow-paper animate-menu-in md:hidden"
          >
            <div className="flex flex-col py-2">
              {links.map((l, index) => (
                <Link
                  key={l.name}
                  to={`/${l.href}`}
                  onClick={(event) => handleSectionClick(event, l.href)}
                  className="group flex items-center justify-between px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink/70 transition-colors hover:bg-ink/[0.04] hover:text-ink"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-editorial text-[11px] italic text-accent">
                      0{index + 1}
                    </span>
                    {l.name}
                  </span>
                  <span className="text-ink/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="h-px w-full bg-ink/10" />

            <div className="p-5">
              <div className="mb-5 flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="rounded-lg border border-ink/15 p-2 text-ink/55 transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              <Link
                to="/#contact"
                onClick={(event) => handleSectionClick(event, '#contact')}
                className="flex w-full items-center justify-center rounded-lg bg-ink py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-accent"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
