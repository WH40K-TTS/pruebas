import { Suspense, lazy, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, Upload, Users, Swords, Flag, Calendar, ChevronRight } from 'lucide-react'
import { useTournament, useTournamentIndex } from '../../hooks/usetournament'
import { formatDate, formatTournamentStatus } from '../../utils/formatters'
import Badge from '../../components/ui/badge'
import Card from '../../components/ui/card'

const ListUpload          = lazy(() => import('./listupload'))
const Groups              = lazy(() => import('./groups'))
const QualificationMatches = lazy(() => import('./qualificationmatches'))
const FinalMatches         = lazy(() => import('./finalmatches'))

const TABS = [
  { id: 'upload',    label: 'Subir Lista',      icon: Upload  },
  { id: 'groups',    label: 'Grupos',            icon: Users   },
  { id: 'quals',     label: 'Clasificación',     icon: Swords  },
  { id: 'finals',    label: 'Fase Final',        icon: Flag    },
]

// ─── Página de listado de torneos ───────────────────────────────────────────
function TournamentList() {
  const { tournaments, loading } = useTournamentIndex()

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-10">
        <p className="font-mono text-xs text-amber-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-amber-500 inline-block" />
          Todos los torneos
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <Trophy size={32} className="text-amber-400" strokeWidth={1.5} />
          Torneos
        </h1>
      </div>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 rounded-lg border border-slate-800 bg-slate-900/40" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {tournaments.map(t => {
            const status = formatTournamentStatus(t.status)
            return (
              <Card
                key={t.id}
                as={Link}
                to={`/tournament/${t.id}`}
                interactive
                className="flex items-center justify-between px-5 py-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-display font-semibold text-white text-base">{t.name}</h2>
                    <Badge color={status.color}>{status.label}</Badge>
                  </div>
                  <p className="font-body text-xs text-slate-500 flex items-center gap-1.5">
                    <Calendar size={11} />
                    {formatDate(t.date)}
                    {t.players && (
                      <span className="ml-2 flex items-center gap-1">
                        <Users size={11} />
                        {t.players} jugadores
                      </span>
                    )}
                  </p>
                </div>
                <ChevronRight size={16} className="text-slate-600 shrink-0" />
              </Card>
            )
          })}
        </div>
      )}
    </main>
  )
}

// ─── Página de torneo individual ─────────────────────────────────────────────
function TournamentDetail({ id }) {
  const { tournament, loading, error } = useTournament(id)
  const [activeTab, setActiveTab]      = useState('groups')

  if (loading) return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="h-10 w-64 bg-slate-800 rounded animate-pulse mb-4" />
      <div className="h-6 w-48 bg-slate-800/60 rounded animate-pulse" />
    </main>
  )

  if (error) return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <p className="text-red-400 border border-red-500/30 rounded px-4 py-3 bg-red-500/10">{error}</p>
    </main>
  )

  if (!tournament) return null

  const status = formatTournamentStatus(tournament.status)

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Breadcrumb */}
      <p className="font-mono text-xs text-slate-600 mb-6">
        <Link to="/tournament" className="hover:text-amber-400 transition-colors">Torneos</Link>
        {' / '}
        <span className="text-slate-400">{tournament.name}</span>
      </p>

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            {tournament.name}
          </h1>
          <p className="font-body text-slate-400 text-sm flex items-center gap-3">
            <Calendar size={13} />
            {formatDate(tournament.date)}
            <Badge color={status.color}>{status.label}</Badge>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-slate-800/60 overflow-x-auto">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={[
                'relative flex items-center gap-2 px-4 py-3 font-display font-medium text-xs uppercase tracking-wide transition-colors whitespace-nowrap shrink-0',
                isActive ? 'text-amber-400' : 'text-slate-500 hover:text-slate-300',
              ].join(' ')}
              aria-selected={isActive}
              role="tab"
            >
              <Icon size={13} />
              {label}
              {isActive && (
                <motion.div
                  layoutId="tournament-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Tab content */}
      <Suspense fallback={<div className="h-40 animate-pulse bg-slate-900/40 rounded-lg border border-slate-800" />}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === 'upload' && <ListUpload tournament={tournament} />}
          {activeTab === 'groups' && <Groups tournament={tournament} />}
          {activeTab === 'quals'  && <QualificationMatches tournament={tournament} />}
          {activeTab === 'finals' && <FinalMatches tournament={tournament} />}
        </motion.div>
      </Suspense>
    </main>
  )
}

// ─── Exportación principal: router entre listado y detalle ────────────────────
export default function Tournament() {
  const { id } = useParams()
  return id ? <TournamentDetail id={id} /> : <TournamentList />
}
