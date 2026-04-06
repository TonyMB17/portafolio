import { motion } from 'framer-motion'
import { BarChart3, CalendarDays, Cpu, GitBranch, Layers3, Smartphone } from 'lucide-react'
import { useRef } from 'react'
import {
  SiBootstrap,
  SiFastapi,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import useSound from 'use-sound'

/* Brand colors for each technology */
const STACK_COLOR = {
  React:       { bg: 'rgba(97,218,251,0.12)',  text: '#61DAFB', border: 'rgba(97,218,251,0.45)' },
  TypeScript:  { bg: 'rgba(49,120,198,0.12)',  text: '#60a5fa', border: 'rgba(49,120,198,0.45)' },
  JavaScript:  { bg: 'rgba(247,223,30,0.12)',  text: '#F7DF1E', border: 'rgba(247,223,30,0.45)' },
  Laravel:     { bg: 'rgba(255,45,32,0.12)',   text: '#ff6b5b', border: 'rgba(255,45,32,0.45)'  },
  MySQL:       { bg: 'rgba(0,191,255,0.10)',   text: '#00BFFF', border: 'rgba(0,191,255,0.40)'  },
  Python:      { bg: 'rgba(94,168,216,0.12)',  text: '#5ea8d8', border: 'rgba(94,168,216,0.45)' },
  Bootstrap:   { bg: 'rgba(124,58,237,0.12)',  text: '#a78bfa', border: 'rgba(124,58,237,0.45)' },
  Tailwind:    { bg: 'rgba(6,182,212,0.12)',   text: '#22d3ee', border: 'rgba(6,182,212,0.45)'  },
  Vite:        { bg: 'rgba(255,208,0,0.12)',   text: '#FFD000', border: 'rgba(255,208,0,0.45)'  },
  HTML:        { bg: 'rgba(227,79,38,0.12)',   text: '#f97316', border: 'rgba(227,79,38,0.45)'  },
  CSS:         { bg: 'rgba(21,114,182,0.12)',  text: '#38bdf8', border: 'rgba(21,114,182,0.45)' },
  fastAPI:     { bg: 'rgba(0,150,136,0.12)',   text: '#4DB6AC', border: 'rgba(0,150,136,0.45)'  },
  Ionic:       { bg: 'rgba(56,128,255,0.12)',  text: '#60a5fa', border: 'rgba(56,128,255,0.45)' },
  Capacitor:   { bg: 'rgba(17,158,255,0.12)',  text: '#7dd3fc', border: 'rgba(17,158,255,0.45)' },
  Recharts:    { bg: 'rgba(255,99,132,0.12)',  text: '#f87171', border: 'rgba(255,99,132,0.45)' },
}
const DEFAULT_TAG = { bg: 'rgba(95,255,199,0.10)', text: '#5fffc7', border: 'rgba(95,255,199,0.40)' }
const STACK_ICON = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  Python: SiPython,
  Bootstrap: SiBootstrap,
  Tailwind: SiTailwindcss,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: Layers3,
  fastAPI: SiFastapi,
  Ionic: SiIonic,
  Recharts: BarChart3,
  Capacitor: Smartphone,
}

function StackTag({ tech, compactIcon = false }) {
  const c = STACK_COLOR[tech] ?? DEFAULT_TAG
  const Icon = STACK_ICON[tech] ?? Cpu

  return (
    <li
      className={`inline-flex items-center justify-center rounded-xl border text-[10px] font-bold uppercase tracking-[0.12em] transition hover:-translate-y-0.5 hover:scale-105 ${compactIcon ? 'h-9 w-9 md:h-10 md:w-10' : 'h-11 w-11 md:h-12 md:w-12'}`}
      style={{ background: c.bg, color: c.text, borderColor: c.border, boxShadow: '0 0 14px rgba(37,166,255,0.10)' }}
      title={tech}
      aria-label={tech}
    >
      <Icon className={compactIcon ? 'h-4.5 w-4.5 md:h-5 md:w-5' : 'h-5.5 w-5.5 md:h-6 md:w-6'} />
    </li>
  )
}

