import SectionTitle from '../components/SectionTitle'

export default function ContactsPage({ data }) {
  return (
    <section>
      <SectionTitle overline={data.overline} title={data.title} subtitle={data.subtitle} />
      <div className="grid gap-4 md:grid-cols-3">
        {data.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-mint/60"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-mint/80">{item.label}</p>
            <p className="text-white/80 group-hover:text-white">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
