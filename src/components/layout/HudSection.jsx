import useSectionEntrance from '../../hooks/useSectionEntrance'
import SectionTitle from '../ui/SectionTitle'

export default function HudSection({ id, kicker, title, subtitle, children }) {
  const ref = useSectionEntrance()
  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-title`} className="hud-shell section-reveal p-5 md:p-8">
      <div className="space-y-8">
        <SectionTitle id={`${id}-title`} kicker={kicker} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  )
}
