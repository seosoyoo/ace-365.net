"use client"

import { useState, useEffect, useMemo } from "react"
import { games, gameCategories, type GameCategory } from "@/data/games"

export function useGames(initialCategory: GameCategory = "all") {
  const [activeCategory, setActiveCategory] = useState<GameCategory>(initialCategory)
  const [isLoading, setIsLoading] = useState(false)

  // Simulate data fetching with a small delay
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory])

  // Memoize filtered games
  const filteredGames = useMemo(() => {
    return activeCategory === "all" ? games : games.filter((game) => game.category === activeCategory)
  }, [activeCategory])

  return {
    games: filteredGames,
    categories: gameCategories,
    activeCategory,
    setActiveCategory,
    isLoading,
  }
}
