import { motion } from 'framer-motion'
import { BookOpenText, Cpu, Database, Radar } from 'lucide-react'
import HudSection from '../components/layout/HudSection'

const TERMINALS = [
  {
    id: 't-01',
    icon: BookOpenText,
    title: 'Engineering Notes',
    description: 'Bitacora de arquitectura, decisiones de stack y patrones usados en proyectos reales.',
  },
  {
    id: 't-02',
    icon: Database,
    title: 'Data Logs',
    description: 'Apuntes de integracion de datos, calidad de informacion y automatizacion operativa.',
  },
  {
    id: 't-03',
    icon: Cpu,
    title: 'System Debriefs',
    description: 'Post-mortems tecnicos de implementaciones, mejoras y resultados medibles.',
  },
]

function DataTerminalsSection() {
  return (
    <HudSection
      id="terminals"
      kicker="Data Terminals"
      title="Knowledge Feed"
      subtitle="Espacio para articulos tecnicos, lecciones aprendidas y notas de campo."
    >
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
              className="neon-card neon-card-soft flex h-full flex-col gap-3 p-4"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-halo-plasma/45 bg-halo-plasma/10 text-halo-plasma">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--hud-title)]">
                {terminal.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--hud-text)]/80">{terminal.description}</p>
              <div className="mt-auto flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-halo-plasma/75">
                <Radar className="h-3.5 w-3.5" />
                Incoming transmission
              </div>
            </motion.article>
          )
        })}
      </div>
    </HudSection>
  )
}

export default DataTerminalsSection
