import { useState, useEffect, useMemo } from 'react'
import { sortByPoints } from '../utils/sorthelpers'

/**
 * Carga y expone los datos de clasificacion desde /src/data/ranking.json.
 * @returns {{ players: Player[], loading: boolean, error: string|null }}
 */
export function useRanking() {
  const [raw, setRaw] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)

        const module = await import('../data/ranking.json')
        const json = module.default ?? module

        if (!cancelled) setRaw(json.players ?? [])
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

  const players = useMemo(() => sortByPoints(raw), [raw])

  return { players, loading, error }
}

export default useRanking
