import { useEffect, useRef } from 'react'

export default function useCardGlow() {
  const cardRef = useRef(null)

  useEffect(() => {
    const node = cardRef.current
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!node) return

    let frame = 0
    let bounds = null

    const updateBounds = () => {
      bounds = node.getBoundingClientRect()
    }

    const onEnter = () => {
      updateBounds()
    }

    const move = (event) => {
      if (!media.matches) return
      const { clientX, clientY } = event
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!media.matches) return
        updateBounds()
        node.style.setProperty('--pointer-x', `${clientX - bounds.left}px`)
        node.style.setProperty('--pointer-y', `${clientY - bounds.top}px`)
        const x = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width))
        const y = Math.max(0, Math.min(1, (clientY - bounds.top) / bounds.height))
        node.style.setProperty('--tilt-x', `${(0.5 - y) * 3}deg`)
        node.style.setProperty('--tilt-y', `${(x - 0.5) * 3}deg`)
      })
    }

    const stop = () => {
      cancelAnimationFrame(frame)
      bounds = null
      node.style.setProperty('--tilt-x', '0deg')
      node.style.setProperty('--tilt-y', '0deg')
    }

    media.addEventListener('change', stop)
    node.addEventListener('pointerenter', onEnter, { passive: true })
    node.addEventListener('pointermove', move, { passive: true })
    node.addEventListener('pointerleave', stop, { passive: true })

    return () => {
      stop()
      media.removeEventListener('change', stop)
      node.removeEventListener('pointerenter', onEnter)
      node.removeEventListener('pointermove', move)
      node.removeEventListener('pointerleave', stop)
    }
  }, [])

  return cardRef
}
