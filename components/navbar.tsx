"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = document.querySelectorAll("section[id]")
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-1">
          <span>Mahmud</span>
          <span
            className={`${theme === "purple" ? "text-purple-400" : theme === "light" ? "text-blue-500" : "text-emerald-400"}`}
          >
            .
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"].map((item) => {
            const sectionId = item.toLowerCase()
            return (
              <Link
                key={item}
                href={`#${sectionId}`}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === sectionId
                    ? theme === "purple"
                      ? "text-purple-400"
                      : theme === "light"
                        ? "text-blue-500"
                        : "text-emerald-400"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    activeSection === sectionId ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    theme === "purple"
                      ? "bg-gradient-to-r from-purple-400 to-pink-500"
                      : theme === "light"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                        : "bg-gradient-to-r from-emerald-400 to-teal-500"
                  }`}
                ></span>
              </Link>
            )
          })}
        </nav>

        <Link
          href="#contact"
          className={`hidden md:flex items-center justify-center h-10 px-6 rounded-full text-white font-medium transition-colors ${
            theme === "purple"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              : theme === "light"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
          }`}
        >
          Contact me
        </Link>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 pt-20">
          <nav className="flex flex-col items-center gap-6 p-4">
            {["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"].map((item) => {
              const sectionId = item.toLowerCase()
              return (
                <Link
                  key={item}
                  href={`#${sectionId}`}
                  className={`text-xl font-medium transition-colors ${
                    activeSection === sectionId
                      ? theme === "purple"
                        ? "text-purple-400"
                        : theme === "light"
                          ? "text-blue-500"
                          : "text-emerald-400"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            })}
            <Link
              href="#contact"
              className={`mt-4 flex items-center justify-center h-12 px-8 rounded-full text-white font-medium transition-colors ${
                theme === "purple"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  : theme === "light"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
