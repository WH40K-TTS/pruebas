import { useState, useEffect } from 'react'

const RULE_LOADERS = {
  individual: () => import('../data/rules/individual.json'),
  teams: () => import('../data/rules/teams.json'),
}

/**
 * Carga reglas desde /src/data/rules usando import dinamico.
 * @param {'individual'|'teams'} type
 * @returns {{ sections: any[], loading: boolean, error: string|null }}
 */
export function useRules(type = 'individual') {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        setSections([])

        const loader = RULE_LOADERS[type]
        if (!loader) {
          throw new Error(`Tipo de reglas no soportado: ${type}`)
        }

        const module = await loader()
        const json = module.default ?? module

        if (!cancelled) setSections(json.sections ?? [])
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
  }, [type])

  return { sections, loading, error }
}

export default useRules
