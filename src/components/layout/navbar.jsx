import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',          label: 'Inicio' },
  { to: '/ranking',   label: 'Clasificación' },
  { to: '/rules',     label: 'Reglamento' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled
          ? 'bg-[rgba(13,11,8,0.97)] border-b border-[#3a2d10] shadow-[0_4px_24px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-60" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-[#c9a84c] text-sm opacity-60 group-hover:opacity-90 transition-opacity">⚙</span>
          <span className="font-heading text-sm tracking-[0.25em] uppercase text-[#c9a84c] group-hover:text-[#e8c96a] transition-colors duration-300">
            WH40K-TTS
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => [
                  'block px-5 py-1 font-heading text-xs tracking-[0.25em] uppercase transition-all duration-200',
                  'relative',
                  isActive
                    ? 'text-[#c9a84c]'
                    : 'text-[#7a6848] hover:text-[#c4b48c]',
                ].join(' ')}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-px bg-[#c9a84c]" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden text-[#7a6848] hover:text-[#c9a84c] transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(13,11,8,0.98)] border-b border-[#3a2d10] animate-slide-down">
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 font-heading text-xs tracking-[0.25em] uppercase border-b border-[#1e1a0d] ${
                      isActive ? 'text-[#c9a84c]' : 'text-[#7a6848]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bottom gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#3a2d10] to-transparent" />
    </header>
  )
}

export default Navbar
