"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type ThemeType = "day" | "night" | "sunrise" | "sunset"

interface ThemeContextType {
  theme: ThemeType
  changeTheme: (newTheme: ThemeType) => void
  transitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("sunrise")
  const [transitioning, setTransitioning] = useState(false)

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("casino-theme") as ThemeType | null
    if (savedTheme && ["day", "night", "sunrise", "sunset"].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  const changeTheme = (newTheme: ThemeType) => {
    if (theme === newTheme) return

    setTransitioning(true)
    setTimeout(() => {
      setTheme(newTheme)
      localStorage.setItem("casino-theme", newTheme)
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    }, 300)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme, transitioning }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
