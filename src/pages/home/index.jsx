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
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-brand-darkest" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute inset-0 bg-premium-glow" />
        {/* Decorative hex */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
          <Hexagon size={600} strokeWidth={0.5} className="text-brand-accent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <p className="flex items-center gap-2 font-mono text-xs text-brand-accent uppercase tracking-[0.2em] mb-5">
              <span className="inline-block w-6 h-px bg-brand-accent" />
              Comunidad competitiva · Tabletop Simulator
            </p>

            {/* Heading */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              Forja tu<br />
              <span className="text-brand-accent text-glow-gold">legado</span>
              <span className="text-slate-600"> en el tablero.</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl font-body text-slate-400 text-lg leading-relaxed mb-10">
              Únete a la comunidad líder de torneos online de miniaturas en TTS.
              Compite, mejora y escala en la clasificación global.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button as="a" href={DISCORD_URL} target="_blank" rel="noopener noreferrer" variant="discord" size="lg">
                <MessageCircle size={18} />
                Únete al Discord
              </Button>
              <Button as={Link} to="/tournament" variant="secondary" size="lg">
                Ver torneos
                <ChevronRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-slate-600 uppercase tracking-[0.2em] mb-2"
        >
          Explorar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-3xl font-bold text-white mb-10"
        >
          Todo en un lugar
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {FEATURES.map(({ icon: Icon, title, description, to, color, border }) => (
            <motion.div key={to} variants={item}>
              <Card
                as={Link}
                to={to}
                interactive
                className={`block p-6 group ${border}`}
              >
                <Icon size={28} className={`${color} mb-4`} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-brand-highlight transition-colors">
                  {title}
                </h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed">
                  {description}
                </p>
                <div className={`mt-4 flex items-center gap-1 text-xs font-mono ${color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  Explorar <ChevronRight size={12} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Discord CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Card glowing className="relative overflow-hidden px-8 py-12 md:px-14 md:py-16 text-center">
          {/* bg deco */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle size={36} className="text-[#5865F2] mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Únete a la comunidad
            </h2>
            <p className="font-body text-slate-400 text-base max-w-md mx-auto mb-8">
              Más de 200 jugadores activos. Inscripción a torneos, anuncios y partidas casuales en Discord.
            </p>
            <Button
              as="a"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="discord"
              size="xl"
            >
              <MessageCircle size={20} />
              Unirse a Discord
            </Button>
          </motion.div>
        </Card>
      </section>
    </main>
  )
}