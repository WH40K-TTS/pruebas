import MatchRow from '../../components/tournament/matchrow'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const ROUND_ICONS = {
  'Final': <Trophy size={14} className="text-amber-400" />,
}

export default function FinalMatches({ tournament }) {
  const rounds = tournament?.finalMatches ?? []

  if (rounds.length === 0) {
    return (
      <p className="font-body text-slate-500 text-sm text-center py-10 border border-dashed border-slate-800 rounded-lg">
        La fase final aún no ha comenzado.
      </p>
    )
  }

  // La final al final
  const ordered = [...rounds].sort((a, b) => {
    const priority = {
      'Cuartos de Final': 0,
      'Semifinales': 1,
      '3er y 4º Puesto': 2,
      'Final': 3,
    }
    return (priority[a.round] ?? 99) - (priority[b.round] ?? 99)
  })

  return (
    <div className="space-y-8">
      {ordered.map((round, rIdx) => (
        <motion.section
          key={round.round}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rIdx * 0.1, duration: 0.35 }}
        >
          {/* Round header */}
          <div className="flex items-center gap-3 mb-3">
            {ROUND_ICONS[round.round] ?? null}
            <span className={[
              'font-display font-semibold uppercase tracking-wide text-xs',
              round.round === 'Final' ? 'text-amber-400' : 'text-slate-400',
            ].join(' ')}>
              {round.round}
            </span>
            <div className="flex-1 h-px bg-slate-800/60" />
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
