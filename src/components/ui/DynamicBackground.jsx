import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo } from 'react'

const STAR_COUNT = 110
// 0.6 = calm, 1 = balanced, 1.4 = energetic
const STAR_MOTION_INTENSITY = 1.5

/* Deterministic pseudo-random using a simple LCG so stars don't jump on re-render */
function lcg(seed) {
  return ((seed * 1664525 + 1013904223) >>> 0) / 4294967296
}

function DynamicBackground() {
  const mouseX = useMotionValue(window.innerWidth * 0.5)
  const mouseY = useMotionValue(window.innerHeight * 0.5)
  const glowX = useSpring(mouseX, { stiffness: 110, damping: 24, mass: 0.8 })
  const glowY = useSpring(mouseY, { stiffness: 110, damping: 24, mass: 0.8 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onLeave = () => {
      mouseX.set(window.innerWidth * 0.5)
      mouseY.set(window.innerHeight * 0.5)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [mouseX, mouseY])

  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => {
      const s1 = lcg(i * 31337 + 7)
      const s2 = lcg(i * 6173  + 13)
      const s3 = lcg(i * 9109  + 17)
      const s4 = lcg(i * 4547  + 3)
      const s5 = lcg(i * 8191  + 5)

      const colorRoll = s3
      let color
      if (colorRoll < 0.35)      color = '#5fffc7'   // neon green
      else if (colorRoll < 0.65) color = '#25a6ff'   // electric blue
      else if (colorRoll < 0.80) color = '#a855f7'   // purple
      else                       color = '#f0f8ff'   // white-ish

      return {
        id: i,
        x: s1 * 100,
        y: s2 * 100,
        size: s4 * 2 + 0.5,          // 0.5 – 2.5 px
        delay: s5 * 5,               // 0 – 5 s
        duration: (lcg(i * 3571 + 11) * 4 + 2) / STAR_MOTION_INTENSITY,
        driftX: (lcg(i * 1327 + 19) - 0.5) * 18 * STAR_MOTION_INTENSITY,
        driftY: (lcg(i * 1889 + 23) - 0.5) * 18 * STAR_MOTION_INTENSITY,
        driftDuration: (lcg(i * 2221 + 31) * 18 + 18) / STAR_MOTION_INTENSITY,
        color,
      }
    })
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base deep-space dark */}
      <div className="absolute inset-0 bg-[#04060c]" />

      {/* Cursor reactive global glow */}
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          x: '-50%',
          y: '-50%',
          background:
            'radial-gradient(circle, rgba(95,255,199,0.18) 0%, rgba(37,166,255,0.08) 45%, rgba(168,85,247,0.03) 68%, transparent 100%)',
        }}
      />

      {/* ── Aurora orbs ── */}
      {/* Orb 1 — neon green, top-right */}
      <div
        className="aurora-orb animate-aurora1"
        style={{
          top: '-5%',
          right: '-8%',
          width: 'clamp(340px, 52vw, 700px)',
          height: 'clamp(340px, 52vw, 700px)',
          background: 'radial-gradient(circle, rgba(95,255,199,0.26) 0%, rgba(95,255,199,0.08) 45%, transparent 70%)',
        }}
      />

      {/* Orb 2 — electric blue, bottom-left */}
      <div
        className="aurora-orb animate-aurora2"
        style={{
          bottom: '-10%',
          left: '-12%',
          width: 'clamp(400px, 60vw, 850px)',
          height: 'clamp(400px, 60vw, 850px)',
          background: 'radial-gradient(circle, rgba(37,166,255,0.20) 0%, rgba(37,166,255,0.06) 45%, transparent 70%)',
        }}
      />

      {/* Orb 3 — purple accent, center */}
      <div
        className="aurora-orb animate-aurora3"
        style={{
          top: '35%',
          left: '28%',
          width: 'clamp(250px, 38vw, 520px)',
          height: 'clamp(250px, 38vw, 520px)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.03) 50%, transparent 70%)',
        }}
      />

      {/* Orb 4 — amber tint, top-left (subtle) */}
      <div
        className="aurora-orb"
        style={{
          top: '10%',
          left: '-5%',
          width: 'clamp(180px, 26vw, 360px)',
          height: 'clamp(180px, 26vw, 360px)',
          background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 65%)',
          animation: 'aurora2 30s ease-in-out infinite reverse',
        }}
      />

      {/* ── Star field ── */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
          animate={{ x: [0, star.driftX, -star.driftX * 0.6, 0], y: [0, star.driftY, -star.driftY * 0.6, 0] }}
          transition={{ duration: star.driftDuration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── HUD Dot-grid overlay ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(95,255,199,0.18) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          opacity: 0.35,
        }}
        animate={{ x: [0, 6, -6, 0], y: [0, -4, 4, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Subtle scanline sweep across the entire page ── */}
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(95,255,199,0.35) 40%, rgba(37,166,255,0.35) 60%, transparent 100%)',
          animation: 'scan 7s linear infinite',
          top: 0,
        }}
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Vignette edges ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(4,6,12,0.75) 100%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default DynamicBackground
