import { Link } from 'react-router-dom'

const profilePhoto = `${import.meta.env.BASE_URL}photo.jpg`
const resumePdf = `${import.meta.env.BASE_URL}resume.pdf`

export default function HomePage({ data, nav }) {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-slide-up space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-mint/80">{data.overline}</p>
          <h1 className="text-4xl font-light leading-tight sm:text-5xl">{data.title}</h1>
          <p className="max-w-2xl text-lg text-white/70">{data.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://t.me/stanislav_begun" target="_blank" rel="noreferrer" className="btn-primary">
              {data.telegramCta || 'Написать в Telegram'}
            </a>
            <Link to="/cases" className="btn-secondary">
              {data.casesCta || 'Посмотреть кейсы'}
            </Link>
            <a href={resumePdf} target="_blank" rel="noreferrer" className="btn-secondary">
              {nav.resume}
            </a>
          </div>
          <div className="grid max-w-xl grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
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
            src={profilePhoto}
            alt={data.photoAlt}
            className="relative w-full rounded-[2rem] border border-mint/30 object-cover shadow-card"
          />
        </div>
      </section>

      {data.usefulIf && (
        <section className="rounded-3xl border border-mint/30 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-light text-mint">{data.usefulIf.title}</h2>
          <ul className="grid gap-3 text-white/80 md:grid-cols-2">
            {data.usefulIf.items.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
