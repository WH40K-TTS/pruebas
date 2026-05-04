/**
 * Table — tabla accesible con diseño Premium Dark, caption y scope.
 */
export default function Table({ caption, columns, rows, onRowClick, className = '' }) {
  return (
    <div className="border border-border">
      <table className="w-full text-sm">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead className="bg-surfaceSoft text-primary uppercase text-xs tracking-wider">
          <tr className="border-b border-border hover:bg-surfaceSoft">
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
               className="border-b border-border hover:bg-surfaceSoft"
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
            <tr className="border-b border-border hover:bg-surfaceSoft">
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