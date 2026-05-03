import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/',           label: 'Inicio'        },
  { to: '/rules',      label: 'Reglas'        },
  { to: '/ranking',    label: 'Clasificación' },
  { to: '/tournament', label: 'Torneos'       },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function linkClass({ isActive }) {
    return [
      'font-display font-medium tracking-wide text-sm transition-colors duration-200 uppercase',
      isActive
        ? 'text-amber-400'
        : 'text-slate-400 hover:text-amber-300',
    ].join(' ')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="TTS Torneos — inicio"
        >
          <Hexagon
            size={22}
            className="text-amber-500 group-hover:text-amber-400 transition-colors"
            strokeWidth={1.5}
          />
          <span className="font-display font-bold text-lg text-white tracking-widest uppercase">
            TTS<span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-amber-400 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-slate-800/80 bg-slate-950/95 md:hidden"
          >
            <ul className="flex flex-col gap-0 px-4 py-3" role="list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={linkClass}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                  >
                    <span className="block py-3 border-b border-slate-800/60 last:border-0">
                      {label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
