import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import CustomCursor from './components/ui/CustomCursor'
import DynamicBackground from './components/ui/DynamicBackground'
import Reveal from './components/ui/Reveal'
import ShieldRecharge from './components/ui/ShieldRecharge'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import DataTerminalsSection from './sections/DataTerminalsSection'
import HomeSection from './sections/HomeSection'
import ProjectsSection from './sections/ProjectsSection'

const BOOT_STORAGE_KEY = 'halo-portfolio-boot-seen-at'
const BOOT_COOLDOWN_MS = 1000 * 60 * 60 * 8
const TAB_INACTIVE_MS_FOR_GLITCH = 30000

function shouldShowBootScreen() {
  const now = Date.now()
  const lastBoot = Number(window.localStorage.getItem(BOOT_STORAGE_KEY) ?? 0)
  return !lastBoot || now - lastBoot > BOOT_COOLDOWN_MS
}

function App() {
  const [isBooting, setIsBooting] = useState(() => shouldShowBootScreen())

  useEffect(() => {
    if (!isBooting) return undefined

    window.localStorage.setItem(BOOT_STORAGE_KEY, String(Date.now()))
    // 4 lineas x ~220ms delay + margen de lectura = ~2200ms
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [isBooting])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('cortana-mode')

    let inactiveAt = Date.now()

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        inactiveAt = Date.now()
        return
      }

      const gap = Date.now() - inactiveAt
      if (gap > TAB_INACTIVE_MS_FOR_GLITCH) {
        document.body.classList.add('hud-glitch')
        window.setTimeout(() => {
          document.body.classList.remove('hud-glitch')
        }, 420)
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      document.documentElement.classList.remove('cortana-mode')
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <ShieldRecharge />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9990] [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.05)_3px,rgba(0,0,0,0.05)_4px)]"
      />
      <DynamicBackground />
      <NavBar />
      <AnimatePresence>{isBooting ? <LoadingScreen key="boot" /> : null}</AnimatePresence>
      <main className="mx-auto w-full max-w-6xl space-y-6 px-6 pb-6 pt-24 md:space-y-8 md:px-10 md:pb-10 md:pt-28">
        <Reveal delay={80}>
          <HomeSection />
        </Reveal>
        <Reveal delay={100}>
          <AboutSection />
        </Reveal>
        <Reveal delay={120}>
          <ProjectsSection />
        </Reveal>
        <Reveal delay={130}>
          <DataTerminalsSection />
        </Reveal>
        <Reveal delay={160}>
          <ContactSection />
        </Reveal>
        <Footer />
      </main>
    </>
  )
}

export default App
