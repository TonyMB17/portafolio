import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  ['Inicio', 'home'],
  ['Sobre mí', 'about'],
  ['Proyectos', 'projects'],
  ['Tecnologías', 'skills'],
  ['Contacto', 'contact'],
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current = 'home'
      const scrollPosition = window.scrollY + 200

      for (const [, id] of LINKS) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (scrollPosition >= top) {
            current = id
          }
        }
      }

      // Check if at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = 'contact'
      }

      setActive(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--hud-neon)]"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">AMB</span>
          <span>Anthony MB</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map(([label, id]) => {
              const isActive = active === id
              return (
                <li key={id} className="relative">
                  <a
                    className={`nav-link relative z-10 block px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-[#86f0fc] font-semibold' : 'text-[#bacbd8] hover:text-white'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                    href={`#${id}`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-[#18313b] border border-[#4deefe]/30 shadow-[0_0_12px_rgba(77,238,254,0.18)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#4deefe] shadow-[0_0_8px_#4deefe]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {/* Mobile navigation */}
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className="mobile-navigation md:hidden"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setOpen(false)
                e.currentTarget.parentElement.querySelector('button').focus()
              }
            }}
          >
            {LINKS.map(([label, id]) => {
              const isActive = active === id
              return (
                <a
                  key={id}
                  className={`nav-link block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-[#18313b] text-[#86f0fc] font-semibold border-l-2 border-[#4deefe]'
                      : 'text-[#d2dfe8] hover:bg-[#15232d] hover:text-white'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
