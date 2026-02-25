export default function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-mint/80">{overline}</p>
      <h1 className="text-3xl font-light leading-tight sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-3xl text-white/70">{subtitle}</p>}
    </div>
  )
}
