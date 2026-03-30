import { useEffect, useRef, useState } from 'react'

function useInView({ threshold = 0.25, rootMargin = '0px', once = true } = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node || (once && isVisible)) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        setIsVisible(true)
        if (once) {
          observer.disconnect()
        }
      } else if (!once) {
        setIsVisible(false)
      }
      if (once && entry.isIntersecting) {
        observer.disconnect()
      }
    }, { threshold, rootMargin })

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible, once, rootMargin, threshold])

  return { elementRef, isVisible }
}

export default useInView
