import useInView from '../../hooks/useInView'

function SkillBar({ skill, accent }) {
  const { elementRef, isVisible } = useInView({ threshold: 0.35, once: true })
  const barColor = accent ?? '#5fffc7'

  return (
    <div ref={elementRef} className="group space-y-1.5 rounded-lg border bg-black/30 p-3 transition hover:border-white/20" style={{ borderColor: 'rgba(95,255,199,0.18)' }}>
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-[color:var(--hud-text)] transition-colors duration-200 group-hover:text-[color:var(--hud-title)]">
          {skill.name}
        </span>
        <span
          className="text-xs font-bold tabular-nums transition-all duration-300 group-hover:drop-shadow-[0_0_6px_currentColor]"
          style={{ color: barColor }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-black/60">
        <div
          className="relative h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            background: `linear-gradient(to right, ${barColor}99, ${barColor})`,
            boxShadow: isVisible ? `0 0 8px ${barColor}80` : 'none',
          }}
        >
          {/* Shimmer effect on the bar */}
          <div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: isVisible ? 'shimmerLine 2.5s linear infinite' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillBar

