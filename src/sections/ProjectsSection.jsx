import HudSection from '../components/layout/HudSection'
import ProjectCard from '../components/ui/ProjectCard'
import Reveal from '../components/ui/Reveal'
import { projects } from '../data/portfolioData'

const FEATURED_PROJECT_IDS = ['p-01', 'p-03', 'p-04']

function ProjectsSection() {
  const featuredProjects = projects.filter((project) => FEATURED_PROJECT_IDS.includes(project.id))
  const otherProjects = projects.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id))

  return (
    <HudSection
      id="projects"
      kicker="Tactical Operations"
      title="Mission Maps"
      subtitle="Proyectos presentados como misiones destacadas, con foco visual en impacto y ejecucion real."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={120 + index * 90} className="w-full px-0.5">
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3.5">
        {otherProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={80 + index * 50}
            className="w-full sm:basis-[calc(50%-0.4375rem)] sm:shrink-0 sm:grow-0 xl:basis-[calc(33.333%-0.75rem)]"
          >
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </HudSection>
  )
}

export default ProjectsSection
