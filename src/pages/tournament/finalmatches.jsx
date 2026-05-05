import React from 'react'
import MatchRow from '../../components/tournament/matchrow'

const ROUND_ICONS = {
  'Cuartos de Final': '⚔',
  'Semifinales':      '⚙',
  'Final':            '🏆',
  '3er y 4o Puesto':  '🥉',
}

export default function FinalMatches({ matches }) {
  if (!matches?.length) return (
    <div className="text-center py-16">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920]">
        La fase final aún no ha comenzado
      </p>
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] shrink-0">
          ✦ Fase Eliminatoria ✦
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #3a2d10, transparent)' }} />
      </div>

      <div className="space-y-5">
        {matches.map((round) => (
          <div key={round.round} className="border border-[#3a2d10] bg-[#161209]">

            {/* Round header */}
            <div
              className={`px-5 py-3 border-b flex items-center gap-3 ${
                round.round === 'Final'
                  ? 'border-[#6b5420] bg-[#1e1a0d]'
                  : 'border-[#2a2210]'
              }`}
            >
              <span>{ROUND_ICONS[round.round] ?? '⚔'}</span>
              <h3
                className={`font-heading text-sm tracking-[0.15em] uppercase ${
                  round.round === 'Final' ? 'text-[#e8c96a]' : 'text-[#c9a84c]'
                }`}
              >
                {round.round}
              </h3>
              {round.round === 'Final' && (
                <span className="ml-auto font-heading text-[9px] tracking-[0.3em] uppercase text-[#8a6f2e]">
                  Batalla Decisiva
                </span>
              )}
            </div>

            {/* Matches */}
            <div>
              {round.matches?.map((match, i) => (
                <MatchRow
                  key={i}
                  match={match}
                  isFinal={round.round === 'Final'}
                  isLast={i === round.matches.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
