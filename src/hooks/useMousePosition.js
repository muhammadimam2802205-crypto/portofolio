import { useEffect } from 'react'
import { useMotionValue } from 'motion/react'

/**
 * Track posisi kursor global tanpa menyebabkan re-render React.
 * Nilai disimpan di MotionValue (di luar React state).
 */
export function useMousePosition(initial = -9999) {
  const x = useMotionValue(initial)
  const y = useMotionValue(initial)

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return { x, y }
}