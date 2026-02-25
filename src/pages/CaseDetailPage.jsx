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
            <p className="text-white/75">{currentCase.details[sectionKey]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
