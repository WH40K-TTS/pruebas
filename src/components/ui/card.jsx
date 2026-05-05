import React from 'react'

export function Card({
  children,
  className = '',
  title,
  subtitle,
  ornament,
  hover = false,
  glow = false,
}) {
  return (
    <div
      className={[
        'relative border border-[#3a2d10] bg-[#161209]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.7)]',
        hover ? 'transition-all duration-300 hover:border-[#6b5420] hover:shadow-[0_0_24px_rgba(201,168,76,0.2)] hover:-translate-y-0.5' : '',
        glow  ? 'animate-border-glow' : '',
        className,
      ].join(' ')}
    >
      {/* Corner ornaments */}
      <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#c9a84c]/60" />
      <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#c9a84c]/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#c9a84c]/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#c9a84c]/60" />

      {(title || ornament) && (
        <div className="px-5 pt-4 pb-3 border-b border-[#3a2d10]">
          {ornament && (
            <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#8a6f2e] mb-1">{ornament}</p>
          )}
          {title && (
            <h3 className="font-heading text-base tracking-[0.15em] uppercase text-[#c9a84c]">{title}</h3>
          )}
          {subtitle && (
            <p className="font-body text-sm text-[#7a6848] mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      <div className="p-5">{children}</div>
    </div>
  )
}

export function CardSection({ label, children, className = '' }) {
  return (
    <div className={`border-t border-[#3a2d10] px-5 py-4 ${className}`}>
      {label && (
        <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#8a6f2e] mb-2">{label}</p>
      )}
      {children}
    </div>
  )
}

export default Card