function ProjectCard({ project, compact = false }) {
  const resolveAssetPath = (path, fallback = 'images/no-image.jpg') => {
    const assetPath = path ?? fallback

    if (/^(https?:)?\/\//.test(assetPath) || assetPath.startsWith('data:')) {
      return assetPath
    }

    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`
  }

  const fallbackImage = resolveAssetPath('images/no-image.jpg')
  const [playHum] = useSound(resolveAssetPath('sounds/hum.wav'), { volume: 0.22 })
  const lastHoverAt = useRef(0)
  const imgSrc = resolveAssetPath(project.imageUrl)
  const projectStatus = project.status ?? 'ACTIVE'
  const missionObjective = project.objective ?? project.description
  const missionImpact = project.impact ?? 'En mejora continua con foco en impacto real.'
  const hasLiveDemo = typeof project.demoUrl === 'string' && project.demoUrl.trim() !== '' && project.demoUrl !== '#'

  const concise = (text) => {
    if (!text) return ''
    const normalized = text.trim()
    const limit = compact ? 48 : 64
    if (normalized.length <= limit) return normalized
    return `${normalized.slice(0, limit - 3).trimEnd()}...`
  }

  return (
    <motion.article
      data-lock-target="project"
      className={`neon-card neon-card-soft group flex h-full flex-col ${compact ? 'opacity-90 hover:opacity-100' : ''}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{
        clipPath:
          'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
      }}
      onMouseEnter={() => {
        const now = Date.now()
        if (now - lastHoverAt.current > 180) {
          playHum()
          lastHoverAt.current = now
        }
      }}
    >
      {/* Top neon gradient bar */}
      <div className="absolute left-0 top-0 z-10 h-[2px] w-full bg-gradient-to-r from-[color:var(--hud-neon)] via-[color:var(--hud-electric)] to-[color:var(--hud-purple)] opacity-80 transition duration-300 group-hover:opacity-100" />

      {/* Project image */}
      <div className={`relative shrink-0 overflow-hidden rounded-t-2xl bg-black/70 ${compact ? 'h-44 md:h-48' : 'h-52 md:h-56'}`}>
        <img
          src={imgSrc}
          alt={project.title}
          className="h-full w-full object-cover object-center brightness-75 saturate-110 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = fallbackImage }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[color:var(--hud-electric)]/0 mix-blend-overlay transition-all duration-300 group-hover:bg-[color:var(--hud-electric)]/10" />

        <div className="absolute right-2 top-2 flex items-center gap-1.5">
          <span className="rounded border border-[color:var(--hud-neon)]/45 bg-black/75 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[color:var(--hud-neon)] backdrop-blur-sm">
            {projectStatus}
          </span>
          <span className="rounded border border-[color:var(--hud-electric)]/60 bg-black/75 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--hud-electric)] backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((item) => (
              <StackTag key={`${project.id}-media-${item}`} tech={item} compactIcon />
            ))}
          </ul>
        </div>

        <motion.div
          className="pointer-events-none absolute left-0 z-10 h-8 w-full"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(95,255,199,0.10), transparent)' }}
          initial={{ top: '-15%' }}
          animate={{ top: '130%' }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', repeatDelay: 3.5 }}
        />
      </div>

      {/* Card body */}
      <div className={`relative z-10 flex flex-1 flex-col ${compact ? 'gap-2.5 p-3.5' : 'gap-3.5 p-4.5'}`}>
        <div>
          <h3 className={`${compact ? 'text-base' : 'text-lg'} font-bold text-[color:var(--hud-title)] transition-colors duration-200 group-hover:text-[color:var(--hud-neon)]`}>
            {project.title}
          </h3>
          <p
            className={`${compact ? 'mt-1 text-[12.5px]' : 'mt-1.5 text-[13.5px]'} leading-relaxed text-[color:var(--hud-text)]/82`}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        <motion.div
          className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--hud-border)]/45 bg-black/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[color:var(--hud-electric)]/90"
          animate={{ opacity: [0.78, 1, 0.78] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        >
          <CalendarDays className="h-3.5 w-3.5" />
          Updated {project.year}
        </motion.div>

        {/* Action buttons */}
        <div className="mt-auto flex gap-2 pt-2">
          <motion.a
            className={`neon-btn neon-btn-electric flex items-center justify-center gap-1.5 px-3 py-2 text-xs ${compact ? 'w-full' : 'flex-1'}`}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.95 }}
          >
            <GitBranch className="h-3.5 w-3.5" />
            Repo
          </motion.a>
        </div>
      </div>

      {/* Ambient glow on entire card hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 35px rgba(77,238,254,0.18), 0 0 44px rgba(77,238,254,0.4)' }}
      />
    </motion.article>
  )
}

export default ProjectCard

