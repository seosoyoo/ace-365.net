"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  variant?: "default" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
  animated?: boolean
  className?: string
  barClassName?: string
}

export function Progress({
  value,
  max = 100,
  label,
  showValue = false,
  variant = "default",
  size = "md",
  animated = true,
  className,
  barClassName,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const getVariantClasses = (): string => {
    switch (variant) {
      case "success":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "error":
        return "bg-red-500"
      case "default":
      default:
        return "bg-blue-500"
    }
  }

  const getSizeClasses = (): string => {
    switch (size) {
      case "sm":
        return "h-1.5"
      case "lg":
        return "h-4"
      case "md":
      default:
        return "h-2.5"
    }
  }

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <div className="text-sm font-medium text-white/90">{label}</div>}
          {showValue && (
            <div className="text-sm font-medium text-white/70">
              {value}/{max}
            </div>
          )}
        </div>
      )}
      <div className={cn("w-full bg-white/10 rounded-full overflow-hidden", getSizeClasses())}>
        <motion.div
          className={cn(
            "h-full rounded-full",
            getVariantClasses(),
            animated && "transition-all duration-500",
            barClassName,
          )}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
