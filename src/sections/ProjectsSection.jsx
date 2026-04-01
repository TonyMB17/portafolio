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
      subtitle="Grid de operaciones con foco en impacto y ejecucion real."
    >
      <div className="grid gap-4 md:grid-cols-2 md:[grid-auto-rows:1fr] xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={120 + index * 90} className="h-full">
            <ProjectCard project={project} featured />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {otherProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={80 + index * 50}
            className="h-full w-full sm:basis-[calc(50%-0.375rem)] sm:shrink-0 sm:grow-0 lg:basis-[calc(25%-0.5625rem)]"
          >
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </HudSection>
  )
}

export default ProjectsSection
