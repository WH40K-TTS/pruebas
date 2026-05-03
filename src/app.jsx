import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'

// Lazy loading de páginas
const Home       = lazy(() => import('./pages/home/index'))
const Rules      = lazy(() => import('./pages/rules/index'))
const Ranking    = lazy(() => import('./pages/ranking/index'))
const Tournament = lazy(() => import('./pages/tournament/index'))

// Transición de página
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -4 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

// Fallback mientras carga la página
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-3 text-slate-600 font-mono text-xs uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
        Cargando…
      </div>
    </div>
  )
}

// Página 404
function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-7xl font-bold text-slate-800 mb-4">404</p>
        <h1 className="font-display text-2xl font-semibold text-white mb-2">Página no encontrada</h1>
        <p className="font-body text-slate-500 text-sm">
          La ruta que buscas no existe en este repositorio.
        </p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Offset para la navbar fija */}
      <div className="flex-1 pt-14">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/rules" element={<PageTransition><Rules /></PageTransition>} />
            <Route path="/ranking" element={<PageTransition><Ranking /></PageTransition>} />
            <Route path="/tournament" element={<PageTransition><Tournament /></PageTransition>} />
            <Route path="/tournament/:id" element={<PageTransition><Tournament /></PageTransition>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  )
}