import { Link, useParams } from 'react-router-dom'

const sections = [
  'rolePeriod',
  'keyMetrics',
  'situation',
  'task',
  'action',
  'experiments',
  'result',
  'unitEconomics',
  'learnings',
  'transfer'
]

function renderSectionContent(content) {
  if (Array.isArray(content)) {
    return (
      <ul className="space-y-2 text-white/75">
        {content.map((item) => (
          <li key={item} className="list-inside list-disc">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (content && typeof content === 'object') {
    if (content.type === 'table') {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-white/80">
            <thead>
              <tr>
                {content.headers.map((header) => (
                  <th key={header} className="border-b border-white/20 px-3 py-2 text-mint">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell) => (
                    <td key={cell} className="border-b border-white/10 px-3 py-2 align-top">
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

    if (content.title && content.items) {
      return (
        <div className="space-y-2 text-white/75">
          <p className="text-sm text-mint">{content.title}</p>
          <ul className="space-y-2">
            {content.items.map((item) => (
              <li key={item} className="list-inside list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  return <p className="text-white/75 whitespace-pre-line">{content}</p>
}

export default function CaseDetailPage({ data }) {
  const { caseId } = useParams()
  const currentCase = data.items.find((item) => item.id === caseId)

  if (!currentCase) {
    return <p>Case not found.</p>
  }

  return (
    <section>
      <Link className="mb-6 inline-flex text-sm text-mint" to="/cases">
        ← {data.backToCases}
      </Link>
      <h1 className="mb-3 text-4xl font-light">{currentCase.title}</h1>
      <p className="mb-10 max-w-3xl text-white/70">{currentCase.summary}</p>
      <div className="space-y-5">
        {sections.map((sectionKey) => (
          <article key={sectionKey} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h2 className="mb-2 text-lg text-mint">{data.labels[sectionKey]}</h2>
            {renderSectionContent(currentCase.details[sectionKey])}
          </article>
        ))}
      </div>
    </section>
  )
}
