import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, BookOpen, BarChart2, MessageCircle, ChevronRight, Hexagon } from 'lucide-react'
import Button from '../../components/ui/button'
import Card from '../../components/ui/card'

const DISCORD_URL   = 'https://discord.gg/4uHrQp2ckW'

const FEATURES = [
  {
    icon: Trophy,
    title: 'Torneos',
    description: 'Grupos, clasificaciones y brackets eliminatorios actualizados en tiempo real.',
    to: '/tournament',
    color: 'text-brand-accent',
    border: 'hover:border-brand-accent/50',
  },
  {
    icon: BookOpen,
    title: 'Reglas',
    description: 'Reglamento oficial completo para torneos individuales y por equipos.',
    to: '/rules',
    color: 'text-blue-400',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: BarChart2,
    title: 'Clasificación',
    description: 'Top 20 global con historial detallado de resultados por jugador.',
    to: '/ranking',
    color: 'text-green-400',
    border: 'hover:border-green-500/40',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <div className="text-center py-24 px-6">

      <p className="text-sm text-textDim tracking-[0.4em] mb-6">
        EN EL LEJANO FUTURO, SÓLO HAY GUERRA
      </p>

      <h1 className="text-6xl md:text-7xl text-primary font-display mb-6">
        WH40K-TTS
      </h1>

      <p className="text-accent tracking-[0.3em] uppercase mb-10">
        Torneos Warhammer 40.000 · Tabletop Simulator
      </p>

      <p className="text-textDim mb-12">
        Comunidad competitiva digital
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <button className="btn-red">
          Unirse al Discord
        </button>

        <button className="btn-gold">
          Ver Clasificación
        </button>
      </div>

    </div>
  );
}