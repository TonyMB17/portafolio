import { motion } from 'framer-motion'

function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="border-l-4 border-halo-visor pl-6"
    >
      <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-6xl">
        Spartan <span className="text-halo-plasma">Dev_117</span>
      </h1>
      <p className="font-mono text-xs tracking-[0.26em] text-halo-plasma/70 md:text-sm">
        STATUS: READY FOR DEPLOYMENT
      </p>
    </motion.div>
  )
}

export default HeroTitle
