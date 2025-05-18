import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import BackgroundEffects from "@/components/background-effects"
import ScrollIndicator from "@/components/scroll-indicator"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-hidden">
      <ScrollIndicator />
      <ThemeToggle />
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
    </main>
  )
}
