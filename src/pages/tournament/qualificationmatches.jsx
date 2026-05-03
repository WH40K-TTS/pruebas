import MatchRow from '../../components/tournament/matchrow'
import { motion } from 'framer-motion'

export default function QualificationMatches({ tournament }) {
  const rounds = tournament?.qualificationMatches ?? []

  if (rounds.length === 0) {
    return (
      <p className="font-body text-slate-500 text-sm text-center py-10 border border-dashed border-slate-800 rounded-lg">
        Los encuentros de clasificación aún no están disponibles.
      </p>
    )
  }

  return (
    <div className="space-y-8">
      {rounds.map((round, rIdx) => (
        <motion.section
          key={round.round}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rIdx * 0.1, duration: 0.35 }}
        >
          {/* Round header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-amber-500">
              RONDA {round.round}
            </span>
            <div className="flex-1 h-px bg-slate-800/60" />
            <span className="font-mono text-xs text-slate-600">
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
