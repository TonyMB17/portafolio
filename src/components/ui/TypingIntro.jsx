import { useEffect, useState } from 'react'

const PHRASES = ['Desarrollo aplicaciones web', 'Automatizo procesos', 'Transformo datos en información']

export default function TypingIntro() {
  const [text, setText] = useState(PHRASES[0])
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer
    let index = 0
    let length = PHRASES[0].length
    let deleting = true
    const tick = () => {
      if (media.matches || document.hidden) return
      length += deleting ? -1 : 1
      setText(PHRASES[index].slice(0, length))
      let delay = deleting ? 35 : 75
      if (length === 0) {
        index = (index + 1) % PHRASES.length
        deleting = false
        delay = 300
      } else if (length === PHRASES[index].length && !deleting) {
        deleting = true
        delay = 2200
      }
      timer = window.setTimeout(tick, delay)
    }
    const restart = () => {
      clearTimeout(timer)
      if (media.matches) { setText(PHRASES[0]); return }
      if (!document.hidden) timer = window.setTimeout(tick, 2200)
    }
    // Start asynchronously so a static, complete phrase is the initial render.
    timer = window.setTimeout(restart, 0)
    media.addEventListener('change', restart)
    document.addEventListener('visibilitychange', restart)
    return () => {
      clearTimeout(timer)
      media.removeEventListener('change', restart)
      document.removeEventListener('visibilitychange', restart)
    }
  }, [])
  return (
    <div className="typing-intro">
      <p className="sr-only">Desarrollo aplicaciones web, automatizo procesos y transformo datos en información.</p>
      <p aria-hidden="true" className="typing-line"><span className="typing-prompt">&gt;</span> {text}<span className="typing-caret">▍</span></p>
    </div>
  )
}
