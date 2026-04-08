"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { GameCard } from "@/components/ui/game-card"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ChevronDown,
  Gamepad2,
  Joystick,
  PlaySquare,
  Fish,
  ClubIcon as Football,
  Trophy,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { gameCategories, type GameCategory, games } from "@/data/games"

export default function GamesSection() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>("all")
  const [visibleGames, setVisibleGames] = useState<number>(6)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Filter games based on category
  const filteredGames = games.filter((game) => activeCategory === "all" || game.category === activeCategory)

  // Reset visible games when category changes
  useEffect(() => {
    setVisibleGames(isMobile ? 6 : 12)
    setExpanded(false)
  }, [activeCategory, isMobile])

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Map category IDs to their respective icons
  const getCategoryIcon = useCallback((iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Gamepad2: <Gamepad2 className="h-4 w-4 mr-2" />,
      PlaySquare: <PlaySquare className="h-4 w-4 mr-2" />,
      Joystick: <Joystick className="h-4 w-4 mr-2" />,
      Fish: <Fish className="h-4 w-4 mr-2" />,
      ClubIcon: <Football className="h-4 w-4 mr-2" />,
      Trophy: <Trophy className="h-4 w-4 mr-2" />,
    }
    return iconMap[iconName] || <Gamepad2 className="h-4 w-4 mr-2" />
  }, [])

  const handleSeeMore = useCallback(() => {
    if (expanded) {
      // Collapse back to initial state
      setVisibleGames(isMobile ? 6 : 12)
      setExpanded(false)
    } else {
      // Show all games
      setVisibleGames(filteredGames.length)
      setExpanded(true)
    }
  }, [expanded, filteredGames.length, isMobile])

  return (
    <section id="games" className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <SectionTitle
            title="Hot Games"
            description="আমাদের উত্তেজনাপূর্ণ ক্যাসিনো গেম এবং স্পোর্টস বেটিং বিকল্পগুলির বিস্তৃত নির্বাচন ঘুরে দেখুন"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {gameCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as GameCategory)}
                className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-black font-bold shadow-lg"
                    : "bg-black/70 backdrop-blur-sm text-white font-medium hover:bg-black/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category.icon)}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Add this before the Games Grid section */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square bg-black/20 animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : (
          /* Games Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <AnimatePresence>
              {filteredGames.slice(0, visibleGames).map((game, index) => (
                <motion.div
                  key={`${game.category}-${game.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.05 * (index % 6) }}
                >
                  <GameCard
                    title={game.title}
                    category={game.category}
                    image={game.image}
                    popular={game.popular}
                    new={game.new}
                    rating={game.rating}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-lg">No games found in this category. Try another category.</p>
          </div>
        )}

        {/* See More / See Less Button */}
        {filteredGames.length > (isMobile ? 6 : 12) && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={handleSeeMore}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/70 backdrop-blur-sm text-white font-medium hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {expanded ? (
                <>
                  কম দেখুন
                  <ChevronDown className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  আরও দেখুন
                  <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a href="/games">
            <Button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-medium px-8 py-3 rounded-full">
              অ্যাপ ডাউনলোড করুন
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
