"use client"

import { useTheme } from "@/contexts/theme-context"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"

// Dynamic imports with loading states
const DaySky = dynamic(() => import("./day-sky"), {
  loading: () => <div className="w-full h-full bg-gradient-to-b from-blue-300 to-blue-500" />,
  ssr: false,
})

const NightSky = dynamic(() => import("./night-sky"), {
  loading: () => <div className="w-full h-full bg-gradient-to-b from-gray-900 to-blue-900" />,
  ssr: false,
})

const SunriseSky = dynamic(() => import("./sunrise-sky"), {
  loading: () => <div className="w-full h-full bg-gradient-to-b from-orange-300 to-blue-500" />,
  ssr: false,
})

const SunsetSky = dynamic(() => import("./sunset-sky"), {
  loading: () => <div className="w-full h-full bg-gradient-to-b from-orange-500 to-purple-700" />,
  ssr: false,
})

export default function ThemeBackground() {
  const { theme, transitioning } = useTheme()

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        {theme === "day" && (
          <motion.div
            key="day-sky"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`h-full w-full ${transitioning ? "pointer-events-none" : ""}`}
          >
            <DaySky />
          </motion.div>
        )}
        {theme === "night" && (
          <motion.div
            key="night-sky"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`h-full w-full ${transitioning ? "pointer-events-none" : ""}`}
          >
            <NightSky />
          </motion.div>
        )}
        {theme === "sunrise" && (
          <motion.div
            key="sunrise-sky"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`h-full w-full ${transitioning ? "pointer-events-none" : ""}`}
          >
            <SunriseSky />
          </motion.div>
        )}
        {theme === "sunset" && (
          <motion.div
            key="sunset-sky"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`h-full w-full ${transitioning ? "pointer-events-none" : ""}`}
          >
            <SunsetSky />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
