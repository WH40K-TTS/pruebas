import { forwardRef } from 'react'

const VARIANTS = {
  primary:
    'bg-brand-accent text-brand-darkest font-semibold hover:bg-brand-highlight active:bg-brand-accent/90 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]',
  secondary:
    'bg-brand-deep text-brand-accent border border-white/10 hover:bg-brand-deep/80 hover:border-brand-accent/50',
  ghost:
    'bg-transparent text-slate-300 hover:text-brand-accent hover:bg-brand-deep/40',
  danger:
    'bg-brand-danger/80 text-white hover:bg-brand-danger border border-white/10',
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
 * Botón reutilizable con variantes de estilo "Premium Dark".
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
        'inline-flex items-center justify-center gap-2 rounded-xl font-display tracking-wide',
        'transition-all duration-200 cursor-pointer select-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2',
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