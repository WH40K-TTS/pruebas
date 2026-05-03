import Modal from '../../components/ui/modal'
import Badge from '../../components/ui/badge'
import { formatPosition, formatWL } from '../../utils/formatters'
import { sortTournamentHistory } from '../../utils/sorthelpers'
import { Trophy, TrendingUp } from 'lucide-react'

/**
 * Modal con el historial de torneos de un jugador.
 */
export default function PlayerDetailModal({ player, onClose }) {
  if (!player) return null

  const history = sortTournamentHistory(player.tournamentHistory ?? [])

  return (
    <Modal
      isOpen={!!player}
      onClose={onClose}
      title={`${player.name} — Historial`}
      size="md"
    >
      {/* Stats summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Puntos totales', value: player.totalPoints, accent: true },
          { label: 'Torneos',        value: player.tournamentsPlayed },
          { label: 'Victorias',      value: player.wins },
          { label: 'Derrotas',       value: player.losses },
        ].map(({ label, value, accent }) => (
          <div
            key={label}
            className={[
              'rounded-lg border px-4 py-3 text-center',
              accent
                ? 'border-amber-500/30 bg-amber-500/8'
                : 'border-slate-700/50 bg-slate-800/40',
            ].join(' ')}
          >
            <p className={[
              'font-mono font-bold text-2xl',
              accent ? 'text-amber-400' : 'text-white',
            ].join(' ')}>
              {value}
            </p>
            <p className="font-body text-xs text-slate-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Facción */}
      <div className="flex items-center gap-2 mb-5">
        <span className="font-body text-xs text-slate-500">Facción principal:</span>
        <Badge color="amber">{player.faction}</Badge>
      </div>

      {/* Tournament history */}
      <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
        <TrendingUp size={14} className="text-amber-500" />
        Historial de torneos
      </h3>

      {history.length === 0 ? (
        <p className="font-body text-slate-500 text-sm py-4 text-center border border-dashed border-slate-800 rounded-lg">
          Sin historial registrado todavía.
        </p>
      ) : (
        <div className="space-y-2">
          {history.map((entry) => (
            <div
              key={entry.tournamentId}
              className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 hover:bg-slate-800/60 transition-colors"
            >
              {/* Torneo */}
              <div>
                <p className="font-display font-medium text-slate-200 text-sm">
                  {entry.tournamentName}
                </p>
                <p className="font-mono text-xs text-slate-500 mt-0.5">
                  {formatWL(entry.wins, entry.losses)}
                </p>
              </div>

              {/* Derecha */}
              <div className="text-right flex items-center gap-3">
                {/* Posición */}
                <div className="flex items-center gap-1.5">
                  {entry.position <= 3 && (
                    <Trophy
                      size={12}
                      className={
                        entry.position === 1
                          ? 'text-amber-400'
                          : entry.position === 2
                          ? 'text-slate-400'
                          : 'text-amber-700'
                      }
                    />
                  )}
                  <span className="font-mono text-xs text-slate-400">
                    {formatPosition(entry.position)}
                  </span>
                </div>

                {/* Puntos */}
                <span className="font-mono font-semibold text-amber-400 text-sm min-w-[3rem] text-right">
                  +{entry.points}
                  <span className="text-slate-600 font-normal text-xs">pts</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}
