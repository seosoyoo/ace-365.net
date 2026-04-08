"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

type AlertVariant = "info" | "success" | "warning" | "error"

interface AlertProps {
  title?: string
  message: string
  variant?: AlertVariant
  className?: string
  icon?: React.ReactNode
  dismissible?: boolean
  autoClose?: boolean
  autoCloseTime?: number
  onClose?: () => void
}

export function Alert({
  title,
  message,
  variant = "info",
  className,
  icon,
  dismissible = true,
  autoClose = false,
  autoCloseTime = 5000,
  onClose,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose()
      }, autoCloseTime)

      return () => clearTimeout(timer)
    }
  }, [autoClose, autoCloseTime])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  const getVariantStyles = (): { bg: string; border: string; icon: React.ReactNode } => {
    switch (variant) {
      case "success":
        return {
          bg: "bg-green-500/20",
          border: "border-green-500/50",
          icon: icon || <CheckCircle className="h-5 w-5 text-green-500" />,
        }
      case "warning":
        return {
          bg: "bg-yellow-500/20",
          border: "border-yellow-500/50",
          icon: icon || <AlertTriangle className="h-5 w-5 text-yellow-500" />,
        }
      case "error":
        return {
          bg: "bg-red-500/20",
          border: "border-red-500/50",
          icon: icon || <AlertCircle className="h-5 w-5 text-red-500" />,
        }
      case "info":
      default:
        return {
          bg: "bg-blue-500/20",
          border: "border-blue-500/50",
          icon: icon || <Info className="h-5 w-5 text-blue-500" />,
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "relative rounded-lg border p-4 backdrop-blur-sm",
            variantStyles.bg,
            variantStyles.border,
            className,
          )}
          role="alert"
        >
          <div className="flex">
            <div className="flex-shrink-0">{variantStyles.icon}</div>
            <div className="ml-3">
              {title && <h3 className="text-sm font-medium text-white">{title}</h3>}
              <div className={cn("text-sm text-white/90", title ? "mt-1" : "")}>{message}</div>
            </div>
            {dismissible && (
              <div className="ml-auto pl-3">
                <button
                  type="button"
                  className="inline-flex text-white/70 hover:text-white focus:outline-none"
                  onClick={handleClose}
                  aria-label="Dismiss"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
