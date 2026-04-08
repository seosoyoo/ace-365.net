"use client"

import type React from "react"
import { memo, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Star } from "lucide-react"

interface GameCardProps {
  title: string
  category: string
  image: string
  popular?: boolean
  new?: boolean
  rating?: number
  index: number
  priority?: boolean
}

export const GameCard = memo(function GameCard({
  title,
  category,
  image,
  popular,
  new: isNew,
  rating,
  index,
  priority,
}: GameCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [imgError, setImgError] = useState(false)

  // Fallback images based on category
  const getFallbackImage = () => {
    const categoryMap: Record<string, string> = {
      slots: "/casino-game.png",
      casino: "/casino-game.png",
      poker: "/poker-game.png",
      fishing: "/casino-game.png",
      sports: "/casino-game.png",
      esports: "/casino-game.png",
    }

    return categoryMap[category] || "/casino-game.png"
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      linkRef.current?.click()
    }
  }

  // Handle image error
  const handleImageError = () => {
    console.log(`Image failed to load: ${image}`)
    setImgError(true)
  }

  // Determine which image to use
  const imageToUse = imgError ? getFallbackImage() : image

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`Play ${title} - ${category} game`}
    >
      <a
        href="https://ash521.com/m/index.html?affiliateCode=aliance/"
        target="_blank"
        rel="nofollow noreferrer noopener"
        className="block"
        ref={linkRef}
        aria-label={`Play ${title} - ${category} game${popular ? ", Popular game" : ""}${isNew ? ", New game" : ""}${rating ? `, Rated ${rating.toFixed(1)} out of 5` : ""}`}
      >
        <div className="relative overflow-hidden rounded-xl aspect-square bg-black/40 backdrop-blur-sm">
          {/* Game Image */}
          <div className="relative w-full h-full">
            <Image
              src={imageToUse || "/placeholder.svg"}
              alt={`${title} game thumbnail - ${category} category`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading={priority ? "eager" : "lazy"}
              priority={priority}
              onError={handleImageError}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

          {/* Category Badge */}
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>

          {/* Popular or New Badge */}
          {(popular || isNew) && (
            <div
              className={`absolute top-2 right-2 ${
                popular ? "bg-yellow-500 text-black" : "bg-blue-600 text-white"
              } text-xs px-2 py-1 rounded-md font-medium`}
            >
              {popular ? "Popular" : "New"}
            </div>
          )}

          {/* Rating */}
          {rating && (
            <div className="absolute bottom-10 left-3 flex items-center" aria-hidden="true">
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-white text-xs ml-1">{rating.toFixed(1)}</span>
            </div>
          )}

          {/* Game Title */}
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <h3 className="font-medium text-sm sm:text-base truncate">{title}</h3>
          </div>

          {/* Play Button (appears on hover) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black rounded-full p-3 flex items-center justify-center shadow-lg"
              aria-hidden="true"
            >
              <Play className="h-5 w-5 fill-current" />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  )
})
