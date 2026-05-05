import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function RuleSection({ section, index }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border border-[#3a2d10] bg-[#161209] mb-4 overflow-hidden">

      {/* Section header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#5a4920]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-[#c9a84c] group-hover:text-[#e8c96a] transition-colors">
            {section.title}
          </h3>
        </div>
        <ChevronDown
          size={16}
          className={`text-[#5a4920] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Rules list */}
      {open && (
        <div className="border-t border-[#2a2210] px-5 py-4 animate-fade-in">
          <ul className="space-y-3">
            {section.rules.map((rule, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="font-heading text-[10px] text-[#5a4920] mt-1 shrink-0 tracking-widest"
                >
                  ✦
                </span>
                <p className="font-body text-base text-[#c4b48c] leading-relaxed">
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RuleSection
