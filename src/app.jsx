import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'

// Lazy-loaded pages
const Home        = React.lazy(() => import('./pages/home/index'))
const Ranking     = React.lazy(() => import('./pages/ranking/index'))
const Rules       = React.lazy(() => import('./pages/rules/index'))
const Tournaments = React.lazy(() => import('./pages/tournaments/index'))
const Tournament  = React.lazy(() => import('./pages/tournament/index'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-heading text-[11px] tracking-[0.35em] uppercase text-[#5a4920] animate-pulse">
        Cargando…
      </p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"                    element={<Home />} />
              <Route path="/ranking"             element={<Ranking />} />
              <Route path="/rules"               element={<Rules />} />
              <Route path="/tournaments"         element={<Tournaments />} />
              <Route path="/tournament/:id"      element={<Tournament />} />
              {/* Fallback: redirect unknown routes to home */}
              <Route path="*"                    element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
