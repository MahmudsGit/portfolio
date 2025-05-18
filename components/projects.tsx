"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, ExternalLink, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/context/theme-context"

type Project = {
  id: number
  title: string
  description: string
  image: string
  screenshots: string[]
  tags: string[]
  github: string
  demo: string
  category: "frontend" | "backend" | "fullstack"
  company: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "WorkOwl - Company base Custom Project Managment",
    description: "Contributed to backend of a SaaS CRM product with REST APIs and frontend integration.",
    image: "/projects/workowl/workowl_dashboard.png?height=400&width=600",
    screenshots: [
      "/projects/workowl/workowl_dashboard.png?height=600&width=800",
      "/projects/workowl/workowl_clients.png?height=600&width=800",
      "/projects/workowl/workowl_projects.png?height=600&width=800",
      "/projects/workowl/workowl_project_overview.png?height=600&width=800",
      "/projects/workowl/workowl_task_table.png?height=600&width=800",
      "/projects/workowl/workowl_task_details.png?height=600&width=800",
      "/projects/workowl/workowl_task_kanban.png?height=600&width=800",
      "/projects/workowl/workowl_chat.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "API", "MySQL", "RESTful API", "React", "TypeScript"],
    github: "#",
    demo: "https://app.workowl.io/",
    category: "fullstack",
    company: "BlueFlower Media",
    technologies: ["Laravel", "PHP", "MySQL", "RESTful API", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "OrchidArchitect ERP - ERP System",
    description: "Inventory and ERP software with customized solutions based on client requirements.",
    image: "/projects/erp/erp_balance_sheet.png?height=400&width=600",
    screenshots: [
      "/projects/erp/erp_balance_sheet.png?height=600&width=800",
      "/projects/erp/erp_trial_balance.png?height=600&width=800",
      "/projects/erp/erp_profit_loss.png?height=600&width=800",
      "/projects/erp/erp_dashboard.png?height=600&width=800",
      "/projects/erp/erp_attendance.png?height=600&width=800",
      "/projects/erp/erp_leave.png?height=600&width=800",
      "/projects/erp/erp_design_report_labour.png?height=600&width=800",
      "/projects/erp/erp_project_deal.png?height=600&width=800",
      "/projects/erp/erp_projects.png?height=600&width=800",
      "/projects/erp/erp_user_role.png?height=600&width=800",
      "/projects/erp/erp_user_permissions.png?height=600&width=800",
      "/projects/erp/erp_purchase.png?height=600&width=800",
      "/projects/erp/erp_purchase_list.png?height=600&width=800",
      "/projects/erp/erp_purchase_report.png?height=600&width=800",
      "/projects/erp/erp_sales.png?height=600&width=800",
      "/projects/erp/erp_sales_list.png?height=600&width=800",
      "/projects/erp/erp_lead_report.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Vue.js"],
    github: "#",
    demo: "https://erp.orchidarchitect.com/",
    category: "fullstack",
    company: "Deligent Soft It",
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    id: 3,
    title: "Dejure Academy - Learning Management System",
    description: "Custom LMS with course management, student tracking, and content delivery features.",
    image: "/projects/dejure/dejure_home.png?height=400&width=600",
    screenshots: [
      "/projects/dejure/dejure_home.png?height=600&width=800",
      "/projects/dejure/dejure_courses.png?height=600&width=800",
      "/projects/dejure/dejure_instructor_dashboard.png?height=600&width=800",
      "/projects/dejure/dejure_student_dashboard.png?height=600&width=800",
      "/projects/dejure/dejure_super_admin_add_course.png?height=600&width=800",
      "/projects/dejure/dejure_super_admin_course.png?height=600&width=800",
      "/projects/dejure/dejure_user_permissions.png?height=600&width=800",
      "/projects/dejure/dejure_user_role.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com",
    demo: "http://dejure.academy/",
    category: "fullstack",
    company: "Deligent Soft It",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    id: 4,
    title: "DodoBazar - classified advertisement website",
    description: "online marketplace, facilitating seamless buying and selling experiences without the need for physical marketplace visits",
    image: "/projects/dodo/dodo_category.png?height=400&width=600",
    screenshots: [
      "/projects/dodo/dodo_category.png?height=600&width=800",
      "/projects/dodo/dodo_products.png?height=600&width=800",
      "/projects/dodo/dodo_product_details.png?height=600&width=800",
      "/projects/dodo/dodo_dashboard_category.png?height=600&width=800",
      "/projects/dodo/dodo_dashboard_subcategory.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    github: "#",
    demo: "https://www.dodobazar.com/",
    category: "backend",
    company: "Deligent Soft It",
    technologies: ["Laravel", "PHP", "Vue.js", "MySQL", "Stripe", "Bootstrap"],
  },
  {
    id: 5,
    title: "Ezytor - Website Builder Backend",
    description: "Backend for a website builder with premade templates to help developers build websites faster.",
    image: "/projects/ezytor/ezytor_landing.png?height=400&width=600",
    screenshots: [
      "/projects/ezytor/ezytor_landing.png?height=600&width=800",
      "/projects/ezytor/ezytor_builder.png?height=600&width=800",
      "/projects/ezytor/ezytor_themes.png?height=600&width=800",
      "/projects/ezytor/ezytor_templete.png?height=600&width=800",
      "/projects/ezytor/ezytor_editor.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "API", "MySQL"],
    github: "#",
    demo: "https://ezytor.com",
    category: "backend",
    company: "UIHUT",
    technologies: ["Laravel", "PHP", "MySQL", "RESTful API", "JavaScript"],
  },
  {
    id: 5,
    title: "FlowGiri - Website Builder Backend",
    description: "Backend for a website builder with premade templates to help developers build websites faster.",
    image: "/projects/flowgiri/flowgiri_landing.png?height=400&width=600",
    screenshots: [
      "/projects/flowgiri/flowgiri_landing.png?height=600&width=800",
      "/projects/flowgiri/flowgiri_theme.png?height=600&width=800",
      "/projects/flowgiri/flowgiri_templates.png?height=600&width=800",
      "/projects/flowgiri/flowgiri_to_webflow.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "API", "MySQL"],
    github: "#",
    demo: "https://flowgiri.com/",
    category: "backend",
    company: "UIHUT",
    technologies: ["Laravel", "PHP", "MySQL", "RESTful API", "JavaScript"],
  },
  {
    id: 6,
    title: "Hisab - Financial Mobile App",
    description: "Daily basis Financial Mobile App Fully Documented Rest Api with feature, functionality and performance.",
    image: "/projects/hisab/hisab_home.png?height=400&width=600",
    screenshots: [
      "/projects/hisab/hisab_home.png?height=600&width=800",
      "/projects/hisab/hisab_login.png?height=600&width=800",
      "/projects/hisab/hisab_starter.png?height=600&width=800",
      "/projects/hisab/hisab_add_expense.png?height=600&width=800",
      "/projects/hisab/hisab_expense.png?height=600&width=800",
      "/projects/hisab/hisab_add_income.png?height=600&width=800",
      "/projects/hisab/hisab_history.png?height=600&width=800",
      "/projects/hisab/hisab_profile.png?height=600&width=800",
      "/projects/hisab/hisab_profile_edit.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "PostGree SQL", "RESTful API"],
    github: "#",
    demo: "#",
    category: "backend",
    company: "Deligent Soft It",
    technologies: ["Laravel", "PHP", "PostGree SQL", "RESTful API"],
  },
  {
    id: 8,
    title: "TaskGlance - Business Operating System",
    description: "Tool that represents platforms to handle all aspects of running a business.",
    image: "/projects/taskglance/taskglance_dashboard_overview.png?height=400&width=600",
    screenshots: [
      "/projects/taskglance/taskglance_dashboard_overview.png?height=600&width=800",
      "/projects/taskglance/taskglance_dashboard_projects.png?height=600&width=800",
      "/projects/taskglance/taskglance_dashboard_team.png?height=600&width=800",
    ],
    tags: ["Laravel", "PHP", "PostGree SQL", "RESTful API", "react.js", "next.js", "Tailwind CSS", "Ant Dsign"],
    github: "#",
    demo: "https://www.homeiliving.com/",
    category: "frontend",
    company: "BlueFlower Media",
    technologies: ["Laravel", "PHP", "PostGree SQL", "RESTful API", "react.js", "next.js", "Tailwind CSS", "Ant Design"],
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "fullstack">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { theme } = useTheme()

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const getGradient = (active: boolean) => {
    if (theme === "purple") {
      return active
        ? "from-purple-500 to-pink-500"
        : "from-[#1a1a24] to-[#252532] hover:from-[#252532] hover:to-[#2a2a35]"
    }
    if (theme === "light") {
      return active ? "from-blue-500 to-cyan-500" : "from-gray-100 to-white hover:from-gray-200 hover:to-gray-100"
    }
    return active
      ? "from-emerald-500 to-teal-500"
      : "from-[#1a1a24] to-[#252532] hover:from-[#252532] hover:to-[#2a2a35]"
  }

  const getTextColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-500"
    return "text-emerald-400"
  }

  const getTagBg = () => {
    if (theme === "purple") return "from-purple-500/10 to-pink-500/10 text-purple-400"
    if (theme === "light") return "from-blue-500/10 to-cyan-500/10 text-blue-500"
    return "from-emerald-500/10 to-teal-500/10 text-emerald-400"
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-sm uppercase tracking-wider ${getTextColor()} mb-2`}>MY WORK</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Projects.</h3>
          <p className="text-foreground/80 mb-8">
            Following projects showcase my skills and experience through real-world examples of my work. Each project is
            briefly described with links to code repositories and live links.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? `bg-gradient-to-r ${getGradient(true)} text-white`
                  : `bg-gradient-to-r ${getGradient(false)} text-foreground/70`
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "frontend"
                  ? `bg-gradient-to-r ${getGradient(true)} text-white`
                  : `bg-gradient-to-r ${getGradient(false)} text-foreground/70`
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory("backend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "backend"
                  ? `bg-gradient-to-r ${getGradient(true)} text-white`
                  : `bg-gradient-to-r ${getGradient(false)} text-foreground/70`
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory("fullstack")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "fullstack"
                  ? `bg-gradient-to-r ${getGradient(true)} text-white`
                  : `bg-gradient-to-r ${getGradient(false)} text-foreground/70`
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="max-h-[800px] overflow-y-auto custom-scrollbar pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                tagBg={getTagBg()}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            tagBg={getTagBg()}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({
  project,
  onClick,
  tagBg,
  theme,
}: {
  project: Project
  onClick: () => void
  tagBg: string
  theme: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  const getCardGradient = () => {
    if (theme === "purple") return "from-[#1a1a24] to-[#252532]"
    if (theme === "light") return "from-gray-100 to-white"
    return "from-[#1a1a24] to-[#252532]"
  }

  const getButtonGradient = () => {
    if (theme === "purple") return "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    if (theme === "light") return "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
    return "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
  }

  const getLinkColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-500"
    return "text-emerald-400"
  }

  return (
    <motion.div
      className={`bg-gradient-to-br ${getCardGradient()} rounded-xl overflow-hidden transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-500 ${isHovered ? "scale-110 blur-sm" : ""}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={onClick}
              className={`bg-gradient-to-r ${getButtonGradient()} text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors`}
            >
              <span>View Details</span>
              <ExternalLink size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 bg-gradient-to-r ${tagBg} rounded-full text-xs`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm text-foreground/70 hover:${getLinkColor()} transition-colors`}
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm text-foreground/70 hover:${getLinkColor()} transition-colors`}
          >
            <ExternalLink size={16} />
            <span>Link</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
  tagBg,
  theme,
}: {
  project: Project
  onClose: () => void
  tagBg: string
  theme: string
}) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const getModalGradient = () => {
    if (theme === "purple") return "from-[#1a1a24] to-[#252532]"
    if (theme === "light") return "from-gray-100 to-white"
    return "from-[#1a1a24] to-[#252532]"
  }

  const getPrimaryButtonGradient = () => {
    if (theme === "purple") return "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    if (theme === "light") return "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
    return "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
  }

  const getSecondaryButtonGradient = () => {
    if (theme === "purple") return "from-[#252532] to-[#2a2a35] hover:from-[#2a2a35] hover:to-[#303040]"
    if (theme === "light") return "from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200"
    return "from-[#252532] to-[#2a2a35] hover:from-[#2a2a35] hover:to-[#303040]"
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`bg-gradient-to-br ${getModalGradient()} rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>

          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

          {/* Screenshots Carousel */}
          <div className="mb-6">
            <div className="relative h-64 md:h-80 mb-2 rounded-lg overflow-hidden">
              <Image
                src={project.screenshots[activeScreenshot] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 800px"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    activeScreenshot === index
                      ? theme === "purple"
                        ? "border-purple-500"
                        : theme === "light"
                          ? "border-blue-500"
                          : "border-emerald-500"
                      : "border-transparent hover:border-gray-500/50"
                  }`}
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-foreground/80 mb-4">{project.description}</p>

              <h4 className="text-lg font-semibold mb-2">Company</h4>
              <p className="text-foreground/80 mb-4">{project.company}</p>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${getPrimaryButtonGradient()} text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors`}
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${getSecondaryButtonGradient()} text-foreground px-4 py-2 rounded-md flex items-center gap-2 transition-colors`}
                >
                  <ExternalLink size={16} />
                  <span>Live Link</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`px-3 py-1 bg-gradient-to-r ${tagBg} rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 bg-gradient-to-r ${
                      theme === "purple"
                        ? "from-[#252532]/50 to-[#2a2a35]/50"
                        : theme === "light"
                          ? "from-gray-200/50 to-gray-100/50"
                          : "from-[#252532]/50 to-[#2a2a35]/50"
                    } rounded-full text-sm text-foreground/80`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
