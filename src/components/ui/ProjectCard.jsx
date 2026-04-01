import { motion } from 'framer-motion'
import { CalendarDays, ExternalLink, GitBranch, Layers3, Sparkles, Target } from 'lucide-react'
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
  fastAPI: SiFastapi,
  Ionic: SiIonic,
}

function StackTag({ tech }) {
  const c = STACK_COLOR[tech] ?? DEFAULT_TAG
  const Icon = STACK_ICON[tech]
  return (
    <li
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] font-bold transition hover:scale-105"
      style={{ background: c.bg, color: c.text }}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {tech}
    </li>
  )
}

function ProjectCard({ project, compact = false, featured = false }) {
  const [playHum] = useSound('/sounds/hum.wav', { volume: 0.22 })
  const lastHoverAt = useRef(0)
  const imgSrc = project.imageUrl ?? '/images/no-image.jpg'
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
      whileHover={{ y: compact ? -4 : -7, scale: compact ? 1.01 : 1.02 }}
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
      <div className={`relative shrink-0 overflow-hidden rounded-t-2xl bg-black/70 ${compact ? 'h-32' : 'h-44'}`}>
        <img
          src={imgSrc}
          alt={project.title}
          className="h-full w-full object-cover brightness-75 saturate-110 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = '/images/no-image.jpg' }}
        />
        {/* Gradient overlay — darkens bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        {/* Color tint on hover */}
        <div className="absolute inset-0 bg-[color:var(--hud-electric)]/0 mix-blend-overlay transition-all duration-300 group-hover:bg-[color:var(--hud-electric)]/10" />

        {/* Year badge */}
        <div className="absolute right-2 top-2 flex items-center gap-1.5">
          {featured ? (
            <span className="rounded border border-[color:var(--hud-amber)]/65 bg-[color:var(--hud-amber)]/16 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[color:var(--hud-amber)]">
              Featured
            </span>
          ) : null}
          <span className="rounded border border-[color:var(--hud-neon)]/45 bg-black/75 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[color:var(--hud-neon)] backdrop-blur-sm">
            {projectStatus}
          </span>
          <span className="rounded border border-[color:var(--hud-electric)]/60 bg-black/75 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--hud-electric)] backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 rounded-md border border-[color:var(--hud-border)]/45 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-[color:var(--hud-neon)]">
          <Layers3 className="h-3.5 w-3.5" />
          {project.stack.length} techs
        </div>

        {/* Scanline sweep over image */}
        <motion.div
          className="pointer-events-none absolute left-0 z-10 h-8 w-full"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(95,255,199,0.10), transparent)' }}
          initial={{ top: '-15%' }}
          animate={{ top: '130%' }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'linear', repeatDelay: 3.5 }}
        />
      </div>

      {/* Card body */}
      <div className={`relative z-10 flex flex-1 flex-col ${compact ? 'gap-2 p-3' : 'gap-3 p-4'}`}>
        <div>
          <h3 className={`${compact ? 'text-[15px]' : 'text-base'} font-bold text-[color:var(--hud-title)] transition-colors duration-200 group-hover:text-[color:var(--hud-neon)]`}>
            {project.title}
          </h3>
          <p
            className={`${compact ? 'mt-1 text-[12px]' : 'mt-1.5 text-[13px]'} leading-relaxed text-[color:var(--hud-text)]/80`}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: compact ? 1 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        {!compact ? (
          <div className="space-y-2 rounded-xl bg-black/20 p-2.5">
            <div className="flex items-start gap-2 rounded-lg bg-[color:var(--hud-electric)]/8 px-2 py-1.5">
              <Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--hud-electric)]" />
              <p className="text-[11px] leading-relaxed text-[color:var(--hud-text)]/88">{concise(missionObjective)}</p>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-[color:var(--hud-neon)]/9 px-2 py-1.5">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--hud-neon)]" />
              <p className="text-[11px] leading-relaxed text-[color:var(--hud-text)]/88">{concise(missionImpact)}</p>
            </div>
          </div>
        ) : null}

        <motion.div
          className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--hud-border)]/45 bg-black/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[color:var(--hud-electric)]/90"
          animate={{ opacity: [0.78, 1, 0.78] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        >
          <CalendarDays className="h-3.5 w-3.5" />
          Updated {project.year}
        </motion.div>

        <ul className="flex flex-wrap gap-1.5">
          {(compact ? project.stack.slice(0, 4) : project.stack).map((item) => (
            <StackTag key={`${project.id}-${item}`} tech={item} />
          ))}
          {compact && project.stack.length > 4 ? (
            <li className="inline-flex items-center rounded-full bg-black/25 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[color:var(--hud-text)]/70">
              +{project.stack.length - 4}
            </li>
          ) : null}
        </ul>

        {/* Action buttons */}
        <div className="mt-auto flex gap-2 pt-2">
          {!compact ? (
            hasLiveDemo ? (
              <motion.a
                className="neon-btn flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-xs"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </motion.a>
            ) : (
              <div className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-black/25 px-3 py-2 text-xs uppercase tracking-[0.15em] text-[color:var(--hud-text)]/55">
                <ExternalLink className="h-3.5 w-3.5" />
                Private Demo
              </div>
            )
          ) : null}
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

