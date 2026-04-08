"use client"

import { memo } from "react"
import { GameCard } from "@/components/ui/game-card"
import type { Game } from "@/data/games"

interface GameCategoryProps {
  title: string
  games: Game[]
  startIndex: number
}

export const GameCategory = memo(function GameCategory({ title, games, startIndex }: GameCategoryProps) {
  if (!games.length) return null

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {games.map((game, i) => (
          <GameCard
            key={`${game.category}-${game.title}-${i}`}
            title={game.title}
            category={game.category}
            image={game.image}
            popular={game.popular}
            new={game.new}
            rating={game.rating}
            index={startIndex + i}
          />
        ))}
      </div>
    </div>
  )
})
