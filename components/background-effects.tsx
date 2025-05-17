"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/context/theme-context"

export default function BackgroundEffects() {
  const starsRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const glowingOrbsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    // Create stars
    if (starsRef.current) {
      const starsContainer = starsRef.current
      starsContainer.innerHTML = ""

      const starCount = 150

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.classList.add("star")

        // Random position
        const x = Math.random() * 100
        const y = Math.random() * 100

        // Random size
        const size = Math.random() * 2

        // Random opacity and animation duration
        const opacity = Math.random() * 0.8 + 0.2
        const duration = Math.random() * 3 + 2
        const delay = Math.random() * 5

        star.style.left = `${x}%`
        star.style.top = `${y}%`
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.setProperty("--opacity", opacity.toString())
        star.style.setProperty("--duration", `${duration}s`)
        star.style.setProperty("--delay", `${delay}s`)

        starsContainer.appendChild(star)
      }
    }

    // Create flowing lines
    if (linesRef.current) {
      const linesContainer = linesRef.current
      linesContainer.innerHTML = ""

      // Create SVG element for flowing lines
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "100%")
      svg.setAttribute("height", "100%")
      svg.setAttribute("viewBox", "0 0 1440 800")
      svg.setAttribute("preserveAspectRatio", "none")
      svg.style.position = "absolute"
      svg.style.top = "0"
      svg.style.left = "0"
      svg.style.zIndex = "-1"
      svg.style.opacity = "0.4"

      // Create multiple paths for flowing lines
      const lineCount = 8
      const paths = []

      for (let i = 0; i < lineCount; i++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")

        // Set the line color based on theme
        if (theme === "purple") {
          path.setAttribute("stroke", `rgba(139, 92, 246, ${0.2 + i * 0.05})`)
        } else if (theme === "light") {
          path.setAttribute("stroke", `rgba(59, 130, 246, ${0.1 + i * 0.03})`)
        } else {
          path.setAttribute("stroke", `rgba(16, 185, 129, ${0.2 + i * 0.05})`)
        }

        path.setAttribute("fill", "none")
        path.setAttribute("stroke-width", "1")
        path.setAttribute("stroke-linecap", "round")

        // Create a wavy path
        const startY = 100 + i * 80
        let d = `M0,${startY}`

        for (let x = 100; x <= 1440; x += 100) {
          const y = startY + Math.sin((x + i * 50) / 200) * 50
          d += ` ${x},${y}`
        }

        path.setAttribute("d", d)
        path.classList.add("flowing-line")
        path.style.animationDelay = `${i * 0.5}s`

        svg.appendChild(path)
        paths.push(path)
      }

      // Add diagonal lines
      for (let i = 0; i < 10; i++) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line")

        const x1 = Math.random() * 1440
        const y1 = Math.random() * 800
        const length = 100 + Math.random() * 200
        const angle = Math.random() * Math.PI * 2

        const x2 = x1 + Math.cos(angle) * length
        const y2 = y1 + Math.sin(angle) * length

        line.setAttribute("x1", x1.toString())
        line.setAttribute("y1", y1.toString())
        line.setAttribute("x2", x2.toString())
        line.setAttribute("y2", y2.toString())

        if (theme === "purple") {
          line.setAttribute("stroke", "rgba(139, 92, 246, 0.2)")
        } else if (theme === "light") {
          line.setAttribute("stroke", "rgba(59, 130, 246, 0.1)")
        } else {
          line.setAttribute("stroke", "rgba(16, 185, 129, 0.2)")
        }

        line.setAttribute("stroke-width", "1")
        svg.appendChild(line)
      }

      linesContainer.appendChild(svg)
    }

    // Create glowing orbs
    if (glowingOrbsRef.current) {
      const orbsContainer = glowingOrbsRef.current
      orbsContainer.innerHTML = ""

      const orbCount = 5

      for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement("div")
        orb.classList.add("glowing-orb")

        // Random position
        const x = 10 + Math.random() * 80
        const y = 10 + Math.random() * 80

        // Random size
        const size = 30 + Math.random() * 100

        // Random animation duration and delay
        const duration = 15 + Math.random() * 20
        const delay = Math.random() * 5

        orb.style.left = `${x}%`
        orb.style.top = `${y}%`
        orb.style.width = `${size}px`
        orb.style.height = `${size}px`
        orb.style.animationDuration = `${duration}s`
        orb.style.animationDelay = `${delay}s`

        // Set color based on theme
        if (theme === "purple") {
          orb.classList.add("purple-theme")
        } else if (theme === "light") {
          orb.classList.add("light-theme")
        } else {
          orb.classList.add("dark-theme")
        }

        orbsContainer.appendChild(orb)
      }
    }
  }, [theme])

  return (
    <>
      <div ref={starsRef} className="stars"></div>
      <div ref={linesRef} className="flowing-lines"></div>
      <div ref={glowingOrbsRef} className="glowing-orbs"></div>
    </>
  )
}
