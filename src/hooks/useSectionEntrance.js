import { useEffect, useRef } from 'react'

export default function useSectionEntrance() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!node || media.matches || !('IntersectionObserver' in window)) {
      if (node) node.classList.add('section-enter')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.classList.add('section-enter')
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
