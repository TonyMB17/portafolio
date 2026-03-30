import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, className = '', delay = 0, threshold = 0.15, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -8% 0px', amount: threshold })

  const variants = {
    up:     { hidden: { opacity: 0, y: 20 },  visible: { opacity: 1, y: 0 } },
    down:   { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
    left:   { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
    right:  { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0 } },
    scale:  { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    none:   { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  }

  const chosen = variants[direction] ?? variants.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={chosen}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
