import { useCallback, useEffect, useState } from 'react'

const RECRUITER_MODE_KEY = 'halo-portfolio-recruiter-view'
const RECRUITER_MODE_EVENT = 'recruiter-mode-change'

function readRecruiterMode() {
  const queryValue = new URLSearchParams(window.location.search).get('recruiter')
  if (queryValue === '1') return true
  if (queryValue === '0') return false

  return window.localStorage.getItem(RECRUITER_MODE_KEY) === '1'
}

function writeRecruiterMode(nextValue) {
  window.localStorage.setItem(RECRUITER_MODE_KEY, nextValue ? '1' : '0')
  window.dispatchEvent(new CustomEvent(RECRUITER_MODE_EVENT, { detail: { value: nextValue } }))
}

function useRecruiterMode() {
  const [recruiterMode, setRecruiterModeState] = useState(() => readRecruiterMode())

  const setRecruiterMode = useCallback((nextValue) => {
    setRecruiterModeState(nextValue)
    writeRecruiterMode(nextValue)
  }, [])

  const toggleRecruiterMode = useCallback(() => {
    setRecruiterMode(!recruiterMode)
  }, [recruiterMode, setRecruiterMode])

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === RECRUITER_MODE_KEY) {
        setRecruiterModeState(event.newValue === '1')
      }
    }

    const onRecruiterChange = (event) => {
      setRecruiterModeState(Boolean(event.detail?.value))
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(RECRUITER_MODE_EVENT, onRecruiterChange)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(RECRUITER_MODE_EVENT, onRecruiterChange)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('recruiter-view', recruiterMode)
  }, [recruiterMode])

  return { recruiterMode, setRecruiterMode, toggleRecruiterMode }
}

export default useRecruiterMode
