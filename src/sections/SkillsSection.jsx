import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import {
  SiBootstrap,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import HudSection from '../components/layout/HudSection'
import SkillBar from '../components/ui/SkillBar'
import {
  backend,
  databases,
  frameworks,
  frontend,
  languages,
  systems,
  tools,
  webFundamentals,
} from '../data/portfolioData'

/* Brand color + glow per framework icon key */
const FRAMEWORK_ICON_MAP = {
  react:     { icon: SiReact,      color: '#61DAFB', glow: 'rgba(97,218,251,0.45)'  },
  laravel:   { icon: SiLaravel,    color: '#FF6B5B', glow: 'rgba(255,45,32,0.45)'   },
  tailwind:  { icon: SiTailwindcss,color: '#22d3ee', glow: 'rgba(6,182,212,0.45)'   },
  bootstrap: { icon: SiBootstrap,  color: '#a78bfa', glow: 'rgba(124,58,237,0.45)'  },
  vite:      { icon: SiVite,       color: '#FFD000', glow: 'rgba(255,208,0,0.45)'   },
}

const SKILL_GROUPS = [
  { title: 'Languages',       items: languages,       accent: '#61DAFB' },
  { title: 'Web Fundamentals',items: webFundamentals, accent: '#f97316' },
  { title: 'Frontend',        items: frontend,        accent: '#22d3ee' },
  { title: 'Backend',         items: backend,         accent: '#FF6B5B' },
  { title: 'Databases',       items: databases,       accent: '#00BFFF' },
  { title: 'Tools',           items: tools,           accent: '#a78bfa' },
  { title: 'Systems',         items: systems,         accent: '#5fffc7' },
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

function FrameworkCard({ tech, index }) {
  const entry = FRAMEWORK_ICON_MAP[tech.iconKey]
  const TechIcon = entry?.icon ?? Cpu
  const color   = entry?.color ?? '#5fffc7'
  const glow    = entry?.glow  ?? 'rgba(95,255,199,0.4)'

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
      className="group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-xl border bg-black/40 p-5 text-center backdrop-blur-sm transition"
      style={{ borderColor: 'rgba(95,255,199,0.22)' }}
    >
      {/* Icon container with brand glow on hover */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-2xl transition-all duration-300 group-hover:scale-110"
        style={{ color }}
      >
        <TechIcon
          className="h-6 w-6 transition-[filter] duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
        />
      </div>

      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--hud-title)]">
        {tech.name}
      </span>

      {/* LVL badge */}
      <span
        className="rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:shadow-[0_0_12px_currentColor]"
        style={{ color, borderColor: `${color}60`, background: `${color}15` }}
      >
        LVL {tech.level}
      </span>

      {/* Bottom accent line that slides in on hover */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rounded-full opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100"
        style={{ background: glow }}
      />
    </motion.div>
  )
}

function SkillGroup({ title, items, accent }) {
  return (
    <div
      className="space-y-3 rounded-xl border bg-black/25 p-4 backdrop-blur-sm"
      style={{ borderColor: 'rgba(95,255,199,0.20)' }}
    >
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
        {title}
      </div>
      <div className="space-y-2.5">
        {items.map((skill) => (
          <SkillBar key={`${title}-${skill.name}`} skill={skill} accent={accent} />
        ))}
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <HudSection
      id="skills"
      kicker="Capability Matrix"
      title="Habilidades"
      subtitle="Mapa real de competencias tecnicas, frameworks y herramientas de trabajo."
    >
      <div className="space-y-8">
        {/* Framework Arsenal */}
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--hud-text)]/60">
            // Framework Arsenal
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {frameworks.map((tech, i) => (
              <FrameworkCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>

        {/* Skill groups */}
        <div className="grid gap-4 lg:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.title} title={group.title} items={group.items} accent={group.accent} />
          ))}
        </div>
      </div>
    </HudSection>
  )
}

export default SkillsSection

