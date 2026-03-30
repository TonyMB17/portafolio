import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

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

function StackTag({ tech }) {
  const c = STACK_COLOR[tech] ?? DEFAULT_TAG
  return (
    <li
      className="rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] font-bold transition hover:scale-105"
      style={{ background: c.bg, color: c.text, borderColor: c.border }}
    >
      {tech}
    </li>
  )
}

function ProjectCard({ project }) {
  const imgSrc = project.imageUrl ?? '/images/no-image.jpg'

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-xl border bg-black/50 backdrop-blur-sm"
      style={{ borderColor: 'rgba(95,255,199,0.25)' }}
      whileHover={{ y: -7, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {/* Top neon gradient bar */}
      <div className="absolute left-0 top-0 z-10 h-[2px] w-full bg-gradient-to-r from-[color:var(--hud-neon)] via-[color:var(--hud-electric)] to-[color:var(--hud-purple)] opacity-80 transition duration-300 group-hover:opacity-100" />

      {/* HUD corner brackets */}
      <div className="absolute left-0  top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-[color:var(--hud-neon)]/70" />
      <div className="absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 border-[color:var(--hud-electric)]/70" />
      <div className="absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-[color:var(--hud-electric)]/70" />
      <div className="absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-[color:var(--hud-neon)]/70" />

      {/* Project image */}
      <div className="relative h-40 shrink-0 overflow-hidden bg-black/70">
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
        <span className="absolute right-2 top-2 rounded border border-[color:var(--hud-electric)]/60 bg-black/75 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--hud-electric)] backdrop-blur-sm">
          {project.year}
        </span>

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
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-bold text-[color:var(--hud-title)] transition-colors duration-200 group-hover:text-[color:var(--hud-neon)]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--hud-text)]/80">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <StackTag key={`${project.id}-${item}`} tech={item} />
          ))}
        </ul>

        {/* Action buttons */}
        <div className="mt-auto flex gap-2 pt-2">
          <motion.a
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[color:var(--hud-neon)]/40 bg-[color:var(--hud-neon)]/6 px-3 py-2 text-xs uppercase tracking-[0.15em] text-[color:var(--hud-neon)] transition hover:border-[color:var(--hud-neon)]/80 hover:bg-[color:var(--hud-neon)]/14 hover:shadow-[0_0_18px_rgba(95,255,199,0.25)]"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Demo
          </motion.a>
          <motion.a
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[color:var(--hud-electric)]/40 bg-[color:var(--hud-electric)]/6 px-3 py-2 text-xs uppercase tracking-[0.15em] text-[color:var(--hud-electric)] transition hover:border-[color:var(--hud-electric)]/80 hover:bg-[color:var(--hud-electric)]/14 hover:shadow-[0_0_18px_rgba(37,166,255,0.25)]"
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
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 35px rgba(95,255,199,0.05), 0 0 40px rgba(37,166,255,0.12)' }}
      />
    </motion.article>
  )
}

export default ProjectCard

