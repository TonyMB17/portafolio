import { motion } from 'framer-motion'
import { ChevronDown, Code2, Crosshair, Shield, Zap } from 'lucide-react'
import { profile } from '../data/portfolioData'
import useTypewriter from '../hooks/useTypewriter'

const STAT_ICONS = [Shield, Zap, Code2]

const stagger = {
  visible: { transition: { staggerChildren: 0.13 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] },
  },
}

function OperatorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative flex w-full flex-col overflow-hidden rounded-2xl border bg-black/60 backdrop-blur-md lg:w-[340px] lg:shrink-0"
      style={{
        borderColor: 'rgba(95,255,199,0.35)',
        boxShadow:
          '0 0 0 1px rgba(95,255,199,0.06), 0 24px 48px rgba(0,0,0,0.55), 0 0 60px rgba(95,255,199,0.08)',
      }}
    >
      <div className="absolute left-0 top-0 z-10 h-[2px] w-full bg-gradient-to-r from-[color:var(--hud-neon)] via-[color:var(--hud-electric)] to-[color:var(--hud-purple)]" />

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-[color:var(--hud-neon)]" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-2 border-t-2 border-[color:var(--hud-electric)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-2 border-l-2 border-[color:var(--hud-electric)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-[color:var(--hud-neon)]" />

      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-black/80 lg:h-72">
        <img
          src={profile.operatorAvatar}
          alt="Operator avatar"
          className="h-full w-full object-cover object-top"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = '/images/no-image.jpg'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <motion.div
          className="pointer-events-none absolute left-0 z-10 h-10 w-full"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(95,255,199,0.12), transparent)',
          }}
          initial={{ top: '-15%' }}
          animate={{ top: '130%' }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'linear', repeatDelay: 4 }}
        />

        <div className="absolute left-3 top-3 z-10 rounded border border-yellow-400/60 bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-yellow-300 backdrop-blur-sm">
          ★ LEGENDARY
        </div>

        <div className="absolute bottom-3 left-4 z-10">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hud-electric)]">
            Operator Card
          </div>
          <div className="text-xl font-bold leading-tight text-white drop-shadow-lg">
            {profile.name}
          </div>
          <div className="mt-0.5 text-xs text-[color:var(--hud-text)]/80">{profile.role}</div>
        </div>

        <div className="absolute bottom-3.5 right-4 z-10 flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--hud-neon)] shadow-[0_0_8px_rgba(95,255,199,0.9)]" />
          <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--hud-neon)]">
            Online
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="space-y-2.5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hud-text)]/50">
            // Combat Stats
          </div>
          {profile.operatorStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="flex justify-between text-[11px] uppercase tracking-[0.14em]">
                <span className="text-[color:var(--hud-text)]">{stat.label}</span>
                <span className="font-bold text-[color:var(--hud-neon)]">{stat.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/50">
                <motion.div
                  className="relative h-full rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #5fffc7, #25a6ff)',
                    boxShadow: '0 0 8px rgba(95,255,199,0.5)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between border-t pt-3 text-[10px] uppercase tracking-[0.16em]"
          style={{ borderColor: 'rgba(95,255,199,0.18)' }}
        >
          <span className="text-[color:var(--hud-text)]/40">System ver 2.6.0</span>
          <span className="text-[color:var(--hud-electric)]">Core Profile</span>
        </div>
      </div>
    </motion.div>
  )
}

function HomeSection() {
  const displayed = useTypewriter(profile.typewriterRoles, {
    typeSpeed: 75,
    deleteSpeed: 40,
    pauseMs: 1800,
  })

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-2xl border"
      style={{
        borderColor: 'rgba(95,255,199,0.22)',
        background: 'rgba(6,9,15,0.6)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 0 0 1px rgba(95,255,199,0.06), 0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/70 to-transparent" />

      <div
        className="relative z-10 border-b px-6 py-3 md:px-8"
        style={{ borderColor: 'rgba(95,255,199,0.14)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--hud-electric)]/80">
          ▶ Core Profile // Operador activo
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center p-6 md:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <motion.div
            className="flex flex-1 flex-col gap-7"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--hud-electric)]">
                Hola, soy
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] text-[color:var(--hud-title)] md:text-5xl lg:text-6xl">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #e7f3ff 30%, #5fffc7 100%)' }}
                >
                  Anthony MB
                </span>
              </h1>
              <div className="flex h-10 items-center gap-1.5 text-2xl font-bold text-[color:var(--hud-electric)] md:text-3xl">
                <span>{displayed}</span>
                <motion.span
                  className="inline-block h-[1em] w-[3px] rounded-sm bg-[color:var(--hud-neon)]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: 'steps(1)' }}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-3">
              <div className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--hud-border)] bg-black/50">
                <Crosshair className="h-4 w-4 text-[color:var(--hud-neon)]" />
                <span className="absolute inset-0 animate-ping rounded-full border border-[color:var(--hud-neon)]/20" />
              </div>
              <p className="text-base leading-relaxed text-[color:var(--hud-text)]/80 md:text-lg">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-relaxed text-[color:var(--hud-text)]/70 md:text-base"
            >
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:shadow-[0_0_20px_rgba(95,255,199,0.3)]"
                style={{
                  borderColor: 'rgba(95,255,199,0.5)',
                  color: 'var(--hud-neon)',
                  background: 'rgba(95,255,199,0.08)',
                }}
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="rounded-lg border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,166,255,0.3)]"
                style={{
                  borderColor: 'rgba(37,166,255,0.5)',
                  color: 'var(--hud-electric)',
                  background: 'rgba(37,166,255,0.08)',
                }}
              >
                Iniciar contacto
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-2 sm:grid-cols-3">
              {profile.quickStats.map((stat, i) => {
                const Icon = STAT_ICONS[i]
                return (
                  <div
                    key={stat}
                    className="flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs uppercase tracking-[0.14em]"
                    style={{
                      borderColor: 'rgba(95,255,199,0.22)',
                      background: 'rgba(0,0,0,0.3)',
                      color: 'var(--hud-neon)',
                    }}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 shrink-0 text-[color:var(--hud-electric)]" />}
                    {stat}
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          <OperatorCard />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-6"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.28em] text-[color:var(--hud-text)]/40 transition hover:text-[color:var(--hud-neon)]"
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
