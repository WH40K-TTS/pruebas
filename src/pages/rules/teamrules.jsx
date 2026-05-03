import { useEffect, useState } from 'react'
import RuleSection from './rulesection'

export default function TeamRules() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    import('../../data/rules/teams.json').then(m => {
      setData(m.default)
      setLoading(false)
    })
  }, [])

  if (loading) return null
  if (!data)   return <p className="text-slate-500 font-body">Error cargando las reglas.</p>

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <p className="font-body text-slate-400 text-sm max-w-2xl leading-relaxed">
          {data.description}
        </p>
        <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-lg bg-white/5">
          v{data.version}
        </span>
      </div>
      <div className="space-y-6">
        {data.sections.map((section, idx) => (
          <RuleSection key={idx} section={section} index={idx} />
        ))}
      </div>
    </div>
  )
}