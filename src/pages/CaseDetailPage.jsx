import { Link, useParams } from 'react-router-dom'

const sections = ['rolePeriod', 'keyMetrics', 'situation', 'task', 'action', 'result', 'learnings', 'transfer']

function TableBlock({ table }) {
  if (!table) return null

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/[0.04] text-left text-mint">
          <tr>
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-3 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, idx) => (
            <tr key={`${idx}-${row[0]}`} className="border-t border-white/10">
              {row.map((cell) => (
                <td key={`${idx}-${cell}`} className="px-4 py-3 text-white/80 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderValue(value) {
  if (!value) return null
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc space-y-2 pl-5 text-white/80">
        {value.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    )
  }
  return <p className="text-white/75">{value}</p>
}

export default function CaseDetailPage({ data }) {
  const { caseId } = useParams()
  const currentCase = data.items.find((item) => item.id === caseId)

  if (!currentCase) return <p>Case not found.</p>

  return (
    <section>
      <Link className="mb-6 inline-flex text-sm text-mint" to="/cases">
        ← {data.backToCases}
      </Link>
      <h1 className="mb-3 text-4xl font-light">{currentCase.title}</h1>
      <p className="mb-8 max-w-3xl text-white/70">{currentCase.summary}</p>

      {(currentCase.cardMetrics || []).length > 0 && (
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currentCase.cardMetrics.map((metric) => (
            <article key={`${metric.label}-${metric.value}`} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-white/55">{metric.label}</p>
              <p className="mt-1 text-lg text-mint">{metric.value}</p>
            </article>
          ))}
        </div>
      )}

      <div className="space-y-5">
        {sections.map((sectionKey) =>
          currentCase.details?.[sectionKey] ? (
            <article key={sectionKey} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="mb-3 text-lg text-mint">{data.labels[sectionKey]}</h2>
              {renderValue(currentCase.details[sectionKey])}
            </article>
          ) : null
        )}

        {currentCase.details?.comparisonTable && (
          <article className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h2 className="text-lg text-mint">{currentCase.details.comparisonTable.title}</h2>
            <TableBlock table={currentCase.details.comparisonTable} />
          </article>
        )}

        {currentCase.details?.experiments?.rows && (
          <article className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h2 className="text-lg text-mint">{data.labels.experiments}</h2>
            <TableBlock table={currentCase.details.experiments} />
          </article>
        )}

        {currentCase.details?.unitEconomics?.rows && (
          <article className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h2 className="text-lg text-mint">{data.labels.unitEconomics}</h2>
            <TableBlock table={currentCase.details.unitEconomics} />
          </article>
        )}
      </div>
    </section>
  )
}
