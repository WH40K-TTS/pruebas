import { useState, useEffect } from 'react'

/**
 * Carga los datos de un torneo por su ID desde /public/data/tournaments/{id}.json.
 * @param {string} id - ID del torneo (ej. "tournament-001")
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

        const res = await fetch(
          `${import.meta.env.BASE_URL}../data/tournaments/${id}.json`
        )
        if (!res.ok) throw new Error(`Torneo "${id}" no encontrado (HTTP ${res.status})`)

        const json = await res.json()
        if (!cancelled) setTournament(json)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [id])

  return { tournament, loading, error }
}

export default useTournament
