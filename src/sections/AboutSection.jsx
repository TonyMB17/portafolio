import { Code2, Database, ShoppingCart, Workflow } from 'lucide-react'
import HudSection from '../components/layout/HudSection'
import useCardGlow from '../hooks/useCardGlow'
import { profile } from '../data/portfolioData'

const AREAS = [
  { title: 'Sistemas de gestión', text: 'Aplicaciones para registrar, organizar y dar seguimiento a incidencias y procesos institucionales.', icon: Code2 },
  { title: 'Salud y análisis de datos', text: 'Herramientas para gestionar información sanitaria y visualizar indicadores.', icon: Database },
  { title: 'Automatización e integraciones', text: 'Scripts, notificaciones y asistentes virtuales para simplificar tareas.', icon: Workflow },
  { title: 'Comercio electrónico', text: 'Catálogos y tiendas virtuales para presentar productos y gestionar pedidos.', icon: ShoppingCart },
]

function AboutCard({ title, text, icon: Icon }) {
  const cardRef = useCardGlow()
  return (
    <article ref={cardRef} className="neon-card relative p-5">
      <span className="card-pointer-glow" aria-hidden="true" />
      <span className="hud-corner hud-corner-tl" aria-hidden="true" />
      <span className="hud-corner hud-corner-br" aria-hidden="true" />
      <Icon className="relative z-10 mb-4 text-halo-plasma" size={28} aria-hidden="true" />
      <h3 className="relative z-10 text-lg font-semibold text-white">{title}</h3>
      <p className="relative z-10 mt-3 text-base leading-relaxed">{text}</p>
    </article>
  )
}

export default function AboutSection() {
  return (
    <HudSection id="about" kicker="Perfil profesional" title="Sobre mí" subtitle={profile.summary}>
      <div className="grid gap-4 md:grid-cols-2">
        {AREAS.map(area => (
          <AboutCard key={area.title} {...area} />
        ))}
      </div>
    </HudSection>
  )
}
