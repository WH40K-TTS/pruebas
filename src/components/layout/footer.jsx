import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[#3a2d10]">
      {/* Top separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="bg-[#0d0b08] px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ La Comunidad ✦
              </p>
              <h2 className="font-heading text-base tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
                WH40K-TTS
              </h2>
              <p className="font-body text-sm text-[#7a6848] leading-relaxed">
                Torneos de Warhammer 40.000 en Tabletop Simulator.<br />
                Comunidad competitiva digital en español.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ Navegación ✦
              </p>
              <ul className="space-y-2">
                {[
                  ['/','Inicio'],
                  ['/ranking','Clasificación'],
                  ['/rules','Reglamento'],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="font-body text-sm text-[#7a6848] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <p className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#5a4920] mb-3">
                ✦ Comunidad ✦
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-[#7a6848] hover:text-[#c9a84c] transition-colors duration-200"
              >
                <span className="text-[#5865F2]">⬡</span>
                Discord — Únete al servidor
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#3a2d10] to-transparent my-6" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#3a2d10]">
              ✦ In the grim darkness of the far future, there is only war ✦
            </p>
            <p className="font-body text-xs text-[#3a2d10]">
              WH40K-TTS © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
