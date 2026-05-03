/**
 * Table — tabla accesible con diseño Premium Dark, caption y scope.
 */
export default function Table({ caption, columns, rows, onRowClick, className = '' }) {
  return (
    <div className={`w-full overflow-x-auto rounded-2xl border border-white/10 glass-panel ${className}`}>
      <table className="w-full text-sm">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="border-b border-white/10 bg-brand-deep/50">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={[
                  'px-4 py-3 text-left font-display font-semibold text-slate-400',
                  'tracking-wider uppercase text-xs',
                  col.className ?? '',
                ].join(' ')}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.id ?? idx}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={[
                'border-b border-white/5 transition-colors duration-200',
                onRowClick ? 'cursor-pointer hover:bg-brand-accent/10' : '',
                idx % 2 === 0 ? 'bg-transparent' : 'bg-brand-deep/20',
              ].join(' ')}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={['px-4 py-3 text-slate-200', col.cellClassName ?? ''].join(' ')}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-slate-500 font-body"
              >
                Sin datos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}