import { ChevronRight } from 'lucide-react'

/**
 * Fila de resultado de partida.
 * @param {{ player1, score1, player2, score2, winner }} match
 */
export default function MatchRow({ match }) {
  const { player1, score1, player2, score2, winner } = match

  const p1Wins = player1 === winner
  const p2Wins = player2 === winner

  return (
    <div className="flex items-center gap-3 py-2.5 px-4 rounded border border-slate-800/60 bg-slate-900/50 hover:bg-slate-800/40 transition-colors">
      {/* Jugador 1 */}
      <div className={[
        'flex-1 text-right font-display font-semibold text-sm',
        p1Wins ? 'text-white' : 'text-slate-500',
      ].join(' ')}>
        {player1}
      </div>

      {/* Marcador */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Score 1 */}
        <span className={[
          'w-8 h-8 flex items-center justify-center rounded font-mono font-bold text-sm',
          p1Wins
            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
            : 'bg-slate-800 text-slate-500 border border-slate-700/50',
        ].join(' ')}>
          {score1}
        </span>

        <span className="text-slate-600 font-mono text-xs px-0.5">—</span>

        {/* Score 2 */}
        <span className={[
          'w-8 h-8 flex items-center justify-center rounded font-mono font-bold text-sm',
          p2Wins
            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
            : 'bg-slate-800 text-slate-500 border border-slate-700/50',
        ].join(' ')}>
          {score2}
        </span>
      </div>

      {/* Jugador 2 */}
      <div className={[
        'flex-1 text-left font-display font-semibold text-sm',
        p2Wins ? 'text-white' : 'text-slate-500',
      ].join(' ')}>
        {player2}
      </div>

      {/* Ganador indicador */}
      <div className="hidden md:flex items-center gap-1 text-xs font-mono text-amber-500/60 w-28 shrink-0">
        <ChevronRight size={12} />
        <span>{winner}</span>
      </div>
    </div>
  )
}
