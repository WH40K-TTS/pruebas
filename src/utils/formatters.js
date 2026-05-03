/**
 * Formatters — utilidades de presentación de datos.
 */

/**
 * Formatea una fecha ISO (YYYY-MM-DD) a formato legible en español.
 * @param {string} isoDate - Fecha en formato "YYYY-MM-DD"
 * @param {object} options - Opciones de Intl.DateTimeFormat
 * @returns {string}
 */
export function formatDate(isoDate, options = {}) {
  if (!isoDate) return '—'
  const date = new Date(isoDate + 'T00:00:00')
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  })
}

/**
 * Formatea una fecha ISO a formato corto "DD/MM/YYYY".
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDateShort(isoDate) {
  if (!isoDate) return '—'
  const date = new Date(isoDate + 'T00:00:00')
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * Devuelve la etiqueta de estado de un torneo.
 * @param {'upcoming'|'ongoing'|'finished'} status
 * @returns {{ label: string, color: string }}
 */
export function formatTournamentStatus(status) {
  const map = {
    upcoming: { label: 'Próximo',    color: 'blue'   },
    ongoing:  { label: 'En curso',   color: 'amber'  },
    finished: { label: 'Finalizado', color: 'slate'  },
  }
  return map[status] ?? { label: status, color: 'slate' }
}

/**
 * Formatea el ratio W/L como string "W / L".
 * @param {number} wins
 * @param {number} losses
 * @returns {string}
 */
export function formatWL(wins, losses) {
  return `${wins}W / ${losses}L`
}

/**
 * Devuelve el sufijo ordinal en español para una posición.
 * @param {number} position
 * @returns {string}
 */
export function formatPosition(position) {
  const suffixes = { 1: '1º', 2: '2º', 3: '3º', 4: '4º' }
  return suffixes[position] ?? `${position}º`
}

/**
 * Abrevia un nombre largo a máximo N caracteres con ellipsis.
 * @param {string} name
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateName(name, maxLength = 16) {
  if (!name) return ''
  return name.length > maxLength ? name.slice(0, maxLength - 1) + '…' : name
}
