import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ================= NAVBAR UTAMA ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/#home"
            className="font-display text-xl tracking-wider text-white z-50 relative"
            onClick={() => setOpen(false)}
          >
            PORT<span className="text-maroon-light">OFOLIO</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  to={`/${l.href}`}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-maroon-light text-white text-sm font-semibold hover:bg-maroon transition-colors duration-300"
          >
            Contact Me
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 text-white z-50 relative"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col md:hidden"
          >
            {/* Header Menu (Logo & Close) */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <span className="font-display text-xl tracking-wider text-white">
                PORT<span className="text-maroon-light">OFOLIO</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 -mr-2 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* List Menu (Tipografi Besar & Bersih) */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={`/${l.href}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-white/80 hover:text-maroon-light transition-colors duration-300 block"
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Menu (Tombol) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="p-8 pb-10"
            >
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-full bg-maroon-light text-white font-semibold text-base hover:bg-maroon transition-colors duration-300"
              >
                Hubungi Saya
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}