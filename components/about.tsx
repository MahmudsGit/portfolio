"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Layout, Shield } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/context/theme-context"

export default function About() {
  const { theme } = useTheme()

  const getGradient = () => {
    if (theme === "purple") return "from-purple-500/20 to-pink-500/20"
    if (theme === "light") return "from-blue-500/20 to-cyan-500/20"
    return "from-emerald-500/20 to-teal-500/20"
  }

  const getTextColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-500"
    return "text-emerald-400"
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-sm uppercase tracking-wider ${getTextColor()} mb-2`}>INTRODUCTION</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Overview.</h3>
          <p className="text-foreground/80 text-lg">
            I'm a skilled software developer with a strong foundation in PHP Web Application Debugging, Object-Oriented
            Programming (OOP), and MVC Web architecture. I specialize in developing back-end of web applications through
            Laravel. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard
            title="Web Developer"
            description="Developing robust and scalable web applications using PHP, Laravel, and modern web technologies."
            icon={<Layout className={getTextColor()} />}
            iconSrc="/icons/html5.png"
          />

          <OverviewCard
            title="Backend Developer"
            description="Creating efficient APIs, database structures, and server-side logic for web applications."
            icon={<Code className={getTextColor()} />}
            iconSrc="/icons/laravel.png"
          />

          <OverviewCard
            title="Database Expert"
            description="Designing and optimizing database schemas for performance and scalability."
            icon={<Database className={getTextColor()} />}
            iconSrc="/icons/database.png"
          />

          <OverviewCard
            title="Security Expert"
            description="Implementing best practices for web application security and data protection."
            icon={<Shield className={getTextColor()} />}
            iconSrc="/icons/security.png"
          />
        </div>
      </div>
    </section>
  )
}

interface OverviewCardProps {
  title: string
  description: string
  icon: React.ReactNode
  iconSrc: string
}

function OverviewCard({ title, description, icon, iconSrc }: OverviewCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  const getGradient = () => {
    if (theme === "purple") return "from-[#1a1a24] to-[#252532] hover:shadow-purple-500/10"
    if (theme === "light") return "from-gray-100 to-white hover:shadow-blue-500/10"
    return "from-[#1a1a24] to-[#252532] hover:shadow-emerald-500/10"
  }

  const getIconGradient = () => {
    if (theme === "purple") return "from-purple-500/20 to-pink-500/20"
    if (theme === "light") return "from-blue-500/20 to-cyan-500/20"
    return "from-emerald-500/20 to-teal-500/20"
  }

  return (
    <motion.div
      className={`relative bg-gradient-to-br ${getGradient()} p-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div
          className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${getIconGradient()} flex items-center justify-center transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {icon}
        </div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-foreground/70">{description}</p>
      </div>

      {/* 3D Model or Icon */}
      <div
        className={`absolute top-5 right-5 w-20 h-20 opacity-20 transition-all duration-500 ${
          isHovered ? "opacity-60 scale-125" : ""
        }`}
      >
        <Image
          src={iconSrc || "/placeholder.svg"}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
