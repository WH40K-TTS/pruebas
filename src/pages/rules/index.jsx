import React, { useState } from 'react'
import IndividualRules from './individualrules'
import TeamRules from './teamrules'

const TABS = [
  { id: 'individual', label: 'Individual', icon: '⚔' },
  { id: 'teams',      label: 'Equipos',    icon: '⚙' },
]

export default function Rules() {
  const [activeTab, setActiveTab] = useState('individual')

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Page header */}
        <div className="text-center mb-12 pt-8">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#5a4920] mb-3">
            ✦ Codex Torneorum ✦
          </p>
          <h1
            className="font-heading text-3xl sm:text-4xl tracking-[0.15em] uppercase text-[#c9a84c] mb-4"
            style={{ textShadow: '0 0 30px rgba(201,168,76,0.25)' }}
          >
            Reglamento
          </h1>
          <div
            className="mx-auto w-48 h-px mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
          />
          <p className="font-body text-[#7a6848] text-base">
            Las leyes que rigen el combate en el simulador. Conoce las reglas antes de entrar en batalla.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#3a2d10] mb-10">
          {TABS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={[
                'flex items-center gap-2 px-6 py-3',
                'font-heading text-xs tracking-[0.25em] uppercase',
                'transition-all duration-200 relative',
                activeTab === id
                  ? 'text-[#c9a84c]'
                  : 'text-[#5a4920] hover:text-[#8a6f2e]',
              ].join(' ')}
            >
              <span className="text-sm">{icon}</span>
              {label}
              {activeTab === id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="animate-fade-in">
          {activeTab === 'individual' ? <IndividualRules /> : <TeamRules />}
        </div>

      </div>
    </main>
  )
}
