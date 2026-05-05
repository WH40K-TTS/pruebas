import React from 'react'

export function MatchRow({ match, isFinal = false, isLast = false }) {
  const { player1, score1, player2, score2, winner } = match
  const p1wins = winner === player1
  const p2wins = winner === player2
  const isDraw = !winner

  return (
    <div
      className={`
        flex items-center gap-2 sm:gap-4 px-4 sm:px-5 py-3
        ${!isLast ? 'border-b border-[#1e1a0d]' : ''}
        ${isFinal ? 'bg-[#1a1610]' : 'hover:bg-[#1a1610]'}
        transition-colors duration-150
        group
      `}
    >
      {/* Player 1 */}
      <div className={`flex-1 flex items-center justify-end gap-2 min-w-0 ${p1wins ? '' : 'opacity-60'}`}>
        <span
          className={`
            font-heading text-xs sm:text-sm tracking-[0.1em] truncate text-right
            ${p1wins ? (isFinal ? 'text-[#e8c96a]' : 'text-[#c9a84c]') : 'text-[#7a6848]'}
          `}
        >
          {player1}
        </span>
        {p1wins && (
          <span className="shrink-0 font-heading text-[9px] text-[#8a6f2e]">✦</span>
        )}
      </div>

      {/* Score block */}
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        {/* Score 1 */}
        <span
          className={`
            font-heading text-base sm:text-lg w-7 text-center tabular-nums
            ${p1wins ? 'text-[#c9a84c]' : 'text-[#5a4920]'}
          `}
        >
          {score1 ?? '—'}
        </span>

        {/* VS divider */}
        <div className="flex flex-col items-center gap-0.5 w-6">
          <div className="w-full h-px bg-[#3a2d10]" />
          <span className="font-heading text-[9px] tracking-[0.1em] text-[#3a2d10]">
            {isDraw ? '=' : 'vs'}
          </span>
          <div className="w-full h-px bg-[#3a2d10]" />
        </div>

        {/* Score 2 */}
        <span
          className={`
            font-heading text-base sm:text-lg w-7 text-center tabular-nums
            ${p2wins ? 'text-[#c9a84c]' : 'text-[#5a4920]'}
          `}
        >
          {score2 ?? '—'}
        </span>
      </div>

      {/* Player 2 */}
      <div className={`flex-1 flex items-center gap-2 min-w-0 ${p2wins ? '' : 'opacity-60'}`}>
        {p2wins && (
          <span className="shrink-0 font-heading text-[9px] text-[#8a6f2e]">✦</span>
        )}
        <span
          className={`
            font-heading text-xs sm:text-sm tracking-[0.1em] truncate
            ${p2wins ? (isFinal ? 'text-[#e8c96a]' : 'text-[#c9a84c]') : 'text-[#7a6848]'}
          `}
        >
          {player2}
        </span>
      </div>
    </div>
  )
}

export default MatchRow
