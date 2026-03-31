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
      <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--hud-neon)] drop-shadow-[0_0_10px_rgba(95,255,199,0.35)]">
        {kicker}
      </p>
      <motion.h2
        className="bg-gradient-to-r from-[color:var(--hud-neon)] via-[color:var(--hud-electric)] to-[#7dd3fc] bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-[0_0_14px_rgba(37,166,255,0.25)] md:text-4xl"
        whileHover={glitch.animate}
        transition={glitch.transition}
      >
        {title}
      </motion.h2>
      <div className="h-px w-full bg-gradient-to-r from-[color:var(--hud-neon)]/80 via-[color:var(--hud-electric)]/40 to-transparent" />
      {subtitle ? (
        <p className="max-w-xl text-xs uppercase tracking-[0.14em] text-[color:var(--hud-electric)]/90 drop-shadow-[0_0_8px_rgba(37,166,255,0.2)]">
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}

export default SectionTitle
