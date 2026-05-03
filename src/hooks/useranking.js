import { useState, useEffect } from 'react'
import { sortRanking } from '../utils/sorthelpers'

/**
 * Hook para cargar y filtrar el ranking global.
 * @returns {{ players: Array, loading: boolean, error: string|null }}
 */
export function useRanking() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        // Vite convierte los imports dinámicos de /src/data en URLs correctas
        const module = await import('../data/ranking.json')
        const data   = module.default
        if (!cancelled) {
          setPlayers(sortRanking(data.players))
        }
      } catch (err) {
        if (!cancelled) {
          setError('No se pudo cargar el ranking. Inténtalo de nuevo.')
          console.error('[useRanking]', err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  /**
   * Devuelve los datos de un jugador por su ID.
   * @param {string} playerId
   * @returns {object|undefined}
   */
  function getPlayer(playerId) {
    return players.find(p => p.id === playerId)
  }

  return { players, loading, error, getPlayer }
}
