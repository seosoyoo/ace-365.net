"use client"

import { useEffect, useState } from "react"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"

interface OptimizedThemeLoaderProps {
  theme: ThemeType
  transitioning: boolean
}

export default function OptimizedThemeLoader({ theme, transitioning }: OptimizedThemeLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [renderedThemes, setRenderedThemes] = useState<ThemeType[]>([])

  // Only load the current theme initially, then load others after critical content
  useEffect(() => {
    if (!isLoaded) {
      setRenderedThemes([theme])
      setIsLoaded(true)

      // Load other themes after a delay
      const timer = setTimeout(() => {
        setRenderedThemes(["day", "night", "sunrise", "sunset"])
      }, 3000) // 3 second delay

      return () => clearTimeout(timer)
    } else if (!renderedThemes.includes(theme)) {
      setRenderedThemes((prev) => [...prev, theme])
    }
  }, [theme, isLoaded, renderedThemes])

  return (
    <>
      {renderedThemes.includes("day") && (
        <div
          className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            theme === "day" ? "opacity-100" : "opacity-0"
          } ${transitioning ? "pointer-events-none" : ""}`}
        >
          <DaySky />
        </div>
      )}

      {renderedThemes.includes("night") && (
        <div
          className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            theme === "night" ? "opacity-100" : "opacity-0"
          } ${transitioning ? "pointer-events-none" : ""}`}
        >
          <NightSky />
        </div>
      )}

      {renderedThemes.includes("sunrise") && (
        <div
          className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            theme === "sunrise" ? "opacity-100" : "opacity-0"
          } ${transitioning ? "pointer-events-none" : ""}`}
        >
          <SunriseSky />
        </div>
      )}

      {renderedThemes.includes("sunset") && (
        <div
          className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            theme === "sunset" ? "opacity-100" : "opacity-0"
          } ${transitioning ? "pointer-events-none" : ""}`}
        >
          <SunsetSky />
        </div>
      )}
    </>
  )
}
