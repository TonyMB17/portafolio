import { motion } from 'framer-motion'

const glitch = {
  animate: {
    textShadow: [
      '0 0 0px transparent',
      '2px 0 0px rgba(95,255,199,0.7), -2px 0 0px rgba(37,166,255,0.7)',
      '0 0 0px transparent',
      '-2px 0 0px rgba(95,255,199,0.5), 2px 0 0px rgba(37,166,255,0.5)',
      '0 0 0px transparent',
    ],
    x: [0, -1, 1.5, -0.5, 0],
  },
  transition: { duration: 0.25, ease: 'easeInOut' },
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <header className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--hud-electric)]">
        {kicker}
      </p>
      <motion.h2
        className="text-2xl font-semibold leading-tight text-[color:var(--hud-title)] md:text-3xl"
        whileHover={glitch.animate}
        transition={glitch.transition}
      >
        {title}
      </motion.h2>
      <div className="h-px w-full bg-gradient-to-r from-[color:var(--hud-neon)]/80 via-[color:var(--hud-electric)]/40 to-transparent" />
      {subtitle ? <p className="max-w-2xl text-sm text-[color:var(--hud-text)]/90">{subtitle}</p> : null}
    </header>
  )
}

export default SectionTitle
