import React from 'react'

export function Table({ caption, headers, children, className = '' }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        {caption && (
          <caption className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#8a6f2e] pb-3 text-left">
            {caption}
          </caption>
        )}
        {headers && (
          <thead>
            <tr className="border-b-2 border-[#3a2d10]">
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`
                    px-4 py-3 font-heading text-[11px] tracking-[0.25em] uppercase
                    text-[#8a6f2e] font-normal
                    ${i === 0 ? 'text-left' : 'text-center'}
                    whitespace-nowrap
                  `}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export function Tr({ children, highlight, className = '', ...props }) {
  return (
    <tr
      className={[
        'border-b border-[#1e1a0d]',
        'transition-colors duration-150',
        highlight
          ? 'bg-[#1e1a0d]'
          : 'hover:bg-[#1a1610]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </tr>
  )
}

export function Td({ children, bold, gold, crimson, center, className = '', ...props }) {
  return (
    <td
      className={[
        'px-4 py-3 font-body text-base',
        center ? 'text-center' : '',
        bold ? 'font-semibold' : '',
        gold ? 'text-[#c9a84c]' : crimson ? 'text-[#cc4444]' : 'text-[#c4b48c]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </td>
  )
}

export default Table
