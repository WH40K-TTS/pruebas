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
      'font-display font-medium tracking-wide text-sm transition-all duration-200 uppercase',
      isActive
        ? 'text-brand-accent text-glow-gold'
        : 'text-slate-400 hover:text-brand-highlight',
    ].join(' ')
  }

  return (
  <nav className="bg-bg border-b border-border px-6 py-4 flex justify-between items-center">
    
    <h1 className="text-primary font-display text-xl tracking-widest">
      WH40K-TTS
    </h1>

    <div className="flex gap-8 text-sm uppercase tracking-wider">
      <a href="/" className="hover:text-primary">Inicio</a>
      <a href="/ranking" className="hover:text-primary">Clasificación</a>
      <a href="/rules" className="hover:text-primary">Reglamento</a>
    </div>
  </nav>
);
}