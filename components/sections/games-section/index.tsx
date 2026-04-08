"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { useGames } from "@/hooks/use-games"
import { LazyLoad } from "@/utils/lazy-load"

export function GamesSection() {
  const { featuredGames, popularGames, newGames } = useGames()
  const [showAll, setShowAll] = useState(false)

  const handleShowMore = useCallback(() => {
    setShowAll(true)
  }, [])

  return (
    <section className="py-16" id="games">
      <div className="container px-4 md:px-6">
        <SectionTitle title="Our Games" subtitle="Explore our wide selection of exciting games" centered />

        <div className="mt-12 space-y-12">
          {/* Featured Games - Always loaded */}
          <LazyLoad
            importFn={() => import("./game-category").then((mod) => ({ default: mod.GameCategory }))}
            props={{
              title: "Featured Games",
              games: featuredGames,
              startIndex: 0,
            }}
          />

          {/* Popular Games - Always loaded */}
          <LazyLoad
            importFn={() => import("./game-category").then((mod) => ({ default: mod.GameCategory }))}
            props={{
              title: "Popular Games",
              games: popularGames,
              startIndex: featuredGames.length,
            }}
          />

          {/* New Games - Lazy loaded */}
          {showAll && (
            <LazyLoad
              importFn={() => import("./game-category").then((mod) => ({ default: mod.GameCategory }))}
              props={{
                title: "New Games",
                games: newGames,
                startIndex: featuredGames.length + popularGames.length,
              }}
            />
          )}

          {/* Show More Button */}
          {!showAll && (
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors"
              >
                Show More Games
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
