"use client"

import type React from "react"

import { Suspense, lazy, type ComponentType, useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface LazyLoadProps {
  importFn: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  props?: Record<string, any>
  preload?: boolean
  threshold?: number // Viewport threshold for loading
}

export function LazyLoad({ importFn, fallback, props = {}, preload = false, threshold = 0 }: LazyLoadProps) {
  const LazyComponent = lazy(importFn)

  // Preload the component if specified
  useEffect(() => {
    if (preload) {
      importFn()
    }
  }, [importFn, preload])

  return (
    <Suspense fallback={fallback || <DefaultLoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Intersection Observer based lazy loading
export function ViewportLazyLoad({ importFn, fallback, props = {}, threshold = 0.1 }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [component, setComponent] = useState<React.ReactNode>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    const currentElement = document.getElementById("lazy-viewport-container")
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  useEffect(() => {
    if (isVisible) {
      const LazyComponent = lazy(importFn)
      setComponent(
        <Suspense fallback={fallback || <DefaultLoadingFallback />}>
          <LazyComponent {...props} />
        </Suspense>,
      )
    }
  }, [isVisible, importFn, props, fallback])

  return <div id="lazy-viewport-container">{isVisible ? component : fallback || <DefaultLoadingFallback />}</div>
}

function DefaultLoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-40">
      <Loader2 className="w-8 h-8 animate-spin text-white/70" />
    </div>
  )
}
