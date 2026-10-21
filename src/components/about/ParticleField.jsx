import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Canvas particle field dengan cursor repulsion.
 * - Partikel kecil marun mengapung
 * - Kursor "menolak" partikel yang mendekat
 * - Garis tipis menghubungkan partikel berdekatan
 * - Respects prefers-reduced-motion
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.parentElement) return
    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let raf = 0
    let particles = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(
        70,
        Math.max(20, Math.floor((width * height) / 14000)),
      )
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.6,
      }))
    }

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const tick = () => {
      const { width, height } = parent.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy) || 1
        if (dist < 110) {
          const force = (110 - dist) / 110
          p.vx += (dx / dist) * force * 0.45
          p.vy += (dy / dist) * force * 0.45
        }

        p.vx *= 0.95
        p.vy *= 0.95
        p.x += p.vx
        p.y += p.vy

        if (p.x < -5) p.x = width + 5
        if (p.x > width + 5) p.x = -5
        if (p.y < -5) p.y = height + 5
        if (p.y > height + 5) p.y = -5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(168, 50, 50, 0.55)'
        ctx.fill()
      }

      // Garis penghubung antar partikel berdekatan
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 95) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(168, 50, 50, ${0.12 * (1 - d / 95)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    if (!shouldReduce) raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [shouldReduce])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  )
}