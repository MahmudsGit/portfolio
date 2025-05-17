"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { useTheme } from "@/context/theme-context"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const getCountColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

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
    <span ref={ref} className={getCountColor()}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { theme } = useTheme()

  const getBorderColor = () => {
    if (theme === "purple") return "border-gray-800"
    if (theme === "light") return "border-gray-200"
    return "border-gray-800"
  }

  const getTextColor = () => {
    if (theme === "purple") return "text-gray-400"
    if (theme === "light") return "text-gray-600"
    return "text-gray-400"
  }

  return (
    <section className={`py-12 border-y ${getBorderColor()}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">
              <CountUp end={3} suffix="+" />
            </h3>
            <p className={`mt-2 ${getTextColor()}`}>Years of experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">
              <CountUp end={15} suffix="+" />
            </h3>
            <p className={`mt-2 ${getTextColor()}`}>Projects completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">
              <CountUp end={10} suffix="+" />
            </h3>
            <p className={`mt-2 ${getTextColor()}`}>Technologies mastered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold">
              <CountUp end={500} suffix="+" />
            </h3>
            <p className={`mt-2 ${getTextColor()}`}>Code commits</p>
          </div>
        </div>
      </div>
    </section>
  )
}
