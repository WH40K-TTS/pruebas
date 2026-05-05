import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Trophy } from 'lucide-react'

const STATUS_LABELS = {
  upcoming: 'Proximo',
  ongoing: 'En curso',
  finished: 'Finalizado',
}

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)

        const module = await import('../data/tournaments/index.json')
        const json = module.default ?? module

        if (!cancelled) setTournaments(json.tournaments ?? [])
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="font-heading text-3xl sm:text-4xl tracking-[0.15em] uppercase text-[#c9a84c] mb-4">
            Torneos
          </h1>
          <p className="font-body text-[#7a6848] text-base">
            Historial y calendario de eventos de la comunidad.
          </p>
        </div>

        {loading && (
          <div className="text-center py-16 font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse">
            Cargando torneos...
          </div>
        )}

        {error && (
          <div className="border border-[#5c1010] bg-[#1a0c0c] px-5 py-4 text-[#cc4444] font-body text-sm mb-8">
            Error al cargar el listado de torneos.
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Link
                key={tournament.id}
                to={`/tournament/${tournament.id}`}
                className="group border border-[#3a2d10] bg-[#161209] p-5 hover:border-[#6b5420] transition-colors duration-200"
              >
                <h2 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c] mb-2 group-hover:text-[#e8c96a]">
                  {tournament.name}
                </h2>
                <div className="space-y-2 font-body text-sm text-[#7a6848]">
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#8a6f2e]" />
                    {tournament.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users size={14} className="text-[#8a6f2e]" />
                    {tournament.players ?? '-'} jugadores
                  </p>
                  <p className="flex items-center gap-2">
                    <Trophy size={14} className="text-[#8a6f2e]" />
                    {STATUS_LABELS[tournament.status] ?? 'Sin estado'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
