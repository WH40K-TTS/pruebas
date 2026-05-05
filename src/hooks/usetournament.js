import { useState, useEffect } from 'react'

const TOURNAMENT_LOADERS = import.meta.glob('../data/tournaments/tournament-*.json')

/**
 * Carga los datos de un torneo por su ID desde /src/data/tournaments/{id}.json.
 * @param {string} id - ID del torneo (ej. "tournament-001")
 * @returns {{ tournament: object|null, loading: boolean, error: string|null }}
 */
export function useTournament(id) {
  const [tournament, setTournament] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

        const key = `../data/tournaments/${id}.json`
        const loader = TOURNAMENT_LOADERS[key]

        if (!loader) {
          throw new Error(`Torneo "${id}" no encontrado en src/data/tournaments`)
        }

        const module = await loader()
        const json = module.default ?? module

        if (!cancelled) setTournament(json)
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
  }, [id])

  return { tournament, loading, error }
}

export default useTournament
