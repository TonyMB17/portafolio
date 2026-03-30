import HudSection from '../components/layout/HudSection'
import { aboutLog } from '../data/portfolioData'

function AboutSection() {
  return (
    <HudSection
      id="about"
      kicker="Terminal Log"
      title="Sobre mi"
      subtitle="Resumen profesional en formato consola."
    >
      <div className="relative rounded-xl border border-[color:var(--hud-border)] bg-black/35 p-4 text-sm leading-relaxed text-[color:var(--hud-neon)] md:p-5">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/70 to-transparent" />
        {aboutLog.map((line) => (
          <p key={line}>&gt; {line}</p>
        ))}
      </div>
    </HudSection>
  )
}

export default AboutSection
