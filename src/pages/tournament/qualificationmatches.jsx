import React, { useState } from 'react'
import MatchRow from '../../components/tournament/matchrow'

export default function QualificationMatches({ matches }) {
  const [openRound, setOpenRound] = useState(null)

  if (!matches?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        Los encuentros de clasificación aún no están disponibles
      </p>
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] shrink-0">
          ✦ Fase de Clasificación ✦
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
      </div>

      <div className="space-y-4">
        {matches.map((round) => (
          <div key={round.round} className="border border-[#3a2d10] bg-[#161209]">

            {/* Round header */}
            <button
              onClick={() => setOpenRound(openRound === round.round ? null : round.round)}
              className="w-full flex items-center justify-between px-5 py-3 text-left group"
              aria-expanded={openRound === round.round}
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#5a4920]">
                  Ronda
                </span>
                <span className="font-heading text-sm tracking-[0.1em] uppercase text-[#c9a84c] group-hover:text-[#e8c96a] transition-colors">
                  {round.round}
                </span>
                <span className="font-body text-xs text-[#5a4920]">
                  · {round.matches?.length ?? 0} partidas
                </span>
              </div>
              <span className="text-[#5a4920] group-hover:text-[#8a6f2e] transition-colors text-xs">
                {openRound === round.round ? '▲' : '▼'}
              </span>
            </button>

            {/* Matches */}
            {(openRound === round.round || openRound === null) && (
              <div className="border-t border-[#2a2210]">
                {round.matches?.map((match, i) => (
                  <MatchRow key={i} match={match} isLast={i === round.matches.length - 1} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
