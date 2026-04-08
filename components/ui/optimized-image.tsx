"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  fallbackSrc?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  loading?: "eager" | "lazy"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  className,
  fallbackSrc = "/placeholder.svg",
  objectFit = "cover",
  loading,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Convert image URL to WebP if it's not already
  const getWebPUrl = (url: string): string => {
    // Skip conversion for SVGs and already WebP images
    if (url.endsWith(".svg") || url.endsWith(".webp") || url.includes("placeholder.svg")) {
      return url
    }

    // For external URLs or URLs that can't be converted, return as is
    if (url.startsWith("http") && !url.includes("jitaweb.com")) {
      return url
    }

    // Remove extension and add .webp
    const baseUrl = url.split(".").slice(0, -1).join(".")
    return `${baseUrl}.webp`
  }

  // Handle image load error
  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  // Handle image load success
  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={cn("relative", className, !isLoaded && "bg-gray-200 animate-pulse")}>
      <Image
        src={getWebPUrl(imgSrc) || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={loading || (priority ? "eager" : "lazy")}
        className={cn(
          "transition-opacity duration-300",
          objectFit === "contain" && "object-contain",
          objectFit === "cover" && "object-cover",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100",
        )}
        onError={handleError}
        onLoad={handleLoad}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  )
}
