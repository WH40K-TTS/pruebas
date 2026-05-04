import React from 'react'
import { useRules } from '../../hooks/useRules'
import RuleSection from './rulesection'

export default function IndividualRules() {
  const { sections, loading, error } = useRules('individual')

  if (loading) return (
    <div className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse py-8 text-center">
      Cargando reglamento…
    </div>
  )

  if (error) return (
    <div className="border border-[#5c1010] bg-[#1a0c0c] px-5 py-4 text-[#cc4444] font-body text-sm">
      Error al cargar las reglas individuales.
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920]">
          ✦ Formato Individual ✦
        </span>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
      </div>
      {sections?.map((section, i) => (
        <RuleSection key={i} section={section} index={i} />
      ))}
    </div>
  )
}
