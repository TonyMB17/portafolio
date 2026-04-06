import { motion } from 'framer-motion'
import { Braces, Cpu, Database, Layers3, MonitorSmartphone, ServerCog, TerminalSquare, Wrench } from 'lucide-react'
import {
  SiBootstrap,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si'
import HudSection from '../components/layout/HudSection'
import { backend, databases, frontend, frameworks, languages, systems, tools } from '../data/portfolioData'

const TECH_ICON_MAP = {
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#60a5fa' },
  PHP: { icon: SiPhp, color: '#a78bfa' },
  Python: { icon: SiPython, color: '#5ea8d8' },
  Java: { icon: Cpu, color: '#f59e0b' },
  'C#': { icon: Braces, color: '#a78bfa' },
  'C++': { icon: Cpu, color: '#60a5fa' },
  SQL: { icon: Database, color: '#38bdf8' },
  HTML: { icon: SiHtml5, color: '#f97316' },
  CSS: { icon: Layers3, color: '#38bdf8' },
  React: { icon: SiReact, color: '#61DAFB' },
  Vue: { icon: SiVuedotjs, color: '#42d392' },
  Angular: { icon: MonitorSmartphone, color: '#ef4444' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#22d3ee' },
  Bootstrap: { icon: SiBootstrap, color: '#a78bfa' },
  Vite: { icon: SiVite, color: '#FFD000' },
  Ionic: { icon: MonitorSmartphone, color: '#60a5fa' },
  Flutter: { icon: SiFlutter, color: '#60a5fa' },
  Dart: { icon: Braces, color: '#38bdf8' },
  Laravel: { icon: SiLaravel, color: '#FF6B5B' },
  CodeIgniter: { icon: ServerCog, color: '#f97316' },
  Lumen: { icon: Cpu, color: '#fbbf24' },
  FastAPI: { icon: SiFastapi, color: '#4DB6AC' },
  Flask: { icon: Cpu, color: '#d1d5db' },
  'Node.js': { icon: SiNodedotjs, color: '#7ddc84' },
  MySQL: { icon: SiMysql, color: '#00BFFF' },
  'SQL Server': { icon: Database, color: '#ef4444' },
  'Diseño de bases de datos': { icon: Database, color: '#38bdf8' },
  Git: { icon: SiGit, color: '#f97316' },
  GitHub: { icon: SiGithub, color: '#ffffff' },
  'Android Studio': { icon: MonitorSmartphone, color: '#7ddc84' },
  Blender: { icon: Wrench, color: '#f59e0b' },
  Unity: { icon: Cpu, color: '#e5e7eb' },
  Windows: { icon: MonitorSmartphone, color: '#60a5fa' },
  Linux: { icon: TerminalSquare, color: '#facc15' },
  'Redes (TCP/IP, configuración)': { icon: ServerCog, color: '#60a5fa' },
  'Administración de sistemas': { icon: Wrench, color: '#5fffc7' },
}

const TECH_GROUPS = [
  { title: 'Lenguajes', icon: Cpu, items: languages },
  { title: 'Frontend', icon: MonitorSmartphone, items: frontend },
  { title: 'Backend', icon: ServerCog, items: backend },
  { title: 'Bases de datos', icon: Database, items: databases },
  { title: 'Frameworks', icon: Layers3, items: frameworks },
  { title: 'Herramientas', icon: Wrench, items: tools },
  { title: 'Sistemas', icon: TerminalSquare, items: systems },
]

function MinimalTechItem({ name, index }) {
  const entry = TECH_ICON_MAP[name]
  const Icon = entry?.icon ?? Cpu
  const color = entry?.color ?? '#5fffc7'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/25 p-3 text-center backdrop-blur-sm"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/45"
        style={{ color, boxShadow: `0 0 16px ${color}22` }}
      >
        <Icon className="h-6 w-6 transition group-hover:drop-shadow-[0_0_8px_currentColor]" />
      </div>
      <span className="text-[11px] font-semibold text-[color:var(--hud-text)]/88">{name}</span>
    </motion.div>
  )
}

function TechGroup({ title, icon: GroupIcon, items }) {
  const uniqueItems = [...new Map(items.map((item) => [item.name, item])).values()]

  return (
    <div className="rounded-2xl border border-[color:var(--hud-border)]/35 bg-black/20 p-4 md:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--hud-electric)]/35 bg-[color:var(--hud-electric)]/10 text-[color:var(--hud-electric)]">
          <GroupIcon className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {uniqueItems.map((skill, index) => (
          <MinimalTechItem key={`${title}-${skill.name}`} name={skill.name} index={index} />
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
      title="Stack Tecnológico"
      subtitle="Lenguajes, frameworks y herramientas que utilizo en proyectos reales."
    >
      <div className="grid gap-4">
        {TECH_GROUPS.map((group) => (
          <TechGroup key={group.title} title={group.title} icon={group.icon} items={group.items} />
        ))}
      </div>
    </HudSection>
  )
}

export default SkillsSection

