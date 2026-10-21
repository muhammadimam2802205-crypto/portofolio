import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'motion/react'
import { Code2, Server, Smartphone, MapPin, Mail, MousePointerClick } from 'lucide-react'
import SectionReveal from './SectionReveal'

/* ============================================================
   DATA
   ============================================================ */
const roles = [
  { icon: Code2, title: 'Web Developer', desc: 'Antarmuka modern, responsif, dan cepat.', detail: 'React · Vite · Tailwind · Next.js · TypeScript' },
  { icon: Server, title: 'Backend Engineer', desc: 'API, database, dan sistem yang scalable.', detail: 'Node.js · Express · PostgreSQL · Prisma · Docker' },
  { icon: Smartphone, title: 'Mobile Developer', desc: 'Aplikasi cross-platform dengan UX halus.', detail: 'React Native · Expo · REST API · Offline-first' },
]

const techStack = [
  { name: 'React', slug: 'react' }, { name: 'Node.js', slug: 'nodedotjs' }, { name: 'TypeScript', slug: 'typescript' },
  { name: 'Tailwind', slug: 'tailwindcss' }, { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'Laravel', slug: 'laravel' },
  { name: 'React Native', slug: 'react' }, { name: 'Express', slug: 'express' }, { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Vite', slug: 'vite' }, { name: 'Git', slug: 'git' }, { name: 'Docker', slug: 'docker' },
  { name: 'REST API', slug: 'swagger' }, { name: 'Prisma', slug: 'prisma' }, { name: 'Next.js', slug: 'nextdotjs' },
]

const photos = [
  '/about.png',
  '/about-2.png', 
  '/about-3.png', 
]

/* ============================================================
   MagneticHeading
   ============================================================ */
function MagneticHeading() {
  const parts = [
    { text: 'Halo', type: 'normal' }, { text: '—', type: 'normal' }, { text: 'saya', type: 'normal' },
    { text: 'Muhammad', type: 'accent' }, { text: 'Imam', type: 'accent' }, { text: ',', type: 'punct' },
    { text: 'developer', type: 'normal' }, { text: 'yang', type: 'normal' }, { text: 'membangun', type: 'normal' },
    { text: 'produk', type: 'normal' }, { text: 'dari', type: 'normal' }, { text: 'nol', type: 'normal' }, { text: '.', type: 'punct' },
  ]

  return (
    <motion.h2
      initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.022, delayChildren: 0.15 } }, hover: { transition: { staggerChildren: 0.014 } } }}
      className="font-display text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight text-neutral-900"
    >
      {parts.map((part, wi) => (
        <span key={wi} className={`inline-block overflow-hidden align-bottom ${part.type === 'punct' ? '' : 'mr-[0.25em]'}`}>
          {part.text.split('').map((char, ci) => (
            <motion.span
              key={ci}
              variants={{
                hidden: { y: 28, opacity: 0, filter: 'blur(4px)' },
                visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                hover: { y: [0, -6, 0], transition: { duration: 0.45, ease: 'easeInOut' } },
              }}
              className={`inline-block ${part.type === 'accent' ? 'text-maroon' : 'text-neutral-900'}`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  )
}

/* ============================================================
   RevealWords
   ============================================================ */
function RevealWords({ text }) {
  const words = text.split(' ')
  return (
    <motion.p
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
      className="text-sm md:text-base leading-relaxed text-neutral-600"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

/* ============================================================
   RoleCard
   ============================================================ */
function RoleCard({ role, index, active, setActive }) {
  const Icon = role.icon
  const isActive = active === index

  return (
    <motion.div
      layout onHoverStart={() => setActive(index)} onHoverEnd={() => setActive(null)}
      transition={{ layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
      className={`relative overflow-hidden rounded-xl border transition-all duration-500 ${isActive ? 'border-maroon/30 bg-maroon/5 shadow-md' : 'border-neutral-200 bg-white shadow-sm'}`}
    >
      <motion.div layout="position" className="relative z-10 flex items-start gap-4 p-4 md:p-5">
        <motion.span
          layout animate={{ rotate: isActive ? 6 : 0, scale: isActive ? 1.1 : 1 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 rounded-lg p-2.5 transition-colors duration-300 ${isActive ? 'bg-maroon text-white' : 'bg-neutral-100 text-neutral-600'}`}
        >
          <Icon size={18} strokeWidth={2} />
        </motion.span>

        <div className="flex-1 min-w-0">
          <motion.h3 layout="position" className="font-display text-sm md:text-base text-neutral-900 leading-tight">{role.title}</motion.h3>
          <motion.p layout="position" className="mt-1 text-xs md:text-sm text-neutral-500 leading-relaxed">{role.desc}</motion.p>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="detail" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"
              >
                <p className="pt-2 text-[11px] md:text-xs tracking-wide text-maroon font-medium">{role.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   TechStack3D
   ============================================================ */
function TechStack3D({ items }) {
  return (
    <div className="mt-12">
      <p className="mb-4 text-[10px] tracking-[0.35em] uppercase text-neutral-400 font-semibold">Tech Stack</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4" style={{ perspective: '1000px' }}>
        {items.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10, z: 30, boxShadow: "0 20px 25px -5px rgba(168, 50, 50, 0.1), 0 10px 10px -5px rgba(168, 50, 50, 0.04)" }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 md:p-4 shadow-sm transition-colors duration-300 hover:border-maroon/40"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-z-[25px] group-hover:-translate-y-1" style={{ transformStyle: 'preserve-3d' }}>
              <img src={`https://cdn.simpleicons.org/${tech.slug}/404040`} alt={tech.name} loading="lazy" className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-75 group-hover:drop-shadow-md" />
            </div>
            <span className="mt-3 text-[10px] md:text-[11px] font-medium text-neutral-500 group-hover:text-maroon transition-colors duration-300" style={{ transformStyle: 'preserve-3d' }}>{tech.name}</span>
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-out group-hover:left-[150%]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   AboutPhoto (Tanpa Badge Open to Work)
   ============================================================ */
function AboutPhoto() {
  const wrapRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Parallax Kursor
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const spx = useSpring(px, { stiffness: 120, damping: 22, mass: 0.35 })
  const spy = useSpring(py, { stiffness: 120, damping: 22, mass: 0.35 })

  // Parallax Scroll
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const photoY = useTransform(smoothProgress, [0, 1], [-40, 40])

  const handleMove = (e) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    px.set(relX * 15)
    py.set(relY * 15)
  }

  const handleNextPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length)
  }

  return (
    <motion.div 
      ref={wrapRef} 
      onMouseMove={handleMove} 
      onMouseLeave={() => { px.set(0); py.set(0); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      className="group relative mx-auto w-full max-w-sm lg:max-w-md cursor-pointer"
      onClick={handleNextPhoto}
      style={{ perspective: '1000px' }}
    >
      {/* Bingkai Belakang (Tumpukan Kertas) */}
      <div className="absolute inset-0 z-[1] rounded-sm bg-neutral-200 border border-neutral-300 rotate-6 translate-x-4 translate-y-4 transition-all duration-700 ease-out group-hover:rotate-8 group-hover:translate-x-5 group-hover:translate-y-5 shadow-lg" />
      <div className="absolute inset-0 z-[2] rounded-sm bg-neutral-100 border border-neutral-200 rotate-3 translate-x-2 translate-y-2 transition-all duration-700 ease-out group-hover:rotate-4 group-hover:translate-x-3 group-hover:translate-y-3 shadow-md" />

      {/* Foto Utama (Polaroid) */}
      <motion.div
        style={{ y: photoY }}
        className="relative z-10 rounded-sm bg-white p-3 pb-14 shadow-xl border border-neutral-200 transition-transform duration-500 group-hover:-translate-y-2"
      >
        <motion.div style={{ x: spx, y: spy }} className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 border border-neutral-100">
          
          {/* ANIMASI KERTAS TERLEMPAR */}
          <AnimatePresence mode="popLayout">
            <motion.img
              key={index}
              src={photos[index]}
              alt="Muhammad Imam Al Ma'ruf"
              loading="eager"
              draggable={false}
              initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ 
                x: 300, 
                y: -50, 
                rotate: 25, 
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" }
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </AnimatePresence>
          
          {/* Overlay Petunjuk Klik */}
          <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white mb-2 transform scale-90 group-hover:scale-100 transition-transform">
              <MousePointerClick size={24} />
            </div>
            <span className="text-white font-medium text-xs tracking-widest uppercase">Klik Ganti Foto</span>
          </div>
        </motion.div>

        {/* Teks Bawah Polaroid */}
        <div className="absolute bottom-4 left-0 w-full text-center px-4 flex items-center justify-between">
          <span className="font-display text-xs tracking-wider text-neutral-800 uppercase">uhammad Imam Al Ma'ruf</span>
          <span className="text-[9px] text-neutral-400 font-medium tracking-widest uppercase">{index + 1} / {photos.length}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   MAIN ABOUT (3D FOLD REVEAL)
   ============================================================ */
export default function About() {
  const [activeRole, setActiveRole] = useState(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start 0.25'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })
  
  const rotateX = useTransform(smoothProgress, [0, 1], [15, 0])
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1])
  const y = useTransform(smoothProgress, [0, 1], [150, 0])
  const opacity = useTransform(smoothProgress, [0, 0.8], [0, 1])

  return (
    <div style={{ perspective: '1200px' }} className="relative z-20 bg-[#0a0a0a]">
      <motion.section 
        ref={sectionRef}
        style={{ rotateX, scale, y, opacity }}
        className="relative bg-[#fafafa] pt-20 md:pt-28 pb-20 md:pb-28 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_80px_rgba(0,0,0,0.8)] overflow-hidden origin-top"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #d4d4d8 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <div className="mb-12 md:mb-16">
              <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-maroon font-bold mb-3">Tentang Saya</p>
              <h2 className="font-display text-3xl md:text-5xl text-neutral-900 leading-tight tracking-tight">Developer yang percaya pada detail.</h2>
            </div>
          </SectionReveal>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
            
            <div className="relative">
              <SectionReveal delay={0.1}>
                <AboutPhoto />
              </SectionReveal>
            </div>

            <SectionReveal delay={0.2}>
              <div>
                <MagneticHeading />
                <div className="mt-8 space-y-6">
                  <RevealWords text="Saya fokus pada pengembangan aplikasi web, backend & API, serta aplikasi mobile. Saya suka membangun sistem end-to-end — dari struktur data, endpoint, sampai antarmuka yang nyaman dipakai." />
                  <RevealWords text="Prinsip saya sederhana: kode yang rapi, performa yang baik, dan pengalaman yang jelas bagi pengguna. Produk bagus lahir dari detail kecil yang konsisten." />
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-maroon" /><span>Indonesia</span></div>
                  <div className="flex items-center gap-2"><Mail size={16} className="text-maroon" /><span>imam@example.com</span></div>
                </div>

                <div className="my-10 h-px bg-neutral-200" />

                <div className="space-y-3">
                  {roles.map((role, i) => (
                    <RoleCard key={role.title} role={role} index={i} active={activeRole} setActive={setActiveRole} />
                  ))}
                </div>

                <TechStack3D items={techStack} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </motion.section>
    </div>
  )
}