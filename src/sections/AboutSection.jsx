import { motion } from 'framer-motion'
import { Bot, Cpu, Radar, Rocket, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import HudSection from '../components/layout/HudSection'
import { aboutLog, profile } from '../data/portfolioData'

const ABOUT_CARDS = [
  {
    id: 'focus',
    label: 'FOCUS',
    value: 'Web Apps de alto impacto',
    icon: Rocket,
  },
  {
    id: 'stack',
    label: 'STACK',
    value: 'Frontend + Backend + Datos',
    icon: Cpu,
  },
  {
    id: 'automation',
    label: 'AUTOMATION',
    value: 'Bots, scripts y procesos',
    icon: Bot,
  },
]

const cardMotion = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

function highlightText(text, terms = []) {
  if (!text || !terms.length) return text

  const escapedTerms = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  return text.split(regex).map((part, index) => {
    const isHighlighted = terms.some((term) => term.toLowerCase() === part.toLowerCase())

    return isHighlighted ? (
      <span key={`${part}-${index}`} className="font-semibold text-white">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  })
}

function AboutSection() {
  const summaryTerms = ['aplicaciones web eficientes', 'escalables', 'frontend', 'backend', 'automatización']
  const logTerms = ['activo', 'fullstack developer', 'arquitectura escalable', 'diseño centrado en el usuario', 'alto impacto']

  return (
    <HudSection
      id="about"
      kicker="Service Record"
      title="Combat Profile"
      subtitle="Resumen visual del perfil, capacidades clave y enfoque profesional."
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_320px]">
        <motion.article
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="neon-card neon-card-medium p-4 md:p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--hud-electric)]/85">Operator Overview</div>
              <h3 className="mt-1 bg-gradient-to-r from-[color:var(--hud-neon)] via-white to-[color:var(--hud-electric)] bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {profile.name}
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[color:var(--hud-neon)]/35 bg-[color:var(--hud-neon)]/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--hud-neon)]">
                <ShieldCheck className="h-4 w-4" />
                {profile.role}
              </div>
            </div>

            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--hud-neon)]/55 bg-[color:var(--hud-neon)]/10 text-[color:var(--hud-neon)] shadow-[0_0_22px_rgba(95,255,199,0.3)]">
              <UserRound className="h-6 w-6" />
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--hud-text)]/86 md:text-[15px]">
            {highlightText(profile.summary, summaryTerms)}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.quickStats.map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-[color:var(--hud-border-strong)]/35 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_12px_rgba(37,166,255,0.12)]"
              >
                {stat}
              </span>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-[color:var(--hud-border)]/45 bg-black/20 p-3.5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--hud-electric)]/45 bg-[color:var(--hud-electric)]/10 text-[color:var(--hud-electric)] shadow-[0_0_16px_rgba(37,166,255,0.18)]">
                  <Radar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hud-electric)]">Tactical Log</div>
                  <p className="text-xs text-[color:var(--hud-text)]/70">Puntos clave del perfil.</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--hud-neon)]/45 bg-[color:var(--hud-neon)]/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--hud-neon)]">
                <Sparkles className="h-4 w-4" />
                Active
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              {aboutLog.map((line, index) => {
                const [label, ...rest] = line.split(':')
                const value = rest.join(':').trim()

                return (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-2.5 rounded-xl border border-[color:var(--hud-border)]/40 bg-black/30 p-2.5"
                  >
                    <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[color:var(--hud-neon)]/35 bg-[color:var(--hud-neon)]/10 text-[color:var(--hud-neon)]">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[color:var(--hud-electric)]/80">{label}</p>
                      <p className="mt-0.5 text-sm leading-5 text-[color:var(--hud-text)]/86">
                        {highlightText(value, logTerms)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.article>

        <div className="grid gap-2.5 sm:grid-cols-3 xl:grid-cols-1">
          {ABOUT_CARDS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={cardMotion}
                whileHover={{ y: -3, scale: 1.01 }}
                className="group neon-card neon-card-soft rounded-2xl p-3.5"
              >
                <div className="mb-2.5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--hud-neon)]/45 bg-[color:var(--hud-electric)]/10 text-[color:var(--hud-electric)] shadow-[0_0_18px_rgba(37,166,255,0.22)] transition group-hover:border-[color:var(--hud-neon)]/70 group-hover:text-[color:var(--hud-neon)] group-hover:shadow-[0_0_24px_rgba(95,255,199,0.28)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--hud-text)]/60">{item.label}</div>
                <p className="mt-1 text-sm font-semibold leading-snug text-white/90">{item.value}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </HudSection>
  )
}

export default AboutSection
