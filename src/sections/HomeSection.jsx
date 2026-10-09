import { ArrowDown, ArrowUpRight } from 'lucide-react'
import useSectionEntrance from '../hooks/useSectionEntrance'
import TypingIntro from '../components/ui/TypingIntro'
import { profile } from '../data/portfolioData'

export default function HomeSection() {
  const ref = useSectionEntrance()
  return (
    <section ref={ref} id="home" aria-labelledby="home-title" className="hero-panel hud-shell section-reveal">
      <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-6">
          <p className="section-kicker">Desarrollo web · Datos · Automatización</p>
          <div className="border-l-4 border-halo-visor pl-5">
            <h1 id="home-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Anthony <span className="text-halo-plasma">MB</span></h1>
            <p className="mt-4 text-xl font-medium text-white md:text-2xl">{profile.role}</p>
          </div>
          <TypingIntro />
          <p className="max-w-xl text-lg leading-relaxed text-[color:var(--hud-text)]">{profile.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">Ver proyectos <ArrowDown size={18} aria-hidden="true" /></a>
            <a href="#contact" className="secondary-button">Contactar</a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="secondary-button">Ver LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="portrait-frame mx-auto w-full max-w-sm">
          <img src={`${import.meta.env.BASE_URL}images/my-image.webp`} alt="Ilustración de Anthony en su espacio de desarrollo" width="640" height="640" fetchPriority="high" className="aspect-square w-full object-cover" />
          <figcaption className="border-t border-halo-plasma/20 bg-black/40 px-5 py-4 text-sm text-[color:var(--hud-text)]">Aplicaciones web y soluciones para procesos reales.</figcaption>
        </figure>
      </div>
    </section>
  )
}
