import SectionTitle from '../components/SectionTitle'

export default function ResumePage({ data }) {
  return (
    <section>
      <SectionTitle overline={data.overline} title={data.title} subtitle={data.subtitle} />
      <div className="rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/10 via-transparent to-transparent p-8">
        <p className="mb-6 max-w-2xl text-white/75">{data.description}</p>
        <a className="btn-primary" href={`${import.meta.env.BASE_URL}resume.pdf`} download>
          {data.downloadLabel}
        </a>
      </div>
    </section>
  )
}
