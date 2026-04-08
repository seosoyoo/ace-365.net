"use client"

// Optimized animation utilities to reduce framer-motion bundle size
import { useReducedMotion } from "framer-motion"

// Pre-defined animations to reuse across components
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const scale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

// Hook to respect user's reduced motion preferences
export function useAnimationPreference() {
  const prefersReducedMotion = useReducedMotion()

  return {
    shouldAnimate: !prefersReducedMotion,
    // Return no-animation variants if user prefers reduced motion
    getVariants: (variants: any) => {
      if (prefersReducedMotion) {
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 },
        }
      }
      return variants
    },
  }
}
