import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import CustomCursor from './components/ui/CustomCursor'
import DynamicBackground from './components/ui/DynamicBackground'
import Reveal from './components/ui/Reveal'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import HomeSection from './sections/HomeSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    // 4 lineas x ~220ms delay + margen de lectura = ~2200ms
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      {/* Scanline global muy sutil sobre toda la pagina */}
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
          <ExperienceSection />
        </Reveal>
        <Reveal delay={140}>
          <SkillsSection />
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
