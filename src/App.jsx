import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import { ScrollProgress } from './components/animations'
import TiltedMarquee from './components/TiltedMarquee'

// IMPORT SOCIAL SIDEBAR
import SocialSidebar from './components/SocialSidebar'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TiltedMarquee
        items={[
          'Web Developer',
          'Backend & API',
          'Mobile Development',
          'React',
          'Node.js',
        ]}
      />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-base text-white font-sans antialiased overflow-x-hidden">
      <ScrollProgress />
      <ScrollToHash />
      <Navbar />

      {/* TARUH DI SINI (Di luar AnimatePresence agar tidak rusak oleh efek 3D) */}
      {/* Hanya muncul jika berada di halaman utama (Home) */}
      {location.pathname === '/' && <SocialSidebar />}

      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="flex flex-col min-h-screen">
          
          {/* Curtain Overlay */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] origin-bottom pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              animate={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              exit={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl text-maroon-light tracking-widest"
            >
              MI.
            </motion.div>
          </motion.div>

          {/* Page Content */}
          <motion.main
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(12px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/project/:id"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-maroon-light border-t-transparent rounded-full animate-spin" />
                      </div>
                    }
                  >
                    <ProjectDetail />
                  </Suspense>
                }
              />
            </Routes>
          </motion.main>

        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  )
}