import HudSection from '../components/layout/HudSection'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/portfolioData'

const FEATURED_PROJECT_ID = 'p-03'
export default function ProjectsSection() {
  const featured = projects.find(project => project.id === FEATURED_PROJECT_ID)
  const others = projects.filter(project => project.id !== FEATURED_PROJECT_ID)
  const visibleProjects = others.slice(0, 4)
  const hiddenProjects = others.slice(4)
  return (
    <HudSection id="projects" kicker="Trabajo seleccionado" title="Proyectos destacados" subtitle="Aplicaciones para la gestión de salud, el soporte técnico y el seguimiento de servicios.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured && <div className="md:col-span-2"><ProjectCard project={featured} /></div>}
        {visibleProjects.map(project => <ProjectCard key={project.id} project={project} compact />)}
      </div>
      {hiddenProjects.length > 0 && <details className="other-projects">
        <summary>Más proyectos <span className="text-sm font-normal">· {hiddenProjects.length} trabajos</span></summary>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hiddenProjects.map(project => <ProjectCard key={project.id} project={project} compact />)}
        </div>
      </details>}
    </HudSection>
  )
}
