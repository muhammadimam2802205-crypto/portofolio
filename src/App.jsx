import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ArrowLeft } from 'lucide-react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import { ScrollProgress } from './components/animations'
import TiltedMarquee from './components/TiltedMarquee'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-editorial text-2xl italic text-accent">404</p>
      <h1 className="font-display text-3xl uppercase text-ink md:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-sm text-ink/55">
        Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
      >
        <ArrowLeft size={15} /> Kembali ke Beranda
      </button>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TiltedMarquee
        items={[
          'Web Development',
          'Backend & API',
          'Laravel',
          'React',
          'Database',
          'Mobile App',
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
    <div className="min-h-screen font-sans text-ink antialiased overflow-x-hidden">
      <ScrollProgress />
      <ScrollToHash />
      <Navbar />

      <div key={location.pathname} className="flex flex-col min-h-screen">
        <main className="flex-1 animate-fade-in">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/project/:id"
              element={
                <Suspense
                  fallback={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <ProjectDetail />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}
