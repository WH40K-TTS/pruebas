import { useState, useEffect } from 'react'

// Mapa de IDs a imports dinámicos (Vite necesita literales estáticos)
const TOURNAMENT_LOADERS = {
  'tournament-001': () => import('../data/tournaments/tournament-001.json'),
  // Añadir nuevos torneos aquí:
  // 'tournament-002': () => import('../data/tournaments/tournament-002.json'),
}

/**
 * Hook para cargar los datos de un torneo por ID.
 * @param {string} id - ID del torneo (e.g. "tournament-001")
 * @returns {{ tournament: object|null, loading: boolean, error: string|null }}
 */
export function useTournament(id) {
  const [tournament, setTournament] = useState(null)
  const [loading,    setLoading]    = useState(true)
  const [error,      setError]      = useState(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        setTournament(null)

        const loader = TOURNAMENT_LOADERS[id]
        if (!loader) {
          throw new Error(`Torneo "${id}" no encontrado.`)
        }

        const module = await loader()
        if (!cancelled) {
          setTournament(module.default)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message ?? 'Error cargando el torneo.')
          console.error('[useTournament]', err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [id])

  return { tournament, loading, error }
}

/**
 * Hook para cargar el índice de torneos disponibles.
 * @returns {{ tournaments: Array, loading: boolean, error: string|null }}
 */
export function useTournamentIndex() {
  const [tournaments, setTournaments] = useState([])
  const [loading,     setLoading]     = useState(true)
  const [error,       setError]       = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const module = await import('../data/tournaments/index.json')
        if (!cancelled) setTournaments(module.default.tournaments)
      } catch (err) {
        if (!cancelled) setError('Error cargando la lista de torneos.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return { tournaments, loading, error }
}
