import { motion } from 'framer-motion'
import { BookOpenText, Cpu, Database, Radar, Sparkles } from 'lucide-react'
import HudSection from '../components/layout/HudSection'

const TERMINALS = [
  {
    id: 't-01',
    icon: BookOpenText,
    title: 'Engineering Notes',
    label: 'Architecture',
    description: 'Bitacora de arquitectura, decisiones de stack y patrones usados en proyectos reales.',
  },
  {
    id: 't-02',
    icon: Database,
    title: 'Data Logs',
    label: 'Data Ops',
    description: 'Apuntes de integracion de datos, calidad de informacion y automatizacion operativa.',
  },
  {
    id: 't-03',
    icon: Cpu,
    title: 'System Debriefs',
    label: 'Systems',
    description: 'Post-mortems tecnicos de implementaciones, mejoras y resultados medibles.',
  },
]

function DataTerminalsSection() {
  return (
    <HudSection
      id="terminals"
      kicker="Data Terminals"
      title="Knowledge Feed"
      subtitle="Notas tecnicas, aprendizajes clave y experiencia aplicada en proyectos reales."
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-halo-plasma/20 bg-black/20 px-4 py-3"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-halo-plasma/80">Transmission Hub</p>
          <p className="text-sm text-[color:var(--hud-text)]/74">Repositorio visual de aprendizajes y notas de campo.</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-halo-plasma/25 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-halo-plasma/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-halo-plasma" />
          Feed Synced
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {TERMINALS.map((terminal, index) => {
          const Icon = terminal.icon

          return (
            <motion.article
              key={terminal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="neon-card neon-card-soft group relative flex h-full flex-col gap-4 overflow-hidden p-4 md:p-5"
            >
              <div className="pointer-events-none absolute inset-0 hud-grid opacity-10" />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-halo-plasma/45 bg-halo-plasma/10 text-halo-plasma shadow-[0_0_18px_rgba(77,238,254,0.18)]">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-halo-plasma/20 bg-black/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[color:var(--hud-text)]/72">
                  {terminal.label}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-base font-bold uppercase tracking-[0.14em] text-[color:var(--hud-title)]">
                  {terminal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--hud-text)]/80">{terminal.description}</p>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between gap-2 border-t border-halo-plasma/15 pt-3 text-[11px] uppercase tracking-[0.18em]">
                <span className="inline-flex items-center gap-2 text-halo-plasma/75">
                  <Radar className="h-3.5 w-3.5" />
                  Incoming
                </span>
                <span className="inline-flex items-center gap-1.5 text-[color:var(--hud-text)]/62">
                  <Sparkles className="h-3.5 w-3.5 text-halo-visor" />
                  Active node
                </span>
              </div>
            </motion.article>
          )
        })}
      </div>
    </HudSection>
  )
}

export default DataTerminalsSection
