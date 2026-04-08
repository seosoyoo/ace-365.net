"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function MobileOptimizations() {
  const pathname = usePathname()

  useEffect(() => {
    // Ensure proper viewport settings
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) {
      const meta = document.createElement("meta")
      meta.name = "viewport"
      meta.content = "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
      document.head.appendChild(meta)
    } else {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover")
    }

    // Add mobile web app capability
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement("meta")
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    // Add mobile-specific meta tags
    addMetaTag("apple-mobile-web-app-capable", "yes")
    addMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent")
    addMetaTag("apple-mobile-web-app-title", "JITABET")
    addMetaTag("mobile-web-app-capable", "yes")
    addMetaTag("theme-color", "#000000")

    // Add touch icon for iOS
    const addAppleTouchIcon = (size: string) => {
      const link = document.createElement("link")
      link.rel = "apple-touch-icon"
      link.sizes = size
      link.href = `/images/icons/apple-touch-icon-${size}.png`
      document.head.appendChild(link)
    }

    // Add various sizes of touch icons
    addAppleTouchIcon("57x57")
    addAppleTouchIcon("72x72")
    addAppleTouchIcon("114x114")
    addAppleTouchIcon("144x144")
    addAppleTouchIcon("180x180")

    // Optimize touch targets
    const optimizeTouchTargets = () => {
      const touchableElements = document.querySelectorAll('a, button, [role="button"]')
      touchableElements.forEach((el) => {
        const element = el as HTMLElement
        const rect = element.getBoundingClientRect()

        // Check if touch target is too small
        if (rect.width < 44 || rect.height < 44) {
          // Add padding to small elements to increase touch target size
          element.style.padding = "12px"
          // Add min-width and min-height to ensure minimum size
          element.style.minWidth = "44px"
          element.style.minHeight = "44px"
        }
      })
    }

    // Run touch target optimization after a short delay to ensure DOM is fully loaded
    const timeoutId = setTimeout(optimizeTouchTargets, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return null
}
