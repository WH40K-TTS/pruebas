import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Modal accesible con gestión de foco y cierre con Escape.
 */
export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const overlayRef  = useRef(null)
  const closeButton = useRef(null)

  const SIZES = {
    sm:  'max-w-md',
    md:  'max-w-2xl',
    lg:  'max-w-4xl',
    xl:  'max-w-6xl',
  }

  // Cerrar con Escape y bloquear scroll
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    closeButton.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose])

  // Cerrar al clicar el overlay
  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={[
              'relative w-full rounded-xl border border-slate-700/80',
              'bg-slate-900 shadow-2xl shadow-black/60',
              'max-h-[85vh] flex flex-col',
              SIZES[size],
            ].join(' ')}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 flex-shrink-0">
              <h2 className="font-display text-xl font-semibold text-white tracking-wide">
                {title}
              </h2>
              <button
                ref={closeButton}
                onClick={onClose}
                aria-label="Cerrar modal"
                className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
