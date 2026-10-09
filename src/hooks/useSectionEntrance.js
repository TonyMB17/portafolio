import { useLayoutEffect, useRef } from 'react'

export default function useSectionEntrance() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const node = ref.current
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!node || media.matches || !('IntersectionObserver' in window)) {
      return
    }

    // Never hide content already on screen (including direct anchor navigation).
    if (node.getBoundingClientRect().top < window.innerHeight) return
    node.classList.add('section-pending')

    const reveal = () => {
      node.classList.remove('section-pending')
      observer.disconnect()
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        reveal()
      },
      { threshold: 0, rootMargin: '0px 0px 48px 0px' }
    )

    const onMotionChange = () => { if (media.matches) reveal() }
    media.addEventListener('change', onMotionChange)
    node.addEventListener('focusin', reveal)
    observer.observe(node)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', onMotionChange)
      node.removeEventListener('focusin', reveal)
      node.classList.remove('section-pending')
    }
  }, [])

  return ref
}
