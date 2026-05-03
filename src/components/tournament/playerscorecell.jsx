import { motion } from 'framer-motion'

/**
 * Celda clicable de puntuación en la tabla de clasificación.
 * Al hacer clic abre el detalle del jugador.
 */
export default function PlayerScoreCell({ points, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={[
        'group inline-flex items-center gap-1.5 px-3 py-1 rounded',
        'font-mono font-semibold text-amber-400',
        'border border-amber-500/20 bg-amber-500/8',
        'hover:bg-amber-500/20 hover:border-amber-500/50',
        'transition-colors duration-150 cursor-pointer',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400',
      ].join(' ')}
      aria-label={`Ver historial — ${points} puntos`}
    >
      {points}
      <span className="text-amber-500/40 group-hover:text-amber-500/80 transition-colors text-xs">
        ↗
      </span>
    </motion.button>
  )
}
