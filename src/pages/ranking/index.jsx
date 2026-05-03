import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart2 } from 'lucide-react'
import { useRanking } from '../../hooks/useranking'
import PlayerScoreCell from '../../components/tournament/playerscorecell'
import PlayerDetailModal from './playerdetail'
import Badge from '../../components/ui/badge'

const MEDAL = { 0: '🥇', 1: '🥈', 2: '🥉' }

export default function Ranking() {
  const { players, loading, error } = useRanking()
  const [selected, setSelected]     = useState(null)

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-amber-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-amber-500 inline-block" />
          Temporada 2025
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <BarChart2 size={32} className="text-amber-400" strokeWidth={1.5} />
          Clasificación Global
        </h1>
        <p className="font-body text-slate-400 text-sm mt-3">
          Top 20 jugadores. Haz clic en los puntos de un jugador para ver su historial.
        </p>
      </div>

      {/* States */}
      {loading && <SkeletonTable />}
      {error   && (
        <p className="text-red-400 font-body text-sm border border-red-500/30 rounded px-4 py-3 bg-red-500/10">
          {error}
        </p>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="rounded-xl border border-slate-700/60 overflow-hidden">
          <table className="w-full text-sm">
            <caption className="sr-only">Clasificación global de jugadores — Temporada 2025</caption>
            <thead>
              <tr className="border-b border-slate-700/60 bg-slate-800/60">
                {['#', 'Jugador', 'Facción', 'Puntos', 'Torneos', 'W/L'].map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={[
                      'px-4 py-3 font-display font-semibold text-slate-400 tracking-wider uppercase text-xs',
                      i === 0 ? 'w-12 text-center' : i >= 3 ? 'text-right' : 'text-left',
                    ].join(' ')}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((player, idx) => (
                <motion.tr
                  key={player.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className={[
                    'border-b border-slate-800/50 last:border-0 transition-colors',
                    idx < 3
                      ? 'bg-amber-500/5 hover:bg-amber-500/10'
                      : 'hover:bg-slate-800/30',
                  ].join(' ')}
                >
                  {/* Posición */}
                  <td className="px-4 py-3.5 text-center">
                    {MEDAL[idx] ? (
                      <span className="text-base leading-none">{MEDAL[idx]}</span>
                    ) : (
                      <span className="font-mono text-xs text-slate-500">{idx + 1}</span>
                    )}
                  </td>

                  {/* Nombre */}
                  <td className="px-4 py-3.5">
                    <span className={[
                      'font-display font-semibold',
                      idx < 3 ? 'text-white' : 'text-slate-200',
                    ].join(' ')}>
                      {player.name}
                    </span>
                  </td>

                  {/* Facción */}
                  <td className="px-4 py-3.5">
                    <Badge color={idx < 3 ? 'amber' : 'slate'}>{player.faction}</Badge>
                  </td>

                  {/* Puntos — clicable */}
                  <td className="px-4 py-3.5 text-right">
                    <PlayerScoreCell
                      points={player.totalPoints}
                      onClick={() => setSelected(player)}
                    />
                  </td>

                  {/* Torneos */}
                  <td className="px-4 py-3.5 text-right font-mono text-slate-400 text-xs">
                    {player.tournamentsPlayed}
                  </td>

                  {/* W/L */}
                  <td className="px-4 py-3.5 text-right font-mono text-xs">
                    <span className="text-green-500/80">{player.wins}W</span>
                    <span className="text-slate-600 mx-1">/</span>
                    <span className="text-red-500/70">{player.losses}L</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Player detail modal */}
      <PlayerDetailModal
        player={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  )
}

function SkeletonTable() {
  return (
    <div className="rounded-xl border border-slate-800/60 overflow-hidden animate-pulse">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="h-14 border-b border-slate-800/40 bg-slate-900/40 last:border-0"
        />
      ))}
    </div>
  )
}
