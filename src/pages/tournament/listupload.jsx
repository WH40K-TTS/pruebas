import { Upload, ExternalLink, Info } from 'lucide-react'
import Card from '../../components/ui/card'

/**
 * Sección de subida de lista con diseño Premium Dark.
 * Integra el formulario Tally.so mediante iframe embed.
 */
export default function ListUpload({ tournament }) {
  const formId      = tournament?.tallyFormId
  const tournamentId = tournament?.id ?? ''

  const embedUrl = formId
    ? `https://tally.so/embed/${formId}?tournament_id=${tournamentId}&transparentBackground=1`
    : null

  const externalUrl = formId
    ? `https://tally.so/r/${formId}?tournament_id=${tournamentId}`
    : null

  if (tournament?.status === 'finished') {
    return (
      <Card className="px-6 py-10 text-center">
        <Info size={28} className="text-slate-600 mx-auto mb-3" />
        <p className="font-display font-semibold text-white text-base">
          Este torneo ha finalizado.
        </p>
        <p className="font-body text-slate-500 text-sm mt-1">
          El plazo para subir listas está cerrado.
        </p>
      </Card>
    )
  }

  if (!formId) {
    return (
      <Card className="px-6 py-10 text-center">
        <Upload size={28} className="text-slate-600 mx-auto mb-3" />
        <p className="font-body text-slate-500 text-sm">
          El formulario de listas no está disponible aún para este torneo.
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Info card */}
      <Card className="flex items-start gap-3 px-5 py-4 border-left-gold">
        <Info size={16} className="text-brand-accent mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="font-display font-medium text-slate-200 text-sm">
            Sube tu lista antes de que empiece el torneo.
          </p>
          <p className="font-body text-slate-500 text-xs mt-0.5">
            Una vez enviada no podrás modificarla. Asegúrate de que cumple con las reglas vigentes.
          </p>
        </div>
      </Card>

      {/* Tally embed */}
      <Card className="overflow-hidden p-0 shadow-2xl shadow-black/50">
        <iframe
          src={embedUrl}
          width="100%"
          height="520"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title={`Subir lista — ${tournament.name}`}
          className="block"
          loading="lazy"
        />
      </Card>

      {/* Fallback link */}
      <p className="font-body text-xs text-slate-600 text-center">
        ¿Problemas con el formulario?{' '}
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-accent hover:text-brand-highlight inline-flex items-center gap-1 transition-colors"
        >
          Ábrelo en una nueva pestaña <ExternalLink size={11} />
        </a>
      </p>
    </div>
  )
}