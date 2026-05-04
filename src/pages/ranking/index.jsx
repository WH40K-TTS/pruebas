import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart2 } from 'lucide-react'
import { useRanking } from '../../hooks/useranking'
import PlayerScoreCell from '../../components/tournament/playerscorecell'
import PlayerDetailModal from './playerdetail'
import Badge from '../../components/ui/badge'
import Table from '../../components/ui/table'

const MEDAL = { 0: '🥇', 1: '🥈', 2: '🥉' }

export default function Ranking() {
  const { players, loading, error } = useRanking()
  const [selected, setSelected]     = useState(null)

  const columns = [
    { key: 'pos', label: '#', cellClassName: 'text-center w-12' },
    { key: 'name', label: 'Jugador', cellClassName: 'text-left' },
    { key: 'faction', label: 'Facción', cellClassName: 'text-left' },
    { key: 'totalPoints', label: 'Puntos', cellClassName: 'text-right', render: (val, row) => (
      <PlayerScoreCell points={val} onClick={() => setSelected(row)} />
    )},
    { key: 'tournamentsPlayed', label: 'Torneos', cellClassName: 'text-right font-mono text-xs text-slate-400' },
    { key: 'wl', label: 'W/L', cellClassName: 'text-right font-mono text-xs', render: (val, row) => (
      <>
        <span className="text-green-500/80">{row.wins}W</span>
        <span className="text-slate-600 mx-1">/</span>
        <span className="text-brand-danger/70">{row.losses}L</span>
      </>
    )},
  ]

  const rows = players.map((player, idx) => ({
    ...player,
    id: player.id,
    pos: MEDAL[idx] ? MEDAL[idx] : idx + 1,
    wl: null, // handled by render
  }))

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-brand-accent uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-brand-accent inline-block" />
          Temporada 2025
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <BarChart2 size={32} className="text-brand-accent" strokeWidth={1.5} />
          Clasificación Global
        </h1>
        <p className="font-body text-slate-400 text-sm mt-3">
          Top 20 jugadores. Haz clic en los puntos de un jugador para ver su historial.
        </p>
      </div>

      {/* States */}
      {loading && <SkeletonTable />}
      {error   && (
        <p className="text-brand-danger font-body text-sm border border-brand-danger/30 rounded-xl px-4 py-3 bg-brand-danger/10">
          {error}
        </p>
      )}

      {/* Table */}
      {!loading && !error && (
        <Table 
          caption="Clasificación global de jugadores — Temporada 2025"
          columns={columns}
          rows={rows}
          className="shadow-2xl shadow-black/50"
        />
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
    <div className="rounded-2xl border border-white/10 overflow-hidden animate-pulse bg-brand-deep/20">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="h-14 border-b border-white/5 bg-brand-deep/40 last:border-0"
        />
      ))}
    </div>
  )
}