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
  if (!data)   return <p className="text-slate-500">Error cargando las reglas.</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="font-body text-slate-400 text-sm">{data.description}</p>
        <span className="font-mono text-xs text-slate-600">v{data.version}</span>
      </div>
      <div className="space-y-4">
        {data.sections.map((section, idx) => (
          <RuleSection key={idx} section={section} index={idx} />
        ))}
      </div>
    </div>
  )
}
