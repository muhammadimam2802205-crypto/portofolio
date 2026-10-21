import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    // Tidak ada hash → scroll ke atas (misal buka /project/xxx langsung)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    // Ada hash → tunggu AnimatePresence selesai (exit 300ms + enter sedikit)
    // lalu cari elemen dan scroll
    const timer = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [hash, pathname])

  return null
}