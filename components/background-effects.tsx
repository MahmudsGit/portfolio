"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffects() {
  const starsRef = useRef<HTMLDivElement>(null)
  const stripesRef = useRef<HTMLDivElement>(null)

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

    // Create stripe lines
    if (stripesRef.current) {
      const stripesContainer = stripesRef.current
      stripesContainer.innerHTML = ""

      const stripeCount = 10

      for (let i = 0; i < stripeCount; i++) {
        const stripe = document.createElement("div")
        stripe.classList.add("stripe")

        // Random position and animation delay
        const y = Math.random() * 100
        const delay = Math.random() * 8

        stripe.style.top = `${y}%`
        stripe.style.animationDelay = `${delay}s`

        stripesContainer.appendChild(stripe)
      }
    }
  }, [])

  return (
    <>
      <div ref={starsRef} className="stars"></div>
      <div ref={stripesRef} className="stripe-lines"></div>
    </>
  )
}
