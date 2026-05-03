import { ChevronRight } from 'lucide-react'

/**
 * Fila de resultado de partida con diseño Premium Dark.
 * @param {{ player1, score1, player2, score2, winner }} match
 */
export default function MatchRow({ match }) {
  const { player1, score1, player2, score2, winner } = match

  const p1Wins = player1 === winner
  const p2Wins = player2 === winner

  return (
    <div className="flex items-center gap-3 py-3 px-4 rounded-xl border border-white/10 glass-panel hover:border-brand-accent/30 transition-all duration-200 group">
      {/* Jugador 1 */}
      <div className={[
        'flex-1 text-right font-display font-semibold text-sm transition-colors',
        p1Wins ? 'text-white text-glow-gold' : 'text-slate-400 group-hover:text-slate-300',
      ].join(' ')}>
        {player1}
      </div>

      {/* Marcador */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Score 1 */}
        <span className={[
          'w-9 h-9 flex items-center justify-center rounded-lg font-mono font-bold text-sm transition-all',
          p1Wins
            ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/40 shadow-[0_0_10px_rgba(250,204,21,0.2)]'
            : 'bg-brand-deep text-slate-500 border border-white/10',
        ].join(' ')}>
          {score1}
        </span>

        <span className="text-slate-600 font-mono text-xs px-0.5">—</span>

        {/* Score 2 */}
        <span className={[
          'w-9 h-9 flex items-center justify-center rounded-lg font-mono font-bold text-sm transition-all',
          p2Wins
            ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/40 shadow-[0_0_10px_rgba(250,204,21,0.2)]'
            : 'bg-brand-deep text-slate-500 border border-white/10',
        ].join(' ')}>
          {score2}
        </span>
      </div>

      {/* Jugador 2 */}
      <div className={[
        'flex-1 text-left font-display font-semibold text-sm transition-colors',
        p2Wins ? 'text-white text-glow-gold' : 'text-slate-400 group-hover:text-slate-300',
      ].join(' ')}>
        {player2}
      </div>

      {/* Ganador indicador */}
      <div className="hidden md:flex items-center gap-1 text-xs font-mono text-brand-accent/60 w-32 shrink-0">
        <ChevronRight size={12} className="text-brand-accent" />
        <span className="truncate">{winner}</span>
      </div>
    </div>
  )
}