import React from 'react'

const variants = {
  gold: [
    'bg-transparent border border-gold/70 text-gold',
    'hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] hover:text-gold-light',
    'active:bg-gold/20',
  ].join(' '),

  crimson: [
    'bg-transparent border border-crimson/70 text-crimson-light',
    'hover:border-crimson-light hover:bg-crimson/20 hover:shadow-[0_0_20px_rgba(139,26,26,0.5)] hover:text-[#e05555]',
    'active:bg-crimson/30',
  ].join(' '),

  'gold-filled': [
    'border border-gold/80 text-void bg-gold-gradient',
    'bg-[linear-gradient(135deg,#8a6f2e_0%,#c9a84c_40%,#e8c96a_60%,#c9a84c_80%,#8a6f2e_100%)]',
    'hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] hover:brightness-110',
    'active:brightness-90',
    'font-semibold text-[#1a1208]',
  ].join(' '),

  discord: [
    'bg-[#2d3571] border border-[#4a5299]/70 text-[#c8cfff]',
    'hover:bg-[#363f85] hover:border-[#6a74cc] hover:shadow-[0_0_16px_rgba(70,82,180,0.4)]',
    'active:bg-[#252d63]',
  ].join(' '),

  ghost: [
    'bg-transparent border border-surface-border text-parch-muted',
    'hover:border-gold/40 hover:text-parch-dim',
    'active:bg-surface-raised',
  ].join(' '),
}

const sizes = {
  sm:   'px-4 py-1.5 text-xs tracking-[0.2em]',
  md:   'px-6 py-2.5 text-sm tracking-[0.2em]',
  lg:   'px-8 py-3 text-sm tracking-[0.25em]',
  xl:   'px-10 py-4 text-base tracking-[0.25em]',
}

export function Button({
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  icon,
  disabled,
  ...props
}) {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-heading uppercase transition-all duration-300',
    'cursor-pointer select-none',
    disabled ? 'opacity-40 pointer-events-none' : '',
  ].join(' ')

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.gold} ${sizes[size] ?? sizes.md} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
