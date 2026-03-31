import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // No activar en touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current

    let rafId
    let mouse = { x: 0, y: 0 }
    let ringPos = { x: 0, y: 0 }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      setIsVisible(true)
      if (dot) {
        dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`
      }
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    const lerp = (a, b, t) => a + (b - a) * t

    const loop = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.12)
      ringPos.y = lerp(ringPos.y, mouse.y, 0.12)
      if (ring) {
        ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(loop)
    }

    const onPointerOver = (e) => {
      const target = e.target.closest('a, button, [role="button"]')
      setIsHovering(!!target)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('pointerover', onPointerOver)
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('pointerover', onPointerOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Anillo exterior - sigue con lerp suave */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="relative rounded-full border-2 transition-all duration-200"
          style={{
            width: isHovering ? '52px' : '36px',
            height: isHovering ? '52px' : '36px',
            borderColor: isHovering ? 'rgba(95,255,199,0.96)' : 'rgba(255,255,255,0.95)',
            boxShadow: isHovering
              ? '0 0 20px rgba(95,255,199,0.85), 0 0 8px rgba(95,255,199,0.9), 0 0 0 1px rgba(95,255,199,0.45)'
              : '0 0 16px rgba(255,255,255,0.85), 0 0 0 1px rgba(37,166,255,0.55)',
            background: 'rgba(3, 10, 18, 0.12)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <span
            className="absolute left-1/2 top-1/2 h-[1px] w-3 -translate-x-1/2 -translate-y-1/2"
            style={{ background: isHovering ? 'var(--hud-neon)' : 'rgba(255,255,255,0.85)' }}
          />
          <span
            className="absolute left-1/2 top-1/2 h-3 w-[1px] -translate-x-1/2 -translate-y-1/2"
            style={{ background: isHovering ? 'var(--hud-neon)' : 'rgba(255,255,255,0.85)' }}
          />
        </div>
      </div>

      {/* Punto central - sigue al mouse directo */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width: isHovering ? '10px' : '8px',
            height: isHovering ? '10px' : '8px',
            background: isHovering ? 'var(--hud-neon)' : '#ffffff',
            boxShadow: isHovering
              ? '0 0 12px var(--hud-neon), 0 0 20px rgba(95,255,199,0.7)'
              : '0 0 10px rgba(255,255,255,0.95), 0 0 18px rgba(37,166,255,0.75)',
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </>
  )
}

export default CustomCursor
