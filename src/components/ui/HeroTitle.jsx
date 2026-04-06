import { motion } from 'framer-motion'

function HeroTitle({ name = 'Developer' }) {
  const [firstName = '', ...restName] = name.trim().split(/\s+/)
  const secondaryName = restName.join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-halo-plasma/20 bg-black/20 px-5 py-4"
    >
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-10" />

      <div className="relative z-10 border-l-4 border-halo-visor pl-4">
        <p className="mb-2 text-[10px] uppercase tracking-[0.38em] text-halo-plasma/75">
          Tactical Identity // Operator Ready
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
          {firstName}
          {secondaryName ? <span className="text-halo-plasma"> {secondaryName}</span> : null}
        </h1>
        <p className="mt-2 font-mono text-[11px] tracking-[0.26em] text-[color:var(--hud-text)]/70 md:text-sm">
          STATUS: READY FOR DEPLOYMENT
        </p>
      </div>
    </motion.div>
  )
}

export default HeroTitle
