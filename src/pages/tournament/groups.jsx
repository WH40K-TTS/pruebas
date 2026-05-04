import React from 'react'
import GroupCard from '../../components/tournament/groupcard'

export default function Groups({ groups }) {
  if (!groups?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        Los grupos aún no han sido asignados
      </p>
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] shrink-0">
          ✦ Fase de Grupos ✦
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#5a4920] shrink-0">
          {groups.length} grupos
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group, i) => (
          <GroupCard key={i} group={group} />
        ))}
      </div>
    </div>
  )
}
