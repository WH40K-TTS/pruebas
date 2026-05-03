import Card from '../ui/card'
import { sortGroupPlayers } from '../../utils/sorthelpers'
import { Crown } from 'lucide-react'

/**
 * Tarjeta de grupo con diseño Premium Dark y jugadores ordenados por puntos.
 */
export default function GroupCard({ group }) {
  const sorted = sortGroupPlayers(group.players)

  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 bg-brand-deep/50 flex items-center justify-between">
        <h3 className="font-display font-semibold text-brand-accent tracking-wide uppercase text-sm">
          {group.name}
        </h3>
        <span className="text-xs font-mono text-slate-500">
          {group.players.length} jugadores
        </span>
      </div>

      {/* Tabla de jugadores */}
      <table className="w-full text-sm">
        <caption className="sr-only">Jugadores del {group.name}</caption>
        <thead>
          <tr className="border-b border-white/5">
            <th scope="col" className="px-4 py-2 text-left text-xs font-mono text-slate-500 uppercase tracking-wider w-8">#</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-mono text-slate-500 uppercase tracking-wider">Jugador</th>
            <th scope="col" className="px-4 py-2 text-right text-xs font-mono text-slate-500 uppercase tracking-wider">Pts</th>
            <th scope="col" className="px-4 py-2 text-right text-xs font-mono text-slate-500 uppercase tracking-wider">W/L</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((player, idx) => {
            const isTop2      = idx < 2
            const isFirst     = idx === 0

            return (
              <tr
                key={player.name}
                className={[
                  'border-b border-white/5 last:border-0 transition-colors duration-200',
                  isTop2 ? 'bg-brand-accent/5 hover:bg-brand-accent/10' : 'hover:bg-white/5',
                ].join(' ')}
              >
                {/* Posición */}
                <td className="px-4 py-2.5 text-slate-500 font-mono text-xs">
                  {isFirst ? (
                    <Crown size={12} className="text-brand-accent" />
                  ) : (
                    <span className={isTop2 ? 'text-brand-accent/70' : ''}>{idx + 1}</span>
                  )}
                </td>
                {/* Nombre */}
                <td className={[
                  'px-4 py-2.5 font-display font-medium',
                  isTop2 ? 'text-white' : 'text-slate-300',
                ].join(' ')}>
                  {player.name}
                  {isTop2 && (
                    <span className="ml-2 text-xs font-mono text-brand-accent/50">↑</span>
                  )}
                </td>
                {/* Puntos */}
                <td className={[
                  'px-4 py-2.5 text-right font-mono font-semibold',
                  isFirst ? 'text-brand-accent' : isTop2 ? 'text-brand-accent/70' : 'text-slate-400',
                ].join(' ')}>
                  {player.points}
                </td>
                {/* W/L */}
                <td className="px-4 py-2.5 text-right font-mono text-xs text-slate-500">
                  <span className="text-green-500/80">{player.wins}W</span>
                  {' / '}
                  <span className="text-brand-danger/70">{player.losses}L</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}