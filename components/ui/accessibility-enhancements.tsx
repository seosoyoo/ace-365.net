"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function AccessibilityEnhancements() {
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Add skip to content link functionality
    const skipLink = skipLinkRef.current
    if (skipLink) {
      skipLink.addEventListener("click", (e) => {
        e.preventDefault()
        const mainContent = document.querySelector("main") || document.querySelector("#main-content")
        if (mainContent) {
          mainContent.setAttribute("tabindex", "-1")
          mainContent.focus()
          setTimeout(() => mainContent.removeAttribute("tabindex"), 1000)
        }
      })
    }

    // Enhance focus visibility
    const style = document.createElement("style")
    style.textContent = `
      :focus-visible {
        outline: 3px solid #FFD700 !important;
        outline-offset: 3px !important;
        border-radius: 3px !important;
      }
    `
    document.head.appendChild(style)

    // Add ARIA attributes to interactive elements
    const enhanceAccessibility = () => {
      // Add missing ARIA attributes to buttons
      document.querySelectorAll("button:not([aria-label]):not([aria-labelledby])").forEach((button) => {
        const buttonText = button.textContent?.trim()
        if (buttonText) {
          button.setAttribute("aria-label", buttonText)
        }
      })

      // Add missing ARIA attributes to links
      document.querySelectorAll("a:not([aria-label]):not([aria-labelledby])").forEach((link) => {
        const linkText = link.textContent?.trim()
        if (linkText) {
          link.setAttribute("aria-label", linkText)
        }
      })

      // Add role="button" to elements that look like buttons
      document.querySelectorAll('.btn, [class*="button"]').forEach((el) => {
        if (!el.getAttribute("role")) {
          el.setAttribute("role", "button")
        }
      })

      // Add role="list" to lists
      document.querySelectorAll("ul, ol").forEach((list) => {
        if (!list.getAttribute("role")) {
          list.setAttribute("role", "list")
        }
      })

      // Add role="img" to decorative elements
      document.querySelectorAll('[class*="icon"]').forEach((icon) => {
        if (!icon.getAttribute("role")) {
          icon.setAttribute("role", "img")
          if (!icon.getAttribute("aria-label")) {
            icon.setAttribute("aria-hidden", "true")
          }
        }
      })
    }

    // Run accessibility enhancements after a short delay
    const timeoutId = setTimeout(enhanceAccessibility, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return (
    <>
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-500 focus:text-black focus:rounded-md"
      >
        Skip to main content
      </a>
    </>
  )
}
