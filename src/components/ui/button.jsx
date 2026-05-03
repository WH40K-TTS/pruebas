import { forwardRef } from 'react'

const VARIANTS = {
  primary:
    'bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 active:bg-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.25)] hover:shadow-[0_0_20px_rgba(251,191,36,0.45)]',
  secondary:
    'bg-slate-800 text-amber-400 border border-slate-700 hover:bg-slate-700 hover:border-amber-500/50',
  ghost:
    'bg-transparent text-slate-300 hover:text-amber-400 hover:bg-slate-800/60',
  danger:
    'bg-red-700/80 text-white hover:bg-red-600 border border-red-500/40',
  discord:
    'bg-[#5865F2] text-white hover:bg-[#4752c4] shadow-[0_0_12px_rgba(88,101,242,0.3)] hover:shadow-[0_0_20px_rgba(88,101,242,0.5)]',
}

const SIZES = {
  sm:  'px-3 py-1.5 text-sm',
  md:  'px-5 py-2.5 text-sm',
  lg:  'px-7 py-3.5 text-base',
  xl:  'px-10 py-4 text-lg',
}

/**
 * Botón reutilizable con variantes de estilo.
 */
const Button = forwardRef(function Button(
  { as: Component = 'button', variant = 'primary', size = 'md', className = '', children, disabled, ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      disabled={Component === 'button' ? disabled : undefined}
      className={[
        'inline-flex items-center justify-center gap-2 rounded font-display tracking-wide',
        'transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-2',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
})

export default Button
