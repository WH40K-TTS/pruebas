import MatchRow from '../../components/tournament/matchrow'
import { motion } from 'framer-motion'

export default function QualificationMatches({ tournament }) {
  const rounds = tournament?.qualificationMatches ?? []

  if (rounds.length === 0) {
    return (
      <p className="font-body text-slate-500 text-sm text-center py-10 border border-dashed border-white/10 rounded-2xl bg-brand-deep/20">
        Los encuentros de clasificación aún no están disponibles.
      </p>
    )
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {rounds.map((round, rIdx) => (
        <motion.section
          key={round.round}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rIdx * 0.1, duration: 0.35 }}
        >
          {/* Round header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-brand-accent font-bold uppercase tracking-widest">
              Ronda {round.round}
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-[10px] text-slate-600 uppercase">
              {round.matches.length} encuentros
            </span>
          </div>

          {/* Matches */}
          <div className="space-y-2">
            {round.matches.map((match, mIdx) => (
              <MatchRow key={`${match.player1}-${match.player2}-${mIdx}`} match={match} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}