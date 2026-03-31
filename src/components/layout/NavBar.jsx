import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'Sobre mí',  href: '#about'      },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects'   },
  { label: 'Logros',    href: '#achievements' },
  { label: 'Skills',    href: '#skills'     },
  { label: 'Contacto',  href: '#contact'    },
]

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

/* ── Active section via IntersectionObserver ─────────────────── */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const ratioMap = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.current[entry.target.id] = entry.intersectionRatio
        })
        // Pick the section with the highest visible ratio
        const best = ids.reduce((a, b) =>
          (ratioMap.current[b] ?? 0) > (ratioMap.current[a] ?? 0) ? b : a
        )
        setActive(best)
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], rootMargin: '-5% 0px -55% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}

/* ── NavBar ──────────────────────────────────────────────────── */
function NavBar() {
  const active = useActiveSection(SECTION_IDS)
  const { scrollY } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Background opacity increases after scrolling 60 px
  const bgOpacity = useTransform(scrollY, [0, 60], [0.55, 0.88])
  const borderOpacity = useTransform(scrollY, [0, 60], [0.2, 0.5])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [active])

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-[9980] flex justify-center px-4 py-3"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
    >
      <motion.div
        className="relative flex w-full max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-2xl px-5 py-3 pr-4 backdrop-blur-md"
        style={{
          backgroundColor: `rgba(6, 9, 15, ${bgOpacity})`,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: `rgba(95, 255, 199, ${borderOpacity})`,
          boxShadow: '0 4px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(95,255,199,0.06)',
        }}
      >
        {/* ── Top accent line ── */}
        <div className="pointer-events-none absolute left-0 top-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/70 to-[color:var(--hud-electric)]/70" />

        {/* ── Logo ── */}
        <motion.a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 340, damping: 22 }}
        >
          {/* Monogram badge */}
          <div
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border bg-black/70 font-bold text-sm tracking-tight transition-all duration-300 group-hover:border-[color:var(--hud-neon)]/70 group-hover:shadow-[0_0_16px_rgba(95,255,199,0.35)]"
            style={{ borderColor: 'rgba(95,255,199,0.35)', color: 'var(--hud-neon)' }}
          >
            {/* Animated sweep on hover */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            AMB
          </div>

          {/* Name + role — hidden on very small screens */}
          <div className="hidden sm:block leading-tight">
            <div className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--hud-title)]">
              Anthony MB
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--hud-text)]/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--hud-neon)]" />
              Fullstack Dev
            </div>
          </div>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-1 md:gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 md:text-[12px]"
                    style={{ color: isActive ? 'var(--hud-neon)' : 'var(--hud-text)' }}
                  >
                    {/* Active background glow */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-bg"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: 'rgba(95,255,199,0.08)',
                          boxShadow: '0 0 12px rgba(95,255,199,0.15)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10">{link.label}</span>

                    {/* Active underline dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full"
                        style={{
                          width: '60%',
                          background: 'linear-gradient(to right, var(--hud-neon), var(--hud-electric))',
                          boxShadow: '0 0 8px rgba(95,255,199,0.7)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ── Mobile menu toggle ── */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="neon-btn relative z-20 inline-flex items-center justify-center p-2 text-[color:var(--hud-neon)] md:hidden"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* ── HUD corner brackets ── */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--hud-electric)]/50" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--hud-neon)]/50" />

        {/* ── Mobile tactical menu ── */}
        <motion.div
          initial={false}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10, pointerEvents: isMenuOpen ? 'auto' : 'none' }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute left-3 right-3 top-[calc(100%+0.6rem)] rounded-xl border border-[color:var(--hud-border)]/70 bg-[color:var(--hud-panel-strong)] p-3 shadow-[0_14px_34px_rgba(0,0,0,0.55)] md:hidden"
        >
          <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--hud-electric)]/75">
            Tactical Navigation
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={`mobile-${link.href}`}>
                  <a
                    href={link.href}
                    className="neon-btn block px-3 py-2 text-center text-[11px]"
                    style={{
                      color: isActive ? 'var(--hud-neon)' : 'var(--hud-text)',
                      background: isActive ? 'linear-gradient(rgba(8, 16, 28, 0.72), rgba(8, 16, 28, 0.72)) padding-box, linear-gradient(120deg, rgba(95,255,199,0.95), rgba(37,166,255,0.95), rgba(168,85,247,0.95), rgba(95,255,199,0.95)) border-box' : undefined,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default NavBar
