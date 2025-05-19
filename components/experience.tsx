"use client"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useTheme } from "@/context/theme-context"

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

  const getSecondaryTextColor = () => {
    if (theme === "light") return "text-gray-500"
    return "text-gray-400"
  }

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
      <div className={`w-1/2 ${isLeft ? "pl-8" : "pr-8"} text-left`}>
        <div className={`flex items-center mb-2 justify-start`}>
          <h4 className={`text-xl font-bold ${getTextColor()}`}>{title}</h4>
        </div>
        <div className={`flex items-center mb-4 justify-start`}>
          <span className={getAccentColor()}>{company}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className={getSecondaryTextColor()}>{date}</span>
        </div>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li
            key={index}
            className="text-foreground/80 flex items-start justify-start"
          >
            <span className={`${getAccentColor()} mr-2`}>•</span>
            <span>{item}</span>
          </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { theme } = useTheme()

  const getDotColor = () => {
    if (theme === "purple") return "bg-purple-400"
    if (theme === "light") return "bg-blue-500"
    return "bg-emerald-400"
  }

  const getLineColor = () => {
    if (theme === "purple") return "bg-gray-700"
    if (theme === "light") return "bg-gray-300"
    return "bg-gray-700"
  }

  const getHeadingColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-sm uppercase tracking-wider ${getHeadingColor()} mb-2`}>WHAT I HAVE DONE SO FAR</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Work Experience.</h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-1 ${getLineColor()} transform -translate-x-1/2`}></div>

            {/* Timeline dots */}
            <div
              className={`absolute left-1/2 top-0 w-3 h-12 rounded-full ${getDotColor()} transform -translate-x-1/2 z-10`}
            ></div>
            <div
              className={`absolute left-1/2 top-2/4 w-3 h-12 rounded-full ${getDotColor()} transform -translate-x-1/2 z-10`}
            ></div>
            <div
              className={`absolute left-1/2 top-3/4 w-3 h-12 rounded-full ${getDotColor()} transform -translate-x-1/2 z-10`}
            ></div>

            {/* Experience items */}
            <TimelineItem
              title="Software Engineer (Back-End)"
              company="BluePower Media"
              date="Jun 7, 2024 - Present"
              description={[
                "Developed and documented RESTful APIs and integrated third-party services, including SMS, Email, Zoom meeting, payment gateway APIs, etc.",
                "Worked on both backend and frontend of a SaaS Project Management System, delivering scalable, maintainable and efficient web solutions.",
                "Implemented React-based SPA with API integration for smooth interaction and efficient data handling.",
                "Utilized Jira for sprint planning, task tracking, and team collaboration in Agile environments.",
                "Led 2 junior developers with mentoring, technical guidance, and task delegation for timely, quality delivery.",
              ]}
              icon="https://placeholder.svg?height=50&width=50"
              isLeft={false}
            />

            <TimelineItem
              title="Software Engineer"
              company="Deligent Soft It"
              date="Mar 10, 2023 - May 4, 2024"
              description={[
                "Contributed to various projects, including customized ERP and Inventory software, by analyzing client requirements, real-time features, and delivering customized solutions.",
                "Refactored outdated codebases, enhancing system performance and maintainability by up to 30%.",
                "Collaborated with clients, developed efficient systems, ensuring seamless communication and optimized data management for enhanced productivity.",
              ]}
              icon="https://placeholder.svg?height=50&width=50"
              isLeft={true}
            />

            <TimelineItem
              title="Web Developer (Back-End)"
              company="UIHUT"
              date="Jun 05, 2022 - Feb 28, 2023"
              description={[
                "Built the backend of various premium SaaS products, including website builders using premade HTML and Webflow templates, developed with Laravel.",
                "Worked with WordPress and contributed to developing a new Elementor addon named Angel Addons.",
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
