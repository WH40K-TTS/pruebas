import GroupCard from '../../components/tournament/groupcard'
import { motion } from 'framer-motion'

export default function Groups({ tournament }) {
  const groups = tournament?.groups ?? []

  if (groups.length === 0) {
    return (
      <p className="font-body text-slate-500 text-sm text-center py-10 border border-dashed border-slate-800 rounded-lg">
        Los grupos aún no están disponibles.
      </p>
    )
  }

  return (
    <div>
      <p className="font-body text-slate-400 text-xs mb-5">
        Los jugadores marcados con{' '}
        <span className="text-amber-500 font-mono">↑</span>{' '}
        avanzan a la fase eliminatoria.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
