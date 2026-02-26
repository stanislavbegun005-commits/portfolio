import SectionTitle from '../components/SectionTitle'

export default function AboutPage({ data }) {
  const photoUrl = `${import.meta.env.BASE_URL}photo.jpg`
  return (
    <section>
      <SectionTitle overline={data.overline} title={data.title} subtitle={data.subtitle} />
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <img src={photoUrl} alt={data.photoAlt} className="w-full rounded-3xl border border-white/10 object-cover" />
        <div className="space-y-5">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-white/75">{paragraph}</p>
          ))}
          <div className="grid gap-4 sm:grid-cols-2">
            {data.focus.map((item) => (
              <article key={item.title} className="rounded-2xl border border-mint/30 bg-mint/5 p-4">
                <h3 className="mb-2 text-mint">{item.title}</h3>
                <p className="text-sm text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
