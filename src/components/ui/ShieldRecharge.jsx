import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function ShieldRecharge() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  })

  const height = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const pulseOpacity = useTransform(smoothProgress, [0.96, 1], [0, 1])
  const hasFlashed = useRef(false)

  useEffect(() => {
    const unsub = smoothProgress.on('change', (value) => {
      if (value >= 0.999 && !hasFlashed.current) {
        hasFlashed.current = true
        document.body.classList.add('shield-flash')
        window.setTimeout(() => {
          document.body.classList.remove('shield-flash')
        }, 220)
      }

      if (value < 0.85) {
        hasFlashed.current = false
      }
    })

    return () => unsub()
  }, [smoothProgress])

  return (
    <aside className="pointer-events-none fixed right-3 top-1/2 z-[9991] hidden -translate-y-1/2 md:block" aria-hidden="true">
      <div className="relative h-[45vh] w-4 overflow-hidden rounded-full border border-halo-plasma/40 bg-black/45 backdrop-blur-sm">
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-t from-halo-plasma via-cyan-300 to-white shadow-[0_0_18px_rgba(77,238,254,0.75)]"
          style={{ height }}
        />
        <motion.div
          className="absolute inset-0 bg-white"
          style={{ opacity: pulseOpacity }}
        />
      </div>
    </aside>
  )
}

export default ShieldRecharge
