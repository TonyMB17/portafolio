import { motion } from 'framer-motion'
import HudSection from '../components/layout/HudSection'
import { experience } from '../data/portfolioData'

const BADGE_STYLES = {
  LEGENDARY: {
    pill: 'border-yellow-400/60 bg-yellow-400/10 text-yellow-300',
    glow: 'hover:shadow-[0_0_22px_rgba(250,204,21,0.2)]',
    line: 'bg-yellow-400/60',
    dot: 'bg-yellow-300',
  },
  EPIC: {
    pill: 'border-[color:var(--hud-electric)]/60 bg-[color:var(--hud-electric)]/10 text-[color:var(--hud-electric)]',
    glow: 'hover:shadow-[0_0_22px_rgba(37,166,255,0.2)]',
    line: 'bg-[color:var(--hud-electric)]/60',
    dot: 'bg-[color:var(--hud-electric)]',
  },
  RARE: {
    pill: 'border-[color:var(--hud-neon)]/50 bg-[color:var(--hud-neon)]/8 text-[color:var(--hud-neon)]',
    glow: 'hover:shadow-[0_0_22px_rgba(95,255,199,0.18)]',
    line: 'bg-[color:var(--hud-neon)]/50',
    dot: 'bg-[color:var(--hud-neon)]',
  },
}

function ExperienceCard({ exp, index }) {
  const style = BADGE_STYLES[exp.badge] ?? BADGE_STYLES.RARE

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {index < (experience.length - 1) && (
        <div className="absolute left-[11px] top-6 h-full w-px bg-[color:var(--hud-border)]" />
      )}

      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 h-5 w-5 rounded-full border-2 border-[color:var(--hud-bg)] ${style.dot} shadow-[0_0_10px_rgba(95,255,199,0.5)]`} />

      {/* Card */}
      <div
        className={`group relative overflow-hidden rounded-xl border border-[color:var(--hud-border)] bg-black/30 p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--hud-border-strong)] ${style.glow}`}
      >
        {/* Top accent line */}
        <div className={`pointer-events-none absolute left-0 top-0 h-px w-full ${style.line}`} />

        {/* Header */}
        <div className="mb-3 flex flex-wrap items-start gap-2">
          <div className="flex-1 space-y-0.5">
            <h3 className="font-bold text-[color:var(--hud-title)]">{exp.role}</h3>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--hud-electric)]">
              {exp.company} // {exp.period}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className={`rounded border px-2 py-0.5 text-[10px] uppercase tracking-widest ${style.pill}`}>
              {exp.badge}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[color:var(--hud-text)]/60">
              +{exp.xp.toLocaleString()} XP
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-1.5">
          {exp.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-[color:var(--hud-text)]/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--hud-neon)]/60" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ExperienceSection() {
  const totalXP = experience.reduce((sum, exp) => sum + exp.xp, 0)

  return (
    <HudSection
      id="experience"
      kicker="Combat Log"
      title="Experiencia"
      subtitle="Registro de misiones completadas y rango obtenido por operacion."
    >
      {/* XP Total header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center gap-4 rounded-lg border border-[color:var(--hud-border)] bg-black/30 px-4 py-3"
      >
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--hud-text)]/60">
          Total XP acumulado
        </div>
        <div className="ml-auto font-bold text-[color:var(--hud-neon)]">
          {totalXP.toLocaleString()} XP
        </div>
        <div className="h-2 w-24 overflow-hidden rounded-full bg-black/50">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[color:var(--hud-neon)] to-[color:var(--hud-electric)]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </HudSection>
  )
}

export default ExperienceSection
