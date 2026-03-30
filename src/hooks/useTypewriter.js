import { useEffect, useState } from 'react'

/**
 * Typewriter hook — cycles through an array of strings.
 * @param {string[]} words
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pauseMs?: number }} opts
 */
export default function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 45, pauseMs = 1600 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const current = words[wordIndex % words.length]

    let timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, typeSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1))
        }, deleteSpeed)
      } else {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
