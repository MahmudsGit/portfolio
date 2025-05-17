"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-12 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
              <CountUp end={3} suffix="+" />
            </h3>
            <p className="text-gray-400 mt-2">Years of experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
              <CountUp end={15} suffix="+" />
            </h3>
            <p className="text-gray-400 mt-2">Projects completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
              <CountUp end={10} suffix="+" />
            </h3>
            <p className="text-gray-400 mt-2">Technologies mastered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
              <CountUp end={500} suffix="+" />
            </h3>
            <p className="text-gray-400 mt-2">Code commits</p>
          </div>
        </div>
      </div>
    </section>
  )
}
