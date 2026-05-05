import React from 'react'

const variants = {
  gold:    'border border-[#6b5420] bg-[#1e1a0d] text-[#c9a84c]',
  crimson: 'border border-[#5c1010] bg-[#1a0c0c] text-[#cc4444]',
  ghost:   'border border-[#3a2d10] bg-transparent text-[#7a6848]',
  success: 'border border-[#1a3a1a] bg-[#0d1f0d] text-[#4a9a4a]',
  active:  'border border-[#8a6f2e] bg-[#251f0f] text-[#e8c96a]',
  dark:    'border border-[#2a2210] bg-[#0d0b08] text-[#5a4920]',
}

const sizes = {
  xs: 'px-2 py-0.5 text-[10px] tracking-[0.2em]',
  sm: 'px-3 py-1 text-[11px] tracking-[0.2em]',
  md: 'px-3.5 py-1.5 text-xs tracking-[0.18em]',
}

export function Badge({ variant = 'gold', size = 'sm', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center font-heading uppercase ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
