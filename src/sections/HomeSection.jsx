import { motion } from 'framer-motion'
import { ChevronDown, Crosshair, FileDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import HeroTitle from '../components/ui/HeroTitle'
import { profile } from '../data/portfolioData'
import useTypewriter from '../hooks/useTypewriter'

function HomeSection() {
  const displayed = useTypewriter(profile.typewriterRoles, {
    typeSpeed: 75,
    deleteSpeed: 40,
    pauseMs: 1800,
  })

  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const meshStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(77, 238, 254, 0.28), transparent 35%)`,
    }),
    [mouse.x, mouse.y],
  )

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-2xl border border-halo-plasma/25 bg-halo-carbon/65"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setMouse({ x, y })
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-30" />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-15" />
      <div className="pointer-events-none absolute inset-0" style={meshStyle} />

      <div className="relative z-10 border-b border-halo-plasma/20 px-6 py-3 md:px-8">
        <span className="text-[10px] uppercase tracking-[0.28em] text-halo-plasma/85">
          BOOT SEQUENCE // Neural Link Established
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 p-6 md:p-10">
        <HeroTitle />

        <div className="flex h-9 items-center gap-2 text-xl font-bold text-halo-plasma md:text-2xl">
          <span>{displayed}</span>
          <motion.span
            className="inline-block h-[1em] w-[3px] rounded-sm bg-halo-plasma"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7, ease: 'steps(1)' }}
          />
        </div>

        <div className="flex max-w-2xl items-start gap-3">
          <div className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-halo-plasma/45 bg-black/60">
            <Crosshair className="h-4 w-4 text-halo-plasma" />
            <span className="absolute inset-0 animate-ping rounded-full border border-halo-plasma/20" />
          </div>
          <p className="text-base leading-relaxed text-[color:var(--hud-text)]/84 md:text-lg">{profile.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="neon-btn px-5 py-2.5 text-xs">
            Tactical Operations
          </a>
          <a href="#contact" className="neon-btn neon-btn-electric px-5 py-2.5 text-xs">
            Open Comms Link
          </a>
          <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="neon-btn px-5 py-2.5 text-xs">
            <span className="inline-flex items-center gap-2">
              <FileDown className="h-3.5 w-3.5" />
              Download Record
            </span>
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-6"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.28em] text-[color:var(--hud-text)]/40 transition hover:text-halo-plasma"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  )
}

export default HomeSection
