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
      className="bg-surface border border-gold p-6 shadow-gold"
      {...props}
    >
      {children}
    </Tag>
  )
}