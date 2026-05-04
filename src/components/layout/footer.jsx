import { Link } from 'react-router-dom'
import { Hexagon, MessageCircle } from 'lucide-react'

const DISCORD_URL = 'https://discord.gg/4uHrQp2ckW'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-darkest mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <Hexagon size={18} className="text-brand-accent" strokeWidth={1.5} />
            <div className="text-left">
              <p className="font-display font-bold text-white tracking-widest uppercase text-sm">
                TTS Torneos
              </p>
              <p className="text-xs text-slate-500 font-body mt-0.5">
                Comunidad competitiva de Tabletop Simulator
              </p>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Navegación secundaria">
            <ul className="flex flex-wrap items-center gap-6 text-xs font-display uppercase tracking-wider" role="list">
              {[
                { to: '/',           label: 'Inicio'        },
                { to: '/rules',      label: 'Reglas'        },
                { to: '/ranking',    label: 'Clasificación' },
                { to: '/tournament', label: 'Torneos'       },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-brand-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Discord */}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#5865F2]/40 bg-[#5865F2]/10 text-[#8b98ff] text-xs font-display font-medium uppercase tracking-wider hover:bg-[#5865F2]/20 hover:border-[#5865F2]/70 transition-all shadow-lg shadow-[#5865F2]/10"
          >
            <MessageCircle size={14} />
            Discord
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-slate-600 font-mono">
          © {new Date().getFullYear()} TTS Torneos · Proyecto comunitario · No afiliado a Berserk Games
        </p>
      </div>
    </footer>
  )
}