import useCardGlow from '../../hooks/useCardGlow'
import ImagePreview from './ImagePreview'
import { ArrowUpRight, Code2, ImageIcon } from 'lucide-react'

export default function ProjectCard({ project, compact = false }) {
  const card = useCardGlow()
  const hasImage = project.imageUrl && !project.imageUrl.includes('no-image')
  const hasDemo = project.demoUrl && project.demoUrl !== '#'
  const imageUrl = hasImage && (/^https?:/.test(project.imageUrl) ? project.imageUrl : `${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\/+/, '')}`)

  return (
    <article ref={card} className={`project-card neon-card flex h-full flex-col p-5 ${compact ? 'compact-project' : 'featured-project md:grid md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-5'}`}>
      <span className="card-pointer-glow" aria-hidden="true" />
      <span className="project-card-sweep" aria-hidden="true" />
      <span className="hud-corner hud-corner-tl" aria-hidden="true" />
      <span className="hud-corner hud-corner-tr" aria-hidden="true" />
      <span className="hud-corner hud-corner-bl" aria-hidden="true" />
      <span className="hud-corner hud-corner-br" aria-hidden="true" />

      <div className="project-media">
        {hasImage ? (
          <ImagePreview src={imageUrl} alt={project.imageAlt ?? `Vista de ${project.title}`} title={project.title} />
        ) : (
          <div className="project-image-placeholder" aria-label={`Captura pendiente de ${project.title}`}>
            <ImageIcon size={28} aria-hidden="true" />
            {/* <span>Captura próximamente</span> */}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
      {!compact && <p className="section-kicker mb-4">Proyecto destacado</p>}
      <div className="relative z-10 mb-5 flex items-center justify-between text-sm text-[color:var(--hud-text)]">
        <Code2 className="text-halo-plasma" size={24} aria-hidden="true" />
        <span>{project.year}</span>
      </div>

      {project.organization && <p className="relative z-10 mb-2 text-sm text-halo-plasma">{project.organization}</p>}
      <h3 className="relative z-10 text-xl font-semibold leading-snug text-white">{project.title}</h3>
      <p className="relative z-10 mb-5 mt-3 text-base leading-relaxed">{project.description}</p>

      {!compact && project.highlights && (
        <details className="relative z-10 mb-4 text-sm leading-relaxed">
          <summary className="cursor-pointer text-halo-plasma">Ver funcionalidades</summary>
        <ul aria-label={`Funciones de ${project.title}`} className="mt-3 list-disc space-y-2 pl-5">
          {project.highlights.map(item => <li key={item}>{item}</li>)}
        </ul>
        </details>
      )}

      <ul aria-label="Tecnologías utilizadas" className="relative z-10 mb-6 flex flex-wrap gap-2">
        {project.stack.map(tech => <li key={tech} className="tech-tag">{tech === 'fastAPI' ? 'FastAPI' : tech}</li>)}
      </ul>

      <div className="relative z-10 mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-4">
        <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}>
          Ver código <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        {hasDemo && (
          <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Ver proyecto publicado: ${project.title}`}>
            Ver proyecto <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </div>
      </div>
    </article>
  )
}
