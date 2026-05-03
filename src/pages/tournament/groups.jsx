import GroupCard from '../../components/tournament/groupcard'
import { motion } from 'framer-motion'

export default function Groups({ tournament }) {
  const groups = tournament?.groups ?? []

  if (groups.length === 0) {
    return (
      <p className="font-body text-slate-500 text-sm text-center py-10 border border-dashed border-white/10 rounded-2xl bg-brand-deep/20">
        Los grupos aún no están disponibles.
      </p>
    )
  }

  return (
    <div className="animate-fade-in">
      <p className="font-body text-slate-400 text-xs mb-5 flex items-center gap-2">
        Los jugadores marcados con{' '}
        <span className="text-brand-accent font-mono font-bold bg-brand-accent/10 px-1 rounded">↑</span>{' '}
        avanzan a la fase eliminatoria.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {groups.map((group, idx) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.35 }}
          >
            <GroupCard group={group} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}