import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTournament } from '../../hooks/usetournament'
import ListUpload from './listupload'
import Groups from './groups'
import QualificationMatches from './qualificationmatches'
import FinalMatches from './finalmatches'
import { Badge } from '../../components/ui/badge'

const TABS = [
  { id: 'lists',         label: 'Subir Lista',       icon: '📋' },
  { id: 'groups',        label: 'Grupos',             icon: '⚙' },
  { id: 'qualification', label: 'Clasificación',      icon: '⚔' },
  { id: 'finals',        label: 'Finales',            icon: '🏆' },
]

const STATUS_LABELS = {
  upcoming: { label: 'Próximo',    variant: 'ghost' },
  ongoing:  { label: 'En curso',   variant: 'active' },
  finished: { label: 'Finalizado', variant: 'dark' },
}

export default function Tournament() {
  const { id } = useParams()
  const { tournament, loading, error } = useTournament(id)
  const [activeTab, setActiveTab] = useState('groups')

  if (loading) return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <p className="font-heading text-[11px] tracking-[0.3em] uppercase text-[#5a4920] animate-pulse">
        Cargando expediente de torneo…
      </p>
    </main>
  )

  if (error || !tournament) return (
    <main className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="border border-[#5c1010] bg-[#1a0c0c] px-8 py-6 text-center max-w-md">
        <p className="font-heading text-sm tracking-[0.1em] uppercase text-[#cc4444] mb-2">
          Expediente no encontrado
        </p>
        <p className="font-body text-sm text-[#7a6848]">
          El torneo con ID "{id}" no existe en los archivos.
        </p>
      </div>
    </main>
  )

  const statusInfo = STATUS_LABELS[tournament.status] ?? STATUS_LABELS.upcoming

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Tournament header */}
        <div className="text-center mb-10 pt-8">
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#5a4920] mb-3">
            ✦ Expediente de Torneo ✦
          </p>
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1
              className="font-heading text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#c9a84c]"
              style={{ textShadow: '0 0 24px rgba(201,168,76,0.25)' }}
            >
              {tournament.name}
            </h1>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>
          {tournament.date && (
            <p className="font-body text-sm text-[#7a6848]">{tournament.date}</p>
          )}
          <div
            className="mx-auto w-48 h-px mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #8a6f2e, transparent)' }}
          />
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-[#3a2d10] mb-8 scrollbar-hide">
          {TABS.map(({ id: tabId, label, icon }) => (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={[
                'flex items-center gap-2 px-5 py-3 shrink-0',
                'font-heading text-xs tracking-[0.2em] uppercase',
                'transition-all duration-200 relative',
                activeTab === tabId
                  ? 'text-[#c9a84c]'
                  : 'text-[#5a4920] hover:text-[#8a6f2e]',
              ].join(' ')}
            >
              <span className="text-sm">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
              {activeTab === tabId && (
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
          {activeTab === 'lists'         && <ListUpload tournament={tournament} />}
          {activeTab === 'groups'        && <Groups groups={tournament.groups} />}
          {activeTab === 'qualification' && <QualificationMatches matches={tournament.qualificationMatches} />}
          {activeTab === 'finals'        && <FinalMatches matches={tournament.finalMatches} />}
        </div>

      </div>
    </main>
  )
}
