export default function SectionTitle({ id, kicker, title, subtitle }) {
  return (
    <header className="space-y-3">
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 id={id} className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base leading-relaxed text-[color:var(--hud-text)]">{subtitle}</p>}
    </header>
  )
}
