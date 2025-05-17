"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type SkillCategory = "frontend" | "backend" | "database" | "tools" | "all"

interface Skill {
  name: string
  icon: string
  category: SkillCategory | SkillCategory[]
}

const skills: Skill[] = [
  { name: "HTML5", icon: "devicon-html5-plain", category: "frontend" },
  { name: "CSS3", icon: "devicon-css3-plain", category: "frontend" },
  { name: "JavaScript", icon: "devicon-javascript-plain", category: ["frontend", "backend"] },
  { name: "Vue.js", icon: "devicon-vuejs-plain", category: "frontend" },
  { name: "jQuery", icon: "devicon-jquery-plain", category: "frontend" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", category: "frontend" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain", category: "frontend" },
  { name: "PHP", icon: "devicon-php-plain", category: "backend" },
  { name: "Laravel", icon: "devicon-laravel-plain", category: "backend" },
  { name: "Node.js", icon: "devicon-nodejs-plain", category: "backend" },
  { name: "MySQL", icon: "devicon-mysql-plain", category: "database" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "database" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", category: "database" },
  { name: "WordPress", icon: "devicon-wordpress-plain", category: "tools" },
  { name: "Webflow", icon: "devicon-webflow-original", category: "tools" },
  { name: "Docker", icon: "devicon-docker-plain", category: "tools" },
  { name: "Git", icon: "devicon-git-plain", category: "tools" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all")

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) =>
          Array.isArray(skill.category) ? skill.category.includes(activeCategory) : skill.category === activeCategory,
        )

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-emerald-400 mb-2">WHAT I CAN DO</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h3>
          <p className="text-gray-300 mb-8">
            I've worked with a range of technologies in the web development world, from back-end to design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="w-full md:w-1/4">
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                    activeCategory === "all"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#1a1a24] to-[#252532] text-gray-300 hover:from-[#252532] hover:to-[#2a2a35]"
                  }`}
                >
                  All Skills
                </button>
                <button
                  onClick={() => setActiveCategory("frontend")}
                  className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                    activeCategory === "frontend"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#1a1a24] to-[#252532] text-gray-300 hover:from-[#252532] hover:to-[#2a2a35]"
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setActiveCategory("backend")}
                  className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                    activeCategory === "backend"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#1a1a24] to-[#252532] text-gray-300 hover:from-[#252532] hover:to-[#2a2a35]"
                  }`}
                >
                  Backend
                </button>
                <button
                  onClick={() => setActiveCategory("database")}
                  className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                    activeCategory === "database"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#1a1a24] to-[#252532] text-gray-300 hover:from-[#252532] hover:to-[#2a2a35]"
                  }`}
                >
                  Database
                </button>
                <button
                  onClick={() => setActiveCategory("tools")}
                  className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                    activeCategory === "tools"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#1a1a24] to-[#252532] text-gray-300 hover:from-[#252532] hover:to-[#2a2a35]"
                  }`}
                >
                  Tools & Others
                </button>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="bg-gradient-to-br from-[#1a1a24] to-[#252532] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">
                  {activeCategory === "all"
                    ? "All Skills"
                    : activeCategory === "frontend"
                      ? "Frontend Technologies"
                      : activeCategory === "backend"
                        ? "Backend Technologies"
                        : activeCategory === "database"
                          ? "Database Technologies"
                          : "Tools & Other Technologies"}
                </h4>
                <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredSkills.map((skill, index) => (
                      <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, icon, index }: { name: string; icon: string; index: number }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#252532] to-[#2a2a35] rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, -2, 0],
        transition: {
          duration: 0.3,
          rotate: { repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 0.5 },
        },
      }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3">
        <i className={`${icon} text-3xl text-emerald-400`}></i>
      </div>
      <h4 className="text-sm font-medium text-center">{name}</h4>
    </motion.div>
  )
}
