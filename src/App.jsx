import { MotionConfig } from 'framer-motion'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import DynamicBackground from './components/ui/DynamicBackground'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HomeSection from './sections/HomeSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <DynamicBackground />
      <NavBar />
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-8 pt-28 md:space-y-16 md:px-8">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </MotionConfig>
  )
}
