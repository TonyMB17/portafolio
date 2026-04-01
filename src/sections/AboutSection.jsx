import { motion } from 'framer-motion'
import { Bot, Cpu, Radar, Rocket, UserRound } from 'lucide-react'
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

function AboutSection() {
  return (
    <HudSection
      id="about"
      kicker="Service Record"
      title="Combat Profile"
      subtitle="Estadisticas operativas y enfoque tecnico del operador."
    >
      <div className="grid gap-4">
        <motion.article
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="neon-card neon-card-medium p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--hud-electric)]/85">Operator Overview</div>
              <h3 className="mt-1 bg-gradient-to-r from-[color:var(--hud-neon)] to-[color:var(--hud-electric)] bg-clip-text text-lg font-bold text-transparent">
                {profile.name}
              </h3>
            </div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--hud-neon)]/55 bg-[color:var(--hud-neon)]/10 text-[color:var(--hud-neon)] shadow-[0_0_16px_rgba(95,255,199,0.3)]">
              <UserRound className="h-5.5 w-5.5" />
            </div>
          </div>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[color:var(--hud-text)]/82">
            {profile.tagline}
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
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
                  whileHover={{ y: -3 }}
                  className="group rounded-xl border border-[color:var(--hud-border)]/45 bg-black/25 p-3 transition hover:border-[color:var(--hud-border-strong)]"
                >
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--hud-neon)]/45 bg-[color:var(--hud-electric)]/10 text-[color:var(--hud-electric)] shadow-[0_0_16px_rgba(37,166,255,0.2)] transition group-hover:border-[color:var(--hud-neon)]/70 group-hover:bg-[color:var(--hud-neon)]/12 group-hover:text-[color:var(--hud-neon)] group-hover:shadow-[0_0_22px_rgba(95,255,199,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-[color:var(--hud-text)]/55">{item.label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--hud-text)]/85">{item.value}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          className="neon-card neon-card-soft p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hud-electric)] drop-shadow-[0_0_8px_rgba(37,166,255,0.25)]">
              Tactical Log
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--hud-neon)]/45 bg-[color:var(--hud-neon)]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--hud-neon)]">
              <Radar className="h-4.5 w-4.5" />
              Active
            </div>
          </div>

          <div className="space-y-1.5 rounded-xl border border-[color:var(--hud-border)]/45 bg-black/30 p-3 text-sm leading-relaxed text-[color:var(--hud-neon)]/92">
            {aboutLog.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                &gt; {line}
              </motion.p>
            ))}
          </div>
        </motion.article>
      </div>
    </HudSection>
  )
}

export default AboutSection
