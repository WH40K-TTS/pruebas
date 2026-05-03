import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '../../components/ui/card'

/**
 * Sección de regla colapsable.
 */
export default function RuleSection({ section, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-amber-500/50 w-5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display font-semibold text-white text-base group-hover:text-amber-300 transition-colors">
            {section.title}
          </h3>
          <span className="font-mono text-xs text-slate-600">
            ({section.rules.length} reglas)
          </span>
        </div>
        <ChevronDown
          size={16}
          className={[
            'text-slate-500 transition-transform duration-300 shrink-0',
            open ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul
              className="px-5 pb-5 space-y-2.5 border-t border-slate-800/60"
              role="list"
            >
              {section.rules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 pt-2.5 first:pt-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                  <p className="font-body text-slate-300 text-sm leading-relaxed">
                    {rule}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
