import React from 'react'

export function GroupCard({ group }) {
  const sorted = [...(group.players ?? [])].sort((a, b) => b.points - a.points)

  return (
    <div className="relative border border-[#3a2d10] bg-[#161209] hover:border-[#6b5420] hover:shadow-[0_0_20px_rgba(201,168,76,0.1)] transition-all duration-300">

      {/* Corner ornaments */}
      <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/40" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/40" />

      {/* Header */}
      <div className="px-4 py-3 border-b border-[#2a2210] flex items-center justify-between">
        <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          {group.name}
        </h3>
        <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-[#5a4920]">
          {sorted.length} generales
        </span>
      </div>

      {/* Player list */}
      <div>
        {sorted.map((player, idx) => {
          const isFirst = idx === 0
          const isLast = idx === sorted.length - 1
          return (
            <div
              key={player.name}
              className={`
                flex items-center justify-between px-4 py-2.5
                ${!isLast ? 'border-b border-[#1e1a0d]' : ''}
                ${isFirst ? 'bg-[#1a1610]' : ''}
                transition-colors hover:bg-[#1a1610]
              `}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Position indicator */}
                <span
                  className="font-heading text-[10px] w-4 shrink-0"
                  style={{ color: isFirst ? '#c9a84c' : '#3a2d10' }}
                >
                  {idx === 0 ? '▲' : idx + 1}
                </span>

                {/* Name */}
                <span
                  className={`font-body text-sm truncate ${
                    isFirst ? 'text-[#f0e6c8]' : 'text-[#c4b48c]'
                  }`}
                >
                  {player.name}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 shrink-0 ml-2">
                <span className="font-heading text-[10px] tracking-[0.1em] text-[#4a9a4a]">
                  {player.wins}V
                </span>
                <span className="font-heading text-[10px] tracking-[0.1em] text-[#7a6848]">/</span>
                <span className="font-heading text-[10px] tracking-[0.1em] text-[#cc4444]">
                  {player.losses}D
                </span>
                <span
                  className={`
                    font-heading text-sm ml-1
                    ${isFirst ? 'text-[#c9a84c]' : 'text-[#8a6f2e]'}
                  `}
                >
                  {player.points}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-[#1e1a0d]">
        <p className="font-heading text-[9px] tracking-[0.2em] uppercase text-[#3a2d10] text-right">
          pts
        </p>
      </div>
    </div>
  )
}

export default GroupCard
