"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: "top" | "right" | "bottom" | "left"
  delay?: number
  className?: string
  contentClassName?: string
}

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 300,
  className,
  contentClassName,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const showTooltip = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()

      let x = 0
      let y = 0

      switch (position) {
        case "top":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          y = triggerRect.top - tooltipRect.height - 8
          break
        case "right":
          x = triggerRect.right + 8
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          break
        case "bottom":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          y = triggerRect.bottom + 8
          break
        case "left":
          x = triggerRect.left - tooltipRect.width - 8
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          break
      }

      // Adjust if tooltip goes out of viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      if (x < 10) x = 10
      if (x + tooltipRect.width > viewportWidth - 10) x = viewportWidth - tooltipRect.width - 10
      if (y < 10) y = 10
      if (y + tooltipRect.height > viewportHeight - 10) y = viewportHeight - tooltipRect.height - 10

      setCoords({ x, y })
    }
  }, [isVisible, position])

  const getPositionAnimation = () => {
    switch (position) {
      case "top":
        return { y: 10 }
      case "right":
        return { x: -10 }
      case "bottom":
        return { y: -10 }
      case "left":
        return { x: 10 }
    }
  }

  return (
    <div
      ref={triggerRef}
      className={cn("inline-block", className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, ...getPositionAnimation() }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, ...getPositionAnimation() }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              left: coords.x,
              top: coords.y,
              zIndex: 50,
            }}
            className={cn(
              "px-2 py-1 text-xs font-medium text-white bg-black/80 backdrop-blur-sm rounded shadow-lg border border-white/10 pointer-events-none",
              contentClassName,
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
