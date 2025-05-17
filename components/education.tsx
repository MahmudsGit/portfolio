"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useTheme } from "@/context/theme-context"

interface TimelineItemProps {
  title: string
  institution: string
  description: string
  year: string
}

function TimelineItem({ title, institution, description, year }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()
  const { theme } = useTheme()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const getAccentColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

  const getTextColor = () => {
    if (theme === "light") return "text-gray-700"
    return "text-white"
  }

  return (
    <motion.div
      ref={ref}
      className="mb-12"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex items-center mb-2">
        <h4 className={`text-xl font-bold ${getTextColor()}`}>{title}</h4>
      </div>
      <div className="flex items-center mb-2">
        <span className={getAccentColor()}>{institution}</span>
        <span className="mx-2 text-gray-500">•</span>
        <span className="text-foreground/60">{year}</span>
      </div>
      <p className="text-foreground/80">{description}</p>
    </motion.div>
  )
}

export default function Education() {
  const { theme } = useTheme()

  const getDotColor = () => {
    if (theme === "purple") return "bg-purple-400"
    if (theme === "light") return "bg-blue-500"
    return "bg-emerald-400"
  }

  const getLineColor = () => {
    if (theme === "purple") return "border-gray-700"
    if (theme === "light") return "border-gray-300"
    return "border-gray-700"
  }

  const getHeadingColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-sm uppercase tracking-wider ${getHeadingColor()} mb-2`}>MY BACKGROUND</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Education & Certifications</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative border-l ${getLineColor()} pl-8 ml-4`}>
            {/* Timeline dots and lines are rendered here */}
            <div
              className={`absolute left-0 top-0 w-3 h-3 rounded-full ${getDotColor()} transform -translate-x-1.5`}
            ></div>
            <div
              className={`absolute left-0 top-1/3 w-3 h-3 rounded-full ${getDotColor()} transform -translate-x-1.5`}
            ></div>
            <div
              className={`absolute left-0 top-2/3 w-3 h-3 rounded-full ${getDotColor()} transform -translate-x-1.5`}
            ></div>

            {/* Education items */}
            <TimelineItem
              title="BACHELOR OF SCIENCE"
              institution="European University of Bangladesh, Gabtoli, Dhaka"
              description="Computer Science & Engineering - 3.42 Out of 4"
              year="2021"
            />

            <TimelineItem
              title="DIPLOMA IN ENGINEERING"
              institution="Rajshahi Polytechnic Institute"
              description="Computer Science & Engineering"
              year="2018"
            />

            <TimelineItem
              title="Web App Development PHP Training"
              institution="BASIS Institute of Technology & Management (BITM)"
              description="Completed a Training Program on Web App Development PHP"
              year="2022"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
