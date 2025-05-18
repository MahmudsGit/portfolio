"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText, ArrowDown, Download } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useTheme } from "@/context/theme-context"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { clientX, clientY } = e
      const rect = imageRef.current.getBoundingClientRect()
      const x = clientX - rect.left - rect.width / 2
      const y = clientY - rect.top - rect.height / 2

      // Limit the rotation to a small amount
      const maxRotation = 10
      const rotateX = (y / rect.height) * maxRotation
      const rotateY = (x / rect.width) * maxRotation

      imageRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
    }

    // Reset transform when mouse leaves the window or on scroll
    const handleReset = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleReset)
    window.addEventListener("mouseleave", handleReset)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleReset)
      window.removeEventListener("mouseleave", handleReset)
    }
  }, [])

  const getAccentColor = () => {
    if (theme === "purple") return "text-purple-500"
    if (theme === "light") return "text-blue-600"
    return "text-emerald-500"
  }

  const getTypeAnimationClass = () => {
    if (theme === "purple") return "text-white bg-purple-500 border-[3px] border-blue-400"
    if (theme === "light") return "text-white bg-blue-600 border-[3px] border-indigo-400"
    return "text-white bg-emerald-500 border-[3px] border-teal-400"
  }

  const getPrimaryButtonGradient = () => {
    if (theme === "purple")
      return "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    if (theme === "light") return "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
    return "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
  }

  const getSecondaryButtonBorder = () => {
    if (theme === "purple") return "border-gray-700 hover:border-purple-400"
    if (theme === "light") return "border-gray-300 hover:border-blue-500"
    return "border-gray-700 hover:border-emerald-400"
  }

  const getImageBorderGradient = () => {
    if (theme === "purple") return "bg-gradient-to-r from-purple-400 to-pink-600"
    if (theme === "light") return "bg-gradient-to-r from-blue-500 to-indigo-500"
    return "bg-gradient-to-r from-emerald-400 to-emerald-600"
  }

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="h-10 flex items-center">
              <div className="relative">
                <TypeAnimation
                  sequence={["Web Developer", 2000, "Backend Developer", 2000, "Software Engineer", 2000]}
                  wrapper="h2"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className={`text-lg md:text-xl font-medium px-4 py-1 rounded ${getTypeAnimationClass()} relative z-10`}
                />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-400"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-400"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className={getAccentColor()}>Mahmud</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">
              I have 3+ years of industrial experience in PHP web application debugging, object-oriented programming,
              and MVC web architecture. Specialized in developing back-end of web applications through Laravel.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className={`flex items-center justify-center h-12 px-8 rounded-full text-white font-medium transition-colors ${getPrimaryButtonGradient()}`}
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className={`flex items-center justify-center h-12 px-8 rounded-full border ${getSecondaryButtonBorder()} text-foreground font-medium transition-colors`}
              >
                View Projects
              </Link>
              <Link
                href="https://drive.google.com/file/d/1MuJpV0Y8e6ux75uVwPaIYlj0LA6FxmCx/view?usp=sharing"
                download
                className={`flex items-center justify-center h-12 w-12 rounded-full border ${getSecondaryButtonBorder()} text-foreground font-medium transition-colors`}
                title="Download Resume"
                target="blank"
              >
                <Download size={20} />
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${getSecondaryButtonBorder()} transition-colors`}
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${getSecondaryButtonBorder()} transition-colors`}
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${getSecondaryButtonBorder()} transition-colors`}
              >
                <FileText size={18} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              ref={imageRef}
              className="relative transition-transform duration-200 ease-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative">
                <div className={`absolute inset-0 rounded-full ${getImageBorderGradient()} animate-spin-slow`}></div>
                <div className="absolute inset-2 rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src="/profile.jpeg"
                      alt="Mahmud"
                      fill
                      className={`object-cover transition-all duration-500 ${isHovered ? "filter-none brightness-110" : "grayscale blur-sm"}`}
                      sizes="(max-width: 768px) 256px, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
