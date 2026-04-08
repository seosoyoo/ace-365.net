import type React from "react"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  fallbackClassName?: string
}

export function Avatar({ src, alt = "Avatar", fallback, size = "md", className, fallbackClassName }: AvatarProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "xs":
        return "h-6 w-6"
      case "sm":
        return "h-8 w-8"
      case "md":
        return "h-10 w-10"
      case "lg":
        return "h-12 w-12"
      case "xl":
        return "h-16 w-16"
    }
  }

  const sizeClasses = getSizeClasses()

  return (
    <div className={cn("relative flex shrink-0 overflow-hidden rounded-full", sizeClasses, className)}>
      {src ? (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            // If image fails to load, show fallback
            e.currentTarget.style.display = "none"
          }}
        />
      ) : (
        <div className={cn("flex h-full w-full items-center justify-center bg-black/40 text-white", fallbackClassName)}>
          {fallback || <User className="h-1/2 w-1/2" />}
        </div>
      )}
    </div>
  )
}
