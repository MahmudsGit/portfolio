"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function Footer() {
  const { theme } = useTheme()

  const companies = [
    { name: "BluePower Media", url: "https://bluepowermedia.com" },
    { name: "Deligent Soft It", url: "https://deligentsoft.com" },
    { name: "UIHUT", url: "https://uihut.com" },
  ]

  const projects = [
    { name: "Codecanyon Projects", url: "#projects" },
    { name: "NGO Website", url: "#projects" },
    { name: "SaaS CRM", url: "#projects" },
    { name: "ERP System", url: "#projects" },
  ]

  const getBorderColor = () => {
    if (theme === "purple") return "border-gray-800"
    if (theme === "light") return "border-gray-200"
    return "border-gray-800"
  }

  const getLinkColor = () => {
    if (theme === "purple") return "text-gray-400 hover:text-purple-400"
    if (theme === "light") return "text-gray-600 hover:text-blue-500"
    return "text-gray-400 hover:text-emerald-400"
  }

  const getAccentColor = () => {
    if (theme === "purple") return "text-purple-400"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-400"
  }

  return (
    <footer className={`py-12 border-t ${getBorderColor()}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold flex items-center gap-1 mb-4">
              <span>Mahmud</span>
              <span className={getAccentColor()}>.</span>
            </Link>
            <p className="text-foreground/70 mb-4">
              A passionate Backend Developer with expertise in PHP, Laravel, and web technologies. Building scalable and
              efficient web applications.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/MahmudsGit" target="_blank" className={getLinkColor()}>
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/golammahmud/" target="_blank" className={getLinkColor()}>
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:golammahmud1314@gmail.com" className={getLinkColor()}>
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Companies</h4>
            <ul className="space-y-2">
              {companies.map((company, index) => (
                <li key={index}>
                  <Link href={company.url} target="_blank" className={`${getLinkColor()} flex items-center gap-1`}>
                    <ExternalLink size={14} />
                    <span>{company.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link href={project.url} className={getLinkColor()}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <span className="block">Mirpur-2, Dhaka</span>
                <span className="block">Bangladesh</span>
              </li>
              <li>
                <Link href="tel:+8801743871007" className={getLinkColor()}>
                  +880 1743 871007
                </Link>
              </li>
              <li>
                <Link href="mailto:golammahmud1314@gmail.com" className={getLinkColor()}>
                  golammahmud1314@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${getBorderColor()} pt-8 text-center`}>
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Golam Mahmud. All rights reserved. | Designed with ❤️ using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
