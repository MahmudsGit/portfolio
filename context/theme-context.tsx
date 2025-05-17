"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "dark" | "light" | "purple"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme && ["dark", "light", "purple"].includes(savedTheme)) {
      setTheme(savedTheme as Theme)
    }
  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", theme)

    // Apply theme classes to document
    const root = document.documentElement
    root.classList.remove("theme-dark", "theme-light", "theme-purple")
    root.classList.add(`theme-${theme}`)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
