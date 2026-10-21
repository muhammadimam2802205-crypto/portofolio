import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useSpring } from 'motion/react'

/* ============================================================
   1. SplitWords — teks muncul per kata, slide up dari bawah
   ============================================================ */
export function SplitWords({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  as = 'span',
}) {
  const words = text.split(' ')
  const MotionTag = motion[as] || motion.span

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const child = {
    hidden: { y: '110%', opacity: 0 },
    show: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: '0.25em' }}
        >
          <motion.span variants={child} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/* ============================================================
   2. Magnetic — elemen mengikuti kursor secara magnetis
   ============================================================ */
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   3. Marquee — teks berjalan horizontal, infinite loop
   ============================================================ */
export function Marquee({ items = [], speed = 28, className = '' }) {
  const list = [...items, ...items] // dobel untuk loop mulus

  return (
    <div
      className={`relative overflow-hidden border-y border-white/10 bg-base py-5 md:py-7 ${className}`}
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0 px-6 md:px-10 font-display text-2xl md:text-4xl uppercase text-white/25 tracking-tight"
          >
            {item}
            <span className="ml-6 md:ml-10 w-2 h-2 rounded-full bg-maroon-light" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   4. Counter — angka hitung naik saat masuk viewport
   ============================================================ */
export function Counter({ value, suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const target = parseInt(String(value).replace(/\D/g, ''), 10) || 0
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setN(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {n}
      {suffix}
    </span>
  )
}

/* ============================================================
   5. TiltCard — kartu miring 3D mengikuti kursor
   ============================================================ */
export function TiltCard({ children, className = '', intensity = 6 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 })

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({ rotateX: -py * intensity, rotateY: px * intensity })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
      animate={style}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   6. ScrollProgress — garis marun tipis di atas sebagai progress
   ============================================================ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-maroon via-maroon-light to-maroon origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}