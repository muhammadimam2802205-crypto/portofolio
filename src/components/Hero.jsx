import { motion, useMotionValue, useMotionTemplate, useSpring, useScroll, useTransform } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
}

const letterVariants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 1.2 } },
}

export default function Hero() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    mouseX.set(((e.clientX - left) / width) * 100)
    mouseY.set(((e.clientY - top) / height) * 100)
  }

  const textBackground = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, #ffffff 0%, #fca5a5 25%, #7f1d1d 60%, #4a0d0d 100%)`

  // Animasi Hero memudar saat di-scroll
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9])
  const heroY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] overflow-hidden bg-[#0a0a0a] flex flex-col justify-center items-center pt-20 md:pt-28 pb-10 md:pb-16"
    >
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4 md:px-6"
      >
        {/* Background Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-[#7f1d1d]/40 blur-[100px] md:blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], x: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-[#4a0d0d]/50 blur-[80px] md:blur-[100px] rounded-full"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#0a0a0a_90%)] pointer-events-none z-0" />
        <div className="absolute bottom-0 inset-x-0 h-40 md:h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent z-20 pointer-events-none" />

        {/* --- Visual Stack --- */}
        {/* Mengubah tinggi container di mobile (h-[50svh]) agar foto & teks pas */}
        <div className="relative w-full h-[50svh] sm:h-[60svh] md:h-[75vh] flex justify-center items-end mt-2 md:mt-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 md:top-2 inset-x-0 flex justify-center pointer-events-none select-none z-0"
          >
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-center leading-[0.85] tracking-[-0.07em] text-[14vw] sm:text-[13vw] md:text-[13vw] bg-clip-text text-transparent"
              style={{ backgroundImage: textBackground }}
            >
              <span className="block whitespace-nowrap">
                {'MUHAMMAD'.split('').map((char, index) => (
                  <motion.span key={`char-1-${index}`} variants={letterVariants} className="inline-block">{char}</motion.span>
                ))}
              </span>
              <span className="block whitespace-nowrap">
                {'IMAM'.split('').map((char, index) => (
                  <motion.span key={`char-2-${index}`} variants={letterVariants} className="inline-block">{char}</motion.span>
                ))}
              </span>
            </motion.h1>
          </motion.div>

          <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex justify-center items-end"
            >
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                src="/profile.png"
                alt="Muhammad Imam"
                className="w-auto h-full max-h-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)] drop-shadow-[0_15px_40px_rgba(127,29,29,0.5)]"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>

        {/* --- Headline (Tanpa Deskripsi) --- */}
        {/* Diberi mt-12 di mobile agar tidak terlalu nempel ke bawah foto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-6 text-center max-w-2xl z-30 relative w-full"
        >
          <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-maroon-light font-bold px-2">
            Web Developer <span className="mx-1 md:mx-2 text-white/20">|</span>
            Backend &amp; API <span className="mx-1 md:mx-2 text-white/20">|</span>
            Mobile Dev
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator (Desktop Only) */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-white/40" />
      </motion.div>
    </section>
  )
}