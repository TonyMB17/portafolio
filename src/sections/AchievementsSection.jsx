import { motion } from 'framer-motion'
import HudSection from '../components/layout/HudSection'
import Reveal from '../components/ui/Reveal'
import { achievementsIntel } from '../data/portfolioData'

const TIER_STYLE = {
  LEGENDARY: {
    border: 'rgba(251,191,36,0.62)',
    text: '#fcd34d',
    bg: 'rgba(251,191,36,0.1)',
  },
  EPIC: {
    border: 'rgba(168,85,247,0.55)',
    text: '#c4b5fd',
    bg: 'rgba(168,85,247,0.1)',
  },
  RARE: {
    border: 'rgba(37,166,255,0.55)',
    text: '#7dd3fc',
    bg: 'rgba(37,166,255,0.1)',
  },
  UNCOMMON: {
    border: 'rgba(95,255,199,0.55)',
    text: '#5fffc7',
    bg: 'rgba(95,255,199,0.1)',
  },
}

function AchievementCard({ item, delay }) {
  const tierStyle = TIER_STYLE[item.tier] ?? TIER_STYLE.UNCOMMON

  return (
    <Reveal delay={delay}>
      <motion.article
        className="neon-card neon-card-medium group p-4"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <div
          className="inline-flex rounded-md border px-2 py-1 text-[10px] uppercase tracking-[0.18em]"
          style={{
            borderColor: tierStyle.border,
            color: tierStyle.text,
            background: tierStyle.bg,
          }}
        >
          {item.tier}
        </div>

        <h3 className="mt-3 bg-gradient-to-r from-[color:var(--hud-neon)] to-[color:var(--hud-electric)] bg-clip-text text-base font-bold text-transparent">
          {item.title}
        </h3>
        <p
          className="mt-1 text-sm leading-relaxed text-[color:var(--hud-text)]/80"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.description}
        </p>

        <div className="mt-3 rounded-md border border-[color:var(--hud-border)]/45 bg-black/25 px-2 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--hud-neon)]">
          {item.metric}
        </div>
      </motion.article>
    </Reveal>
  )
}

function AchievementsSection() {
  return (
    <HudSection
      id="achievements"
      kicker="Combat Record"
      title="Logros"
      subtitle="Medallas y resultados clave."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievementsIntel.map((item, index) => (
          <AchievementCard key={item.id} item={item} delay={80 + index * 90} />
        ))}
      </div>
    </HudSection>
  )
}

export default AchievementsSection
