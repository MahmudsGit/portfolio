"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Palette } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure this component only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light")
    else if (theme === "light") setTheme("purple")
    else setTheme("dark")
  }

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #10b981, #3b82f6)"
            : theme === "light"
              ? "linear-gradient(135deg, #8b5cf6, #ec4899)"
              : "linear-gradient(135deg, #6366f1, #8b5cf6)",
      }}
    >
      {theme === "dark" ? (
        <Sun className="text-white" size={20} />
      ) : theme === "light" ? (
        <Palette className="text-white" size={20} />
      ) : (
        <Moon className="text-white" size={20} />
      )}
    </button>
  )
}
