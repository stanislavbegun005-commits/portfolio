import SectionTitle from '../components/SectionTitle'

const resumePdf = `${import.meta.env.BASE_URL}resume.pdf`

function ResumeTable({ table }) {
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

export default function ResumePage({ data }) {
  return (
    <section>
      <SectionTitle overline={data.overline} title={data.title} subtitle={data.subtitle} />
      <div className="rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/10 via-transparent to-transparent p-8">
        <p className="mb-6 max-w-2xl text-white/75">{data.description}</p>
        <a className="btn-primary" href={resumePdf} download target="_blank" rel="noreferrer">
          {data.downloadLabel}
        </a>
      </div>

      <div className="mt-8 space-y-5">
        {(data.sections || []).map((section) => (
          <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h2 className="mb-3 text-lg text-mint">{section.title}</h2>
            {section.items && (
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.table && <ResumeTable table={section.table} />}
          </article>
        ))}
      </div>
    </section>
  )
}
