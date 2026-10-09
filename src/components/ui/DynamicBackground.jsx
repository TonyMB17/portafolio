import { useEffect } from 'react'

export default function DynamicBackground() {
  useEffect(() => {
    const update = () => document.documentElement.classList.toggle('page-hidden', document.hidden)
    update()
    document.addEventListener('visibilitychange', update)
    return () => {
      document.removeEventListener('visibilitychange', update)
      document.documentElement.classList.remove('page-hidden')
    }
  }, [])
  return <div aria-hidden="true" className="portfolio-background">
    {Array.from({ length: 12 }, (_, index) => <span key={index} className="ambient-point" style={{ left: `${(index * 37 + 7) % 100}%`, top: `${(index * 23 + 9) % 100}%`, animationDelay: `${-index * 1.7}s`, animationDuration: `${12 + index % 5 * 2}s` }} />)}
  </div>
}
