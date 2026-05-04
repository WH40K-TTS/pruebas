import React, { useState } from 'react'
import { Upload, ExternalLink } from 'lucide-react'

const TALLY_FORM_ID = 'TU_FORM_ID' // Reemplaza con el ID real de Tally

export default function ListUpload({ tournament }) {
  const [mode, setMode] = useState('embed') // 'embed' | 'link'

  const tallyEmbed = `https://tally.so/embed/${TALLY_FORM_ID}?tournament_id=${tournament?.id}&transparentBackground=1`
  const tallyLink  = `https://tally.so/r/${TALLY_FORM_ID}?tournament_id=${tournament?.id}`

  return (
    <div className="max-w-2xl mx-auto">

      <div className="mb-8">
        <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-2">
          ✦ Registro de Lista ✦
        </p>
        <h2 className="font-heading text-lg tracking-[0.15em] uppercase text-[#c9a84c] mb-3">
          Subir Lista de Ejército
        </h2>
        <p className="font-body text-[#7a6848] text-base leading-relaxed">
          Presenta tu lista de ejército antes del inicio del torneo. El envío es gestionado por el formulario oficial de la comunidad.
        </p>
      </div>

      {/* Toggle embed/link */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMode('embed')}
          className={[
            'px-4 py-2 font-heading text-xs tracking-[0.2em] uppercase border transition-all duration-200',
            mode === 'embed'
              ? 'border-[#c9a84c] text-[#c9a84c] bg-[#1e1a0d]'
              : 'border-[#3a2d10] text-[#5a4920] hover:border-[#6b5420]',
          ].join(' ')}
        >
          Formulario integrado
        </button>
        <button
          onClick={() => setMode('link')}
          className={[
            'px-4 py-2 font-heading text-xs tracking-[0.2em] uppercase border transition-all duration-200',
            mode === 'link'
              ? 'border-[#c9a84c] text-[#c9a84c] bg-[#1e1a0d]'
              : 'border-[#3a2d10] text-[#5a4920] hover:border-[#6b5420]',
          ].join(' ')}
        >
          Enlace externo
        </button>
      </div>

      {/* Embed mode */}
      {mode === 'embed' && (
        <div className="relative border border-[#3a2d10] bg-[#161209]">
          <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c]/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c]/50" />
          <iframe
            src={tallyEmbed}
            width="100%"
            height="520"
            title={`Formulario de lista para ${tournament?.name ?? 'torneo'}`}
            className="block"
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      )}

      {/* Link mode */}
      {mode === 'link' && (
        <div className="border border-[#3a2d10] bg-[#161209] p-8 text-center">
          <div className="text-[#8a6f2e] mb-4">
            <Upload size={32} strokeWidth={1.5} className="mx-auto" />
          </div>
          <p className="font-heading text-sm tracking-[0.1em] uppercase text-[#c4b48c] mb-2">
            Formulario externo
          </p>
          <p className="font-body text-sm text-[#7a6848] mb-6">
            Haz clic en el botón para abrir el formulario de envío de lista en una nueva ventana.
          </p>
          <a
            href={tallyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-8 py-3
              border border-[#8a6f2e] text-[#c9a84c]
              font-heading text-xs tracking-[0.25em] uppercase
              hover:border-[#c9a84c] hover:bg-[#1e1a0d] hover:shadow-[0_0_16px_rgba(201,168,76,0.3)]
              transition-all duration-300
            "
          >
            <ExternalLink size={14} />
            Abrir formulario
          </a>
        </div>
      )}

      <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#3a2d10] text-center mt-4">
        Formulario gestionado por Tally.so · Los datos son recibidos por los organizadores
      </p>
    </div>
  )
}
