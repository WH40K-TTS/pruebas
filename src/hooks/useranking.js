import { useState, useEffect, useMemo } from 'react'
import { sortByPoints } from '../utils/sorthelpers'

/**
 * Carga y expone los datos de clasificación desde /public/data/ranking.json.
 * @returns {{ players: Player[], loading: boolean, error: string|null }}
 */
export function useRanking() {
  const [raw,     setRaw]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(`${import.meta.env.BASE_URL}data/ranking.json`)
        if (!res.ok) throw new Error(`HTTP ${res.status} al cargar ranking.json`)

        const json = await res.json()
        if (!cancelled) setRaw(json.players ?? [])
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  // Ordena por puntos desc; empate → ratio V/D
  const players = useMemo(() => sortByPoints(raw), [raw])

  return { players, loading, error }
}

export default useRanking
