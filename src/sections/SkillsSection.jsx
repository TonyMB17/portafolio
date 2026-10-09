import useCardGlow from '../hooks/useCardGlow'
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
import { backend, databases, frontend, languages, systems, tools } from '../data/portfolioData'

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
  { title: 'Frontend', description: 'Interfaces y experiencias web.', icon: MonitorSmartphone, items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', description: 'Servicios y lógica de las aplicaciones.', icon: ServerCog, items: ['Laravel', 'PHP', 'Python', 'FastAPI'] },
  { title: 'Datos', description: 'Almacenamiento y consulta de información.', icon: Database, items: ['MySQL', 'SQL Server'] },
  { title: 'Herramientas', description: 'Control de versiones y desarrollo.', icon: Wrench, items: ['Git', 'GitHub', 'Vite'] },
]
const MAIN_TECH = new Set(TECH_GROUPS.flatMap(group => group.items))
const OTHER_TECH = [...new Set([...languages, ...frontend, ...backend, ...databases, ...tools, ...systems].map(item => item.name))].filter(name => !MAIN_TECH.has(name))

function TechChip({ name, index }) {
  const entry = TECH_ICON_MAP[name]
  const Icon = entry?.icon ?? Cpu
  return (
    <li className="skill-chip" style={{ '--chip-accent': entry?.color ?? '#5fffc7', '--chip-delay': `${Math.min(index, 8) * 30}ms` }}>
      <Icon className="skill-chip-icon" aria-hidden="true" />
      <span>{name}</span>
    </li>
  )
}

function TechGroup({ title, description, icon: GroupIcon, items }) {
  const ref = useCardGlow()
  return (
    <article ref={ref} className="skill-group">
      <span className="card-pointer-glow" aria-hidden="true" />
      <span className="skill-group-line" aria-hidden="true" />
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-3">
          <GroupIcon className="skill-group-icon text-halo-plasma" size={24} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="mb-5 text-sm leading-relaxed">{description}</p>
        <ul aria-label={`Tecnologías de ${title}`} className="flex flex-wrap gap-2.5">
          {items.map((name, index) => <TechChip key={name} name={name} index={index} />)}
        </ul>
      </div>
    </article>
  )
}

export default function SkillsSection() {
  return (
    <HudSection id="skills" kicker="Herramientas de trabajo" title="Tecnologías y herramientas" subtitle="Mi stack principal para desarrollar aplicaciones, trabajar con datos y automatizar procesos.">
      <div className="grid gap-4 md:grid-cols-2">
        {TECH_GROUPS.map(group => <TechGroup key={group.title} {...group} />)}
      </div>
      <details className="other-technologies">
        <summary>Otras tecnologías <span className="text-sm font-normal text-[color:var(--hud-text)]">· {OTHER_TECH.length} complementarias</span></summary>
        <p className="mb-4 mt-3 text-sm">Otros lenguajes, herramientas y conocimientos que complementan mi trabajo.</p>
        <ul className="flex flex-wrap gap-2.5" aria-label="Tecnologías complementarias">
          {OTHER_TECH.map((name, index) => <TechChip key={name} name={name} index={index} />)}
        </ul>
      </details>
    </HudSection>
  )
}
