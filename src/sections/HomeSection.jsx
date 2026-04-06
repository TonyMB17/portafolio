import { motion } from 'framer-motion'
import { ChevronDown, Crosshair, FileDown, Radar, ShieldCheck } from 'lucide-react'
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

  const resolveAssetPath = (path, fallback = 'images/my-image.png') => {
    const assetPath = path ?? fallback

    if (/^(https?:)?\/\//.test(assetPath) || assetPath.startsWith('data:')) {
      return assetPath
    }

    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`
  }

  const operatorAvatar = resolveAssetPath(profile.operatorAvatar)
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
      className="relative flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-2xl border border-halo-plasma/25 bg-halo-carbon/70 shadow-[0_0_35px_rgba(77,238,254,0.08)]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setMouse({ x, y })
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,238,254,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,166,2,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-halo-plasma/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-halo-visor/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-30" />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-15" />
      <div className="pointer-events-none absolute inset-0" style={meshStyle} />

      <div className="relative z-10 flex items-center justify-between border-b border-halo-plasma/20 px-6 py-3 md:px-8">
        <span className="text-[10px] uppercase tracking-[0.28em] text-halo-plasma/85">
          TACTICAL PORTFOLIO // Neural Link Established
        </span>
        <span className="hidden items-center gap-2 rounded-full border border-halo-plasma/20 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[color:var(--hud-text)]/70 sm:inline-flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-halo-plasma" />
          Signal Stable
        </span>
      </div>

      <div className="relative z-10 flex flex-1 items-center p-6 md:p-10">
        <div className="grid w-full items-center gap-8 xl:grid-cols-[minmax(0,1.08fr)_360px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {profile.quickStats.slice(0, 3).map((stat) => (
                <span key={stat} className="hud-tag">
                  {stat}
                </span>
              ))}
            </div>

            <HeroTitle name={profile.name} />

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-halo-plasma/30 bg-black/35 px-4 py-2 text-sm font-bold text-halo-plasma md:text-base">
              <Radar className="h-4 w-4" />
              <span>{displayed}</span>
              <motion.span
                className="inline-block h-[1em] w-[3px] rounded-sm bg-halo-plasma"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7, ease: 'steps(1)' }}
              />
            </div>

            <div className="flex max-w-2xl items-start gap-3 rounded-2xl border border-halo-plasma/15 bg-black/25 p-4">
              <div className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-halo-plasma/45 bg-black/60">
                <Crosshair className="h-4 w-4 text-halo-plasma" />
                <span className="absolute inset-0 animate-ping rounded-full border border-halo-plasma/20" />
              </div>
              <div>
                <p className="text-base leading-relaxed text-[color:var(--hud-text)]/84 md:text-lg">{profile.tagline}</p>
                <p className="mt-2 text-sm text-[color:var(--hud-text)]/60">{profile.summary}</p>
              </div>
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
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-halo-plasma/35 bg-black/45 p-3 shadow-[0_0_35px_rgba(77,238,254,0.16)]">
              <div className="pointer-events-none absolute inset-0 hud-grid opacity-10" />

              <div className="relative z-10 flex items-center justify-between rounded-xl border border-halo-plasma/15 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-[color:var(--hud-text)]/75">
                <span>Operator Profile</span>
                <span className="inline-flex items-center gap-1 text-halo-plasma">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Live
                </span>
              </div>

              <div className="relative z-10 mt-3 overflow-hidden rounded-[20px] border border-halo-plasma/25">
                <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-25" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-halo-plasma/12 to-transparent" />
                <img
                  src={operatorAvatar}
                  alt={profile.name}
                  className="h-[420px] w-full object-cover object-center"
                  loading="eager"
                />

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-2xl border border-halo-plasma/20 bg-black/55 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-halo-plasma/80">{profile.role}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{profile.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
