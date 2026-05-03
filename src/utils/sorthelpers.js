/**
 * SortHelpers — funciones de ordenación para tablas y listas.
 */

/**
 * Ordena jugadores de un grupo: primero por puntos (desc), luego por victorias (desc).
 * @param {Array} players
 * @returns {Array}
 */
export function sortGroupPlayers(players) {
  return [...players].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    return b.wins - a.wins
  })
}

/**
 * Ordena el ranking global: primero por totalPoints (desc), luego por wins (desc).
 * @param {Array} players
 * @returns {Array}
 */
export function sortRanking(players) {
  return [...players].sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints
    return b.wins - a.wins
  })
}

/**
 * Ordena el historial de torneos de un jugador por puntos obtenidos (desc).
 * @param {Array} history
 * @returns {Array}
 */
export function sortTournamentHistory(history) {
  return [...history].sort((a, b) => b.points - a.points)
}

/**
 * Ordena las rondas de encuentros por número de ronda (asc).
 * @param {Array} rounds
 * @returns {Array}
 */
export function sortRounds(rounds) {
  return [...rounds].sort((a, b) => {
    const numA = typeof a.round === 'number' ? a.round : 0
    const numB = typeof b.round === 'number' ? b.round : 0
    return numA - numB
  })
}

/**
 * Comparador genérico para ordenar por clave.
 * @param {string} key - Clave del objeto
 * @param {'asc'|'desc'} direction
 * @returns {Function}
 */
export function byKey(key, direction = 'asc') {
  return (a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
    return 0
  }
}
