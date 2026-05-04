import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export function Modal({ isOpen, onClose, title, subtitle, children, size = 'md' }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Move focus to modal when opened
  const panelRef = useRef(null)
  useEffect(() => {
    if (isOpen) setTimeout(() => panelRef.current?.focus(), 50)
  }, [isOpen])

  if (!isOpen) return null

  const sizeClass = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  }[size] ?? 'max-w-2xl'

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={`
          relative w-full ${sizeClass} bg-[#161209]
          border border-[#3a2d10]
          shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_30px_rgba(201,168,76,0.1)]
          animate-fade-in-up outline-none
        `}
      >
        {/* Corner ornaments */}
        <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/70" />
        <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c9a84c]/70" />
        <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c9a84c]/70" />
        <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/70" />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-[#3a2d10]">
          <div>
            <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#8a6f2e] mb-0.5">
              ✦ Expediente ✦
            </p>
            {title && (
              <h2 className="font-heading text-lg tracking-[0.15em] uppercase text-[#c9a84c] leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-sm text-[#7a6848] mt-0.5">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="ml-4 text-[#5a4920] hover:text-[#c9a84c] transition-colors duration-200 mt-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
