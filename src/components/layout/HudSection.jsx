import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

function HudSection({ id, kicker, title, subtitle, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      className="hud-shell relative p-6 md:p-8"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--hud-neon)]/70 to-transparent" />
      {/* Scanline animado por sección */}
      <motion.div
        className="pointer-events-none absolute left-0 z-0 h-12 w-full"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(95,255,199,0.05), transparent)' }}
        initial={{ top: '-12%' }}
        animate={{ top: '112%' }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear', repeatDelay: 3 }}
      />
      <div className="relative z-10 space-y-6">
        <SectionTitle kicker={kicker} title={title} subtitle={subtitle} />
        <div>{children}</div>
      </div>
    </motion.section>
  )
}

export default HudSection
