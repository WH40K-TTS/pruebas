/**
 * Card — contenedor con efecto glassmorphism y bordes premium.
 * @param {boolean} glowing - Añade glow dorado al borde.
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
        'rounded-2xl border transition-all duration-300',
        'glass-panel', // Utility from index.css (bg-white/5 backdrop-blur-md border-white/10)
        glowing
          ? 'border-brand-accent/40 shadow-[0_0_20px_rgba(250,204,21,0.15)]'
          : 'border-white/10',
        interactive
          ? 'cursor-pointer hover:border-brand-accent/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] hover:-translate-y-1'
          : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}