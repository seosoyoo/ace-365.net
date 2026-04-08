import type React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline"

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const getVariantClasses = (): string => {
    switch (variant) {
      case "primary":
        return "bg-blue-500/80 text-white"
      case "secondary":
        return "bg-purple-500/80 text-white"
      case "success":
        return "bg-green-500/80 text-white"
      case "warning":
        return "bg-yellow-500/80 text-black"
      case "danger":
        return "bg-red-500/80 text-white"
      case "outline":
        return "bg-transparent border border-white/20 text-white"
      case "default":
      default:
        return "bg-white/20 text-white"
    }
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm",
        getVariantClasses(),
        className,
      )}
    >
      {children}
    </span>
  )
}
