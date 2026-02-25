import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

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
            <div className="mb-6 flex flex-wrap gap-2">
              {item.metrics.map((metric) => (
                <span key={metric} className="rounded-full border border-mint/30 px-3 py-1 text-xs text-mint/90">
                  {metric}
                </span>
              ))}
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
