import { profile } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-white/15 py-8 text-sm">
      <p>© {new Date().getFullYear()} {profile.name} · Desarrollo web</p>
      <nav aria-label="Redes y contacto" className="flex flex-wrap gap-5">
        <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.social.email}>Correo electrónico</a>
      </nav>
    </footer>
  )
}
