import HudSection from '../components/layout/HudSection'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'
import { projects } from '../data/portfolioData'

function ProjectsSection() {
  return (
    <HudSection
      id="projects"
      kicker="Mission Archive"
      title="Proyectos"
      subtitle="Cards interactivas con stack y contexto de negocio."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={120 + index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </HudSection>
  )
}

export default ProjectsSection
