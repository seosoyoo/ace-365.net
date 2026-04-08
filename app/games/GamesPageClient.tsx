"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronDown } from "lucide-react"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { GameCard } from "@/components/ui/game-card"
import { games, gameCategories, type GameCategory } from "@/data/games"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { ThemeType } from "@/components/theme-selector"
import OptimizedThemeLoader from "@/components/theme-backgrounds/optimized-theme-loader"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

// Generate structured data for games
function generateGameStructuredData() {
  const itemListElements = games.map((game, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Game",
      name: game.title,
      image: game.image,
      description: `Play ${game.title} in the ${game.category} category`,
      genre: game.category,
      gamePlatform: "Web Browser",
    },
  }))

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: itemListElements,
  }
}

export default function GamesPageClient() {
  const structuredData = generateGameStructuredData()
  const [theme, setTheme] = useState<ThemeType>("sunrise")
  const [transitioning, setTransitioning] = useState(false)
  const [activeCategory, setActiveCategory] = useState<GameCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleGames, setVisibleGames] = useState<number>(12)
  const [expanded, setExpanded] = useState<boolean>(false)

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Filter games based on category and search query
  const filteredGames = games
    .filter((game) => activeCategory === "all" || game.category === activeCategory)
    .filter(
      (game) =>
        searchQuery === "" ||
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  // Reset visible games when category or search changes
  useEffect(() => {
    setVisibleGames(isMobile ? 6 : 12)
    setExpanded(false)
  }, [activeCategory, searchQuery, isMobile])

  const changeTheme = (newTheme: ThemeType) => {
    if (theme === newTheme) return

    setTransitioning(true)
    setTimeout(() => {
      setTheme(newTheme)
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    }, 300)
  }

  const handleSeeMore = () => {
    if (expanded) {
      // Collapse back to initial state
      setVisibleGames(isMobile ? 6 : 12)
      setExpanded(false)
    } else {
      // Show all games
      setVisibleGames(filteredGames.length)
      setExpanded(true)
    }
  }

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="relative w-full min-h-screen overflow-x-hidden pb-16 md:pb-0">
        {/* Optimized Theme Background Loading */}
        <OptimizedThemeLoader theme={theme} transitioning={transitioning} />

        {/* Content */}
        <div className="relative z-10">
          <Header currentTheme={theme} onThemeChange={changeTheme} />

          <PageBreadcrumb items={[{ label: "Games", isCurrent: true }]} />

          <section className="pt-4 pb-24">
            <div className="container mx-auto px-4 md:px-6">
              {/* Page Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hot Games</h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  আমাদের উত্তেজনাপূর্ণ ক্যাসিনো গেম এবং স্পোর্টস বেটিং বিকল্পগুলির বিস্তৃত নির্বাচন ঘুরে দেখুন
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl mx-auto mb-10"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-white/70" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search games by name or category..."
                    className="w-full pl-10 pr-10 py-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <X className="h-5 w-5 text-white/70 hover:text-white" />
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-10"
              >
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {gameCategories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id as GameCategory)}
                      className={`flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-yellow-500 text-black font-medium shadow-lg"
                          : "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {getCategoryIcon(category.icon)}
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Results Count */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mb-8"
              >
                <p className="text-white/80">
                  {filteredGames.length === 0
                    ? "No games found. Try a different search or category."
                    : `Showing ${Math.min(visibleGames, filteredGames.length)} of ${filteredGames.length} games`}
                </p>
              </motion.div>

              {/* Games Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
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
                        priority={index < 6} // Only prioritize the first 6 games (above fold)
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty State */}
              {filteredGames.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16 bg-black/30 backdrop-blur-md rounded-xl mt-8"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">কোন গেম পাওয়া যায়নি</h3>
                  <p className="text-white/80 max-w-md mx-auto">
                    আপনার অনুসন্ধানের মানদণ্ডের সাথে মেলে এমন কোনও গেম আমরা খুঁজে পাইনি। বিভিন্ন কীওয়ার্ড চেষ্টা করুন অথবা বিভাগ অনুসারে ব্রাউজ করুন।
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors"
                    >
                      সাফ অনুসন্ধান
                    </button>
                  )}
                </motion.div>
              )}

              {/* See More / কম দেখুন Button */}
              {filteredGames.length > visibleGames && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-12 text-center"
                >
                  <motion.button
                    onClick={handleSeeMore}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-300"
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
                        আরও গেম লোড করুন
                        <ChevronDown className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}

              {/* Back to Home */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  Back to Home
                </a>
              </motion.div>
            </div>
          </section>

          <FooterSection />
        </div>

        {/* Back to Top Button */}
        <BackToTop />

        {/* Mobile Footer */}
        <MobileFooter />
      </main>
    </>
  )
}
