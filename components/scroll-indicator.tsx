"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/context/theme-context"

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme } = useTheme()

  const getProgressGradient = () => {
    if (theme === "purple") return "from-purple-400 to-pink-600"
    if (theme === "light") return "from-blue-400 to-cyan-600"
    return "from-emerald-400 to-teal-600"
  }

  const getActiveDotColor = () => {
    if (theme === "purple") return "bg-gradient-to-r from-purple-400 to-pink-600"
    if (theme === "light") return "bg-gradient-to-r from-blue-400 to-cyan-600"
    return "bg-gradient-to-r from-emerald-400 to-teal-600"
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const navItems = {
      home: 0,
      about: 1,
      experience: 2,
      skills: 3,
      projects: 4,
      education: 5,
      contact: 6,
    }

    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      let current = ""
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = section.getBoundingClientRect().top

        // Adjust this value based on when you want the section to be considered "active"
        const offset = 200

        if (sectionTop < offset) {
          current = sectionId
        }
      })

      if (current && current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <>
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className={`h-full bg-gradient-to-r ${getProgressGradient()}`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Section indicator on the right side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          {["home", "about", "experience", "skills", "projects", "education", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-6 h-0.5 transition-all duration-300 ${
                activeSection === section
                  ? getActiveDotColor()
                  : theme === "light"
                    ? "bg-gray-400 hover:bg-gray-600"
                    : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Scroll to ${section} section`}
            ></a>
          ))}
        </div>
      </div>
    </>
  )
}
