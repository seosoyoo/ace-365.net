"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SortAsc, ChevronDown } from "lucide-react"

type SortOption = "popular" | "newest" | "rating" | "a-z" | "z-a"

interface GameSortProps {
  onSortChange: (option: SortOption) => void
  currentSort: SortOption
}

export function GameSort({ onSortChange, currentSort }: GameSortProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sortOptions: Array<{ id: SortOption; name: string }> = [
    { id: "popular", name: "Most Popular" },
    { id: "newest", name: "Newest First" },
    { id: "rating", name: "Highest Rated" },
    { id: "a-z", name: "A to Z" },
    { id: "z-a", name: "Z to A" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl text-white"
      >
        <div className="flex items-center">
          <SortAsc className="h-5 w-5 mr-2" />
          <span>Sort by: </span>
          <span className="font-medium ml-2">
            {sortOptions.find((opt) => opt.id === currentSort)?.name || "Most Popular"}
          </span>
        </div>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 mt-2 w-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-2">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onSortChange(option.id)
                  setIsOpen(false)
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left mb-1 last:mb-0 ${
                  currentSort === option.id ? "bg-yellow-500 text-black font-medium" : "text-white hover:bg-white/10"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
