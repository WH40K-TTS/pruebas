const COLORS = {
  amber:  'bg-brand-accent/15 text-brand-accent border-brand-accent/30',
  blue:   'bg-blue-500/15  text-blue-400  border-blue-500/30',
  green:  'bg-green-500/15 text-green-400 border-green-500/30',
  red:    'bg-brand-danger/15 text-brand-danger border-brand-danger/30',
  slate:  'bg-brand-deep/50 text-slate-400 border-white/10',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
}

/**
 * Badge — etiqueta de estado o categoría con estilo premium.
 */
export default function Badge({ children, color = 'slate', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5',
        'text-[10px] uppercase tracking-wider font-mono font-semibold border',
        COLORS[color] ?? COLORS.slate,
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}