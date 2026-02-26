import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

function splitMetric(metric) {
  const [label, ...rest] = metric.split(':')
  if (!rest.length) {
    return { label: 'Метрика', value: metric }
  }

  return { label: label.trim(), value: rest.join(':').trim() }
}

export default function CasesPage({ data }) {
  return (
    <section>
      <SectionTitle overline={data.overline} title={data.title} subtitle={data.subtitle} />
      <div className="grid gap-6 md:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={item.id}
            className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/60 hover:shadow-glow"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-mint/80">{item.period}</p>
            <h3 className="mb-3 text-2xl font-light">{item.title}</h3>
            <p className="mb-6 text-white/70">{item.summary}</p>
            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {item.metrics.map((metric) => {
                const normalized = splitMetric(metric)

                return (
                  <article key={metric} className="rounded-xl border border-mint/30 bg-mint/5 p-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-mint/80">{normalized.label}</p>
                    <p className="mt-1 text-sm text-white/90">{normalized.value}</p>
                  </article>
                )
              })}
            </div>
            <Link to={`/cases/${item.id}`} className="btn-secondary inline-flex">
              {data.caseCta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
