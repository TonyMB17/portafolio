import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import useRecruiterMode from '../../hooks/useRecruiterMode'

function Reveal({ children, className = '', delay = 0, threshold = 0.15, direction = 'up' }) {
  const { recruiterMode } = useRecruiterMode()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -8% 0px', amount: threshold })

  const variants = {
    up:     { hidden: { opacity: 0, y: 26, scale: 0.99, filter: 'blur(6px)' },  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } },
    down:   { hidden: { opacity: 0, y: -26, scale: 0.99, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } },
    left:   { hidden: { opacity: 0, x: -24, rotateX: 4, filter: 'blur(6px)' }, visible: { opacity: 1, x: 0, rotateX: 0, filter: 'blur(0px)' } },
    right:  { hidden: { opacity: 0, x: 24, rotateX: -4, filter: 'blur(6px)' },  visible: { opacity: 1, x: 0, rotateX: 0, filter: 'blur(0px)' } },
    scale:  { hidden: { opacity: 0, scale: 0.94, filter: 'blur(6px)' }, visible: { opacity: 1, scale: 1, filter: 'blur(0px)' } },
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
      transition={{
        duration: recruiterMode ? 0.35 : 0.7,
        ease: [0.2, 0.7, 0.2, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
