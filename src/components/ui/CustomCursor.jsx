import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const hoveredTargetRef = useRef(null)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  // Capa 1: punto de precision (inercia minima)
  const coreX = useSpring(pointerX, { stiffness: 930, damping: 48, mass: 0.2 })
  const coreY = useSpring(pointerY, { stiffness: 930, damping: 48, mass: 0.2 })

  // Capa 2: reticula angular (inercia media)
  const reticleX = useSpring(pointerX, { stiffness: 400, damping: 34, mass: 0.55 })
  const reticleY = useSpring(pointerY, { stiffness: 400, damping: 34, mass: 0.55 })

  // Capa 3: aura exterior (inercia alta)
  const auraX = useSpring(pointerX, { stiffness: 210, damping: 30, mass: 0.85 })
  const auraY = useSpring(pointerY, { stiffness: 210, damping: 30, mass: 0.85 })

  const brackets = useMemo(
    () => [
      { id: 'tl', className: 'left-0 top-0 border-l border-t -translate-x-0.5 -translate-y-0.5' },
      { id: 'tr', className: 'right-0 top-0 border-r border-t translate-x-0.5 -translate-y-0.5' },
      { id: 'bl', className: 'bottom-0 left-0 border-b border-l -translate-x-0.5 translate-y-0.5' },
      { id: 'br', className: 'bottom-0 right-0 border-b border-r translate-x-0.5 translate-y-0.5' },
    ],
    [],
  )

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const interactiveSelector = 'button, a, [role="button"], [data-cursor-interactive="true"]'

    const onMove = (e) => {
      setIsVisible(true)
      pointerX.set(e.clientX)
      pointerY.set(e.clientY)

      const target = e.target.closest(interactiveSelector)
      if (target !== hoveredTargetRef.current) {
        if (hoveredTargetRef.current) {
          hoveredTargetRef.current.classList.remove('cursor-hover-target')
        }

        hoveredTargetRef.current = target
        if (target) target.classList.add('cursor-hover-target')
        setIsHovering(Boolean(target))
      }
    }

    const onLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
      if (hoveredTargetRef.current) {
        hoveredTargetRef.current.classList.remove('cursor-hover-target')
      }
      hoveredTargetRef.current = null
    }
    const onEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)

      if (hoveredTargetRef.current) {
        hoveredTargetRef.current.classList.remove('cursor-hover-target')
      }
    }
  }, [pointerX, pointerY])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          x: auraX,
          y: auraY,
          width: isHovering ? 40 : 46,
          height: isHovering ? 40 : 46,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: isHovering ? 'rgba(249,166,2,0.45)' : 'rgba(77,238,254,0.28)',
            boxShadow: isHovering
              ? '0 0 12px rgba(249,166,2,0.28)'
              : '0 0 10px rgba(77,238,254,0.16)',
            background: 'rgba(6, 12, 25, 0.03)',
          }}
          animate={{ scale: isHovering ? 0.98 : 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: reticleX, y: reticleY, translateX: '-50%', translateY: '-50%', willChange: 'transform' }}
      >
        <motion.div
          className="relative"
          style={{
            width: isHovering ? 26 : 32,
            height: isHovering ? 26 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          animate={{ width: isHovering ? 26 : 32, height: isHovering ? 26 : 32 }}
          transition={{ type: 'spring', stiffness: 420, damping: 30, mass: 0.45 }}
        >
          {brackets.map((corner) => (
            <motion.span
              key={corner.id}
              className={`absolute h-2.5 w-2.5 ${corner.className}`}
              style={{
                borderColor: isHovering ? '#F9A602' : '#4DEEFE',
                boxShadow: isHovering
                  ? '0 0 7px rgba(249,166,2,0.42)'
                  : '0 0 6px rgba(77,238,254,0.34)',
              }}
              animate={{ scale: isHovering ? 1.02 : 1 }}
              transition={{ duration: 0.12 }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full"
        style={{ x: coreX, y: coreY, translateX: '-50%', translateY: '-50%', willChange: 'transform' }}
        animate={{ scale: isHovering ? 0.95 : 1 }}
        transition={{ duration: 0.12 }}
      >
        <span
          className="block h-1.5 w-1.5 rounded-full"
          style={{
            background: '#4DEEFE',
            boxShadow: isHovering
              ? '0 0 8px rgba(249,166,2,0.55)'
              : '0 0 8px rgba(77,238,254,0.58)',
            opacity: isVisible ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  )
}

export default CustomCursor
