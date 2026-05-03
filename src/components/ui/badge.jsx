const COLORS = {
  amber:  'bg-amber-500/15 text-amber-400 border-amber-500/30',
  blue:   'bg-blue-500/15  text-blue-400  border-blue-500/30',
  green:  'bg-green-500/15 text-green-400 border-green-500/30',
  red:    'bg-red-500/15   text-red-400   border-red-500/30',
  slate:  'bg-slate-700/40 text-slate-400 border-slate-600/40',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

/**
 * Badge — etiqueta de estado o categoría.
 */
export default function Badge({ children, color = 'slate', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded px-2 py-0.5',
        'text-xs font-mono font-medium border',
        COLORS[color] ?? COLORS.slate,
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
