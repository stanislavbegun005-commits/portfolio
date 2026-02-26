import { Link } from 'react-router-dom'

export default function HomePage({ data, nav }) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="animate-slide-up space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-mint/80">{data.overline}</p>
        <h1 className="text-4xl font-light leading-tight sm:text-5xl">{data.title}</h1>
        <p className="max-w-2xl text-lg text-white/70">{data.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a href="https://t.me/stanislav_begun" className="btn-primary" target="_blank" rel="noreferrer">
            {data.telegramCta ?? data.primaryCta}
          </a>
          <Link to="/cases" className="btn-secondary">{data.casesCta ?? nav.cases}</Link>
          <Link to="/resume" className="btn-secondary">{nav.resume}</Link>
        </div>
        <div className="grid max-w-xl grid-cols-3 gap-4 pt-6">
          {data.stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-2xl text-mint">{item.value}</p>
              <p className="text-sm text-white/65">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="relative animate-fade-in">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-mint/20 to-transparent blur-2xl" />
        <img
          src={`${import.meta.env.BASE_URL}photo.jpg`}
          alt={data.photoAlt}
          className="relative w-full rounded-[2rem] border border-mint/30 object-cover shadow-card"
        />
      </div>
    </section>
  )
}
