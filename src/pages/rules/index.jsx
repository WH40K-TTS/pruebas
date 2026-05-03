import { useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, User, Users } from 'lucide-react'

const IndividualRules = lazy(() => import('./individualrules'))
const TeamRules       = lazy(() => import('./teamrules'))

const TABS = [
  { id: 'individual', label: 'Individual', icon: User  },
  { id: 'teams',      label: 'Equipos',    icon: Users },
]

export default function Rules() {
  const [active, setActive] = useState('individual')

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-brand-accent uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-brand-accent inline-block" />
          Reglamento oficial
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <BookOpen size={32} className="text-brand-accent" strokeWidth={1.5} />
          Reglas
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-white/10 pb-0">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={[
                'relative flex items-center gap-2 px-5 py-3 font-display font-semibold text-sm uppercase tracking-wide transition-colors',
                isActive
                  ? 'text-brand-accent text-glow-gold'
                  : 'text-slate-500 hover:text-slate-300',
              ].join(' ')}
              aria-selected={isActive}
              role="tab"
            >
              <Icon size={15} />
              {label}
              {isActive && (
                <motion.div
                  layoutId="rules-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <Suspense fallback={<LoadingSkeleton />}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {active === 'individual' ? <IndividualRules /> : <TeamRules />}
        </motion.div>
      </Suspense>
    </main>
  )
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-brand-deep/30 h-28" />
      ))}
    </div>
  )
}