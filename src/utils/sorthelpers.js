/**
 * Ordena un array de jugadores por puntos descendente.
 * En caso de empate, desempata por ratio de victorias, y luego por nombre.
 * @param {Player[]} players
 * @returns {Player[]}
 */
export function sortByPoints(players = []) {
  return [...players].sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints

    const ratioA = winRatio(a)
    const ratioB = winRatio(b)
    if (ratioB !== ratioA) return ratioB - ratioA

    return (a.name ?? '').localeCompare(b.name ?? '', 'es')
  })
}

/**
 * Ordena jugadores dentro de un grupo por puntos de grupo (desc),
 * con desempate por diferencia de marcador y luego por victoria directa.
 * @param {GroupPlayer[]} players
 * @returns {GroupPlayer[]}
 */
export function sortGroupPlayers(players = []) {
  return [...players].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    const diffA = (a.scoreFavor ?? 0) - (a.scoreAgainst ?? 0)
    const diffB = (b.scoreFavor ?? 0) - (b.scoreAgainst ?? 0)
    if (diffB !== diffA) return diffB - diffA
    return (a.name ?? '').localeCompare(b.name ?? '', 'es')
  })
}

/**
 * Ordena rondas de partidos por número de ronda.
 * Acepta rondas con "round" numérico o string ("Cuartos de Final", etc.).
 * @param {Round[]} rounds
 * @returns {Round[]}
 */
export function sortRounds(rounds = []) {
  const order = {
    'Cuartos de Final': 1,
    'Semifinales':      2,
    '3er y 4o Puesto':  3,
    'Final':            4,
  }
  return [...rounds].sort((a, b) => {
    const oa = order[a.round] ?? Number(a.round) ?? 0
    const ob = order[b.round] ?? Number(b.round) ?? 0
    return oa - ob
  })
}

// ── Helpers internos ──────────────────────────────────────────
function winRatio(player) {
  const total = (player.wins ?? 0) + (player.losses ?? 0)
  if (total === 0) return 0
  return (player.wins ?? 0) / total
}
