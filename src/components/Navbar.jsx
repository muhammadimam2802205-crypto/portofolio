import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Github, Linkedin, Instagram, Mail } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-4 md:py-5 bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/#home"
            className="font-display text-lg md:text-xl tracking-wider text-white z-50 relative"
            onClick={() => setOpen(false)}
          >
            PORT<span className="text-maroon-light">OFOLIO</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  to={`/${l.href}`}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-maroon-light text-white text-sm font-medium hover:bg-maroon transition-colors duration-300"
          >
            Contact Me
          </Link>

          {/* Mobile Toggle Button (Berubah jadi X saat terbuka) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-white/90 z-50 relative hover:text-maroon-light transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* ====================================================
          FLOATING GLASS DROPDOWN (COMPACT & ELEGAN)
      ==================================================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (Klik di luar untuk menutup) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Kotak Menu Melayang */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[72px] right-4 z-50 w-[240px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl md:hidden overflow-hidden origin-top-right"
            >
              {/* List Menu */}
              <div className="flex flex-col py-2">
                {links.map((l) => (
                  <Link
                    key={l.name}
                    to={`/${l.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-5 py-3 text-[15px] text-white/70 hover:text-white hover:bg-white/5 transition-colors group"
                  >
                    {l.name}
                    {/* Indikator Panah Kecil saat Hover */}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-maroon-light text-sm">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Garis Pemisah */}
              <div className="w-full h-px bg-white/5" />

              {/* Socials & CTA Section */}
              <div className="p-5">
                {/* Ikon Sosial Media */}
                <div className="flex items-center gap-3 mb-5">
                  {socials.map(({ icon: Icon, href }, i) => (
                    <a 
                      key={i} 
                      href={href} 
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                {/* Tombol Contact Ringkas */}
                <Link
                  to="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-2.5 rounded-lg bg-maroon-light text-white font-medium text-xs hover:bg-maroon transition-colors"
                >
                  Hubungi Saya
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}