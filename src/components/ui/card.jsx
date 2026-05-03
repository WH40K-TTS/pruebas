/**
 * Card — contenedor con borde y fondo oscuro.
 * @param {boolean} glowing - Añade glow ámbar al borde.
 * @param {boolean} interactive - Añade hover/active states.
 */
export default function Card({
  children,
  className = '',
  glowing = false,
  interactive = false,
  as: Tag = 'div',
  ...props
}) {
  return (
    <Tag
      className={[
        'rounded-lg border bg-slate-900/80 backdrop-blur-sm',
        glowing
          ? 'border-amber-500/40 shadow-[0_0_16px_rgba(251,191,36,0.1)]'
          : 'border-slate-700/60',
        interactive
          ? 'cursor-pointer transition-all duration-200 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:-translate-y-0.5'
          : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
