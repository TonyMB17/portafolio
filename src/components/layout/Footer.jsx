import { motion } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { profile } from '../../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]

const SOCIAL = [
  {
    label: 'GitHub',
    href: profile.social?.github ?? '#',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: profile.social?.linkedin ?? '#',
    icon: FaLinkedinIn,
  },
  {
    label: 'WhatsApp',
    href: profile.social?.whatsapp ?? '#',
    icon: BsWhatsapp,
  },
  {
    label: 'Email',
    href: profile.social?.email ?? '#',
    icon: MdEmail,
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative mt-6 overflow-hidden rounded-2xl border border-[color:var(--hud-border)] bg-[color:var(--hud-panel)] backdrop-blur-sm"
    >
      {/* Top accent line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/50 to-transparent" />

      <div className="grid gap-6 px-6 py-8 md:grid-cols-3">
        {/* Brand + status */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[color:var(--hud-title)]">{profile.name}</span>
          </div>
          <p className="text-xs leading-relaxed text-[color:var(--hud-text)]/60">
            {profile.tagline}
          </p>
          {/* STATUS badge */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--hud-neon)]" />
            <span className="text-[color:var(--hud-neon)]">Status:</span>
            <span className="text-[color:var(--hud-neon)] font-bold">Online</span>
          </div>
        </div>

        {/* Nav links */}
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--hud-text)]/50">
            // Navegacion
          </div>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-[color:var(--hud-text)]/70 transition hover:text-[color:var(--hud-neon)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + coords */}
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--hud-text)]/50">
            // Redes
          </div>
          <div className="flex flex-wrap gap-3">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="neon-btn neon-btn-icon focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--hud-electric)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Decorative coords */}
          <div className="space-y-1 pt-2 text-[10px] uppercase tracking-[0.15em] text-[color:var(--hud-text)]/30">
            <div>LAT: 0.00°N // LON: 0.00°W</div>
            <div>SECTOR: FRONTEND</div>
            <div>SYS: v2.6.0-stable</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--hud-border)] px-6 py-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--hud-text)]/40">
          © {year} {profile.name} // All systems nominal
        </p>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--hud-text)]/30">
          Built with React + Vite + Tailwind
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
