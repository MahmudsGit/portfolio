"use client"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TimelineItemProps {
  title: string
  company: string
  date: string
  description: string[]
  icon: string
  isLeft: boolean
}

function TimelineItem({ title, company, date, description, icon, isLeft }: TimelineItemProps) {
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
      className={`mb-12 flex ${isLeft ? "flex-row-reverse" : "flex-row"}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className={`w-1/2 ${isLeft ? "pl-8" : "pr-8"} ${isLeft ? "text-right" : "text-left"}`}>
        <div className={`flex items-center mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
          <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        <div className={`flex items-center mb-4 ${isLeft ? "justify-end" : "justify-start"}`}>
          <span className="text-emerald-400 font-medium">{company}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-gray-400">{date}</span>
        </div>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className={`text-gray-300 flex items-start ${isLeft ? "justify-end" : "justify-start"}`}>
              {isLeft && <span>{item}</span>}
              <span className="text-emerald-400 mx-2">•</span>
              {!isLeft && <span>{item}</span>}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-emerald-400 mb-2">WHAT I HAVE DONE SO FAR</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Work Experience.</h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2"></div>

            {/* Timeline dots */}
            <div className="absolute left-1/2 top-0 w-5 h-5 rounded-full bg-emerald-400 transform -translate-x-1/2 z-10"></div>
            <div className="absolute left-1/2 top-1/3 w-5 h-5 rounded-full bg-emerald-400 transform -translate-x-1/2 z-10"></div>
            <div className="absolute left-1/2 top-2/3 w-5 h-5 rounded-full bg-emerald-400 transform -translate-x-1/2 z-10"></div>

            {/* Experience items */}
            <TimelineItem
              title="Software Engineer (Back-End)"
              company="BluePower Media"
              date="Jun 7, 2024 - Present"
              description={[
                "Contributed to their backend of an SaaS CRM product, creating well-documented REST APIs and implementing integration into frontend using react, and delivering highly scalable and maintainable web solutions.",
              ]}
              icon="https://placeholder.svg?height=50&width=50"
              isLeft={false}
            />

            <TimelineItem
              title="Software Engineer"
              company="Deligent Soft It"
              date="Mar 10, 2023 - May 4, 2024"
              description={[
                "Contributed to various projects, including ERP and inventory software, by analyzing client requirements, utilizing Laravel's REST API integration, and delivering customized solutions.",
                "Collaborated with clients, develop efficient systems, ensuring seamless communication and optimized data management for enhanced productivity.",
              ]}
              icon="https://placeholder.svg?height=50&width=50"
              isLeft={true}
            />

            <TimelineItem
              title="Web Developer (Back-End)"
              company="UIHUT"
              date="Jun 05, 2022 - Feb 28, 2023"
              description={[
                "Built the Backend of the various Applications using Laravel. Such as website builder Extor (premade html templates) and Flowbri (premade webflow templates), both are premium SaaS product that helps developers to build websites faster without concerning the design so that he/she can focus on the functions.",
                "Therewithal I've Worked with Wordpress addons Development for an upcoming Addons of Elementor Named Angel Addons.",
              ]}
              icon="https://placeholder.svg?height=50&width=50"
              isLeft={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
