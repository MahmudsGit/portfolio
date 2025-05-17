"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

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

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-emerald-400 font-medium">{institution}</span>
        <span className="mx-2 text-gray-500">•</span>
        <span className="text-gray-400">{year}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-emerald-400 mb-2">MY BACKGROUND</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Education & Certifications</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-700 pl-8 ml-4">
            {/* Timeline dots and lines are rendered here */}
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-emerald-400 transform -translate-x-1.5"></div>
            <div className="absolute left-0 top-1/3 w-3 h-3 rounded-full bg-emerald-400 transform -translate-x-1.5"></div>
            <div className="absolute left-0 top-2/3 w-3 h-3 rounded-full bg-emerald-400 transform -translate-x-1.5"></div>

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
