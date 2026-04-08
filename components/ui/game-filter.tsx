"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, ChevronDown } from "lucide-react"
import type { GameCategory } from "@/data/games"

interface GameFilterProps {
  categories: Array<{ id: string; name: string; icon: string }>
  activeCategory: GameCategory
  onCategoryChange: (category: GameCategory) => void
  totalGames: number
  filteredCount: number
}

export function GameFilter({
  categories,
  activeCategory,
  onCategoryChange,
  totalGames,
  filteredCount,
}: GameFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Map category IDs to their respective icons
  const getCategoryIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Gamepad2: <span className="mr-2">🎮</span>,
      PlaySquare: <span className="mr-2">🎲</span>,
      Joystick: <span className="mr-2">🎯</span>,
      Fish: <span className="mr-2">🐟</span>,
      ClubIcon: <span className="mr-2">⚽</span>,
      Trophy: <span className="mr-2">🏆</span>,
    }
    return iconMap[iconName] || <span className="mr-2">🎮</span>
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl text-white"
      >
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          <span>Filter by Category: </span>
          <span className="font-medium ml-2">
            {categories.find((cat) => cat.id === activeCategory)?.name || "All Games"}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-white/70 mr-2">
            {filteredCount} of {totalGames}
          </span>
          <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 mt-2 w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id as GameCategory)
                  setIsOpen(false)
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left mb-1 last:mb-0 ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-black font-medium"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {getCategoryIcon(category.icon)}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
