"use client"

import { useEffect, useRef } from "react"
import { getDevicePerformanceLevel, createThrottledRAF } from "@/utils/device-detection"

export default function DaySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width: number
    let height: number

    // Get device performance level
    const performanceLevel = getDevicePerformanceLevel()

    // Adjust cloud count based on performance level
    const getCloudCount = () => {
      const baseCount = Math.floor(width / 300) + 5

      switch (performanceLevel) {
        case "low":
          return Math.min(baseCount, 5)
        case "medium":
          return Math.min(baseCount, 10)
        case "high":
          return baseCount
      }
    }

    // Create throttled requestAnimationFrame based on performance
    const throttledRAF =
      performanceLevel === "low"
        ? createThrottledRAF(15) // 15 FPS for low-end devices
        : performanceLevel === "medium"
          ? createThrottledRAF(30) // 30 FPS for medium devices
          : requestAnimationFrame // Full FPS for high-end devices

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      // Reinitialize clouds when resizing
      initializeClouds()
    }

    // Cloud class
    class Cloud {
      x: number
      y: number
      width: number
      height: number
      speed: number

      constructor() {
        this.width = Math.random() * 200 + 80
        this.height = this.width * 0.6
        this.x = width + this.width
        this.y = Math.random() * (height * 0.7)
        this.speed = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x -= this.speed
        if (this.x < -this.width) {
          this.x = width + this.width
          this.y = Math.random() * (height * 0.7)
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)

        // Simplified cloud drawing for low-end devices
        if (performanceLevel === "low") {
          const w = this.width
          const h = this.height

          ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
          ctx.beginPath()
          ctx.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
          return
        }

        // Regular cloud drawing for medium and high performance
        const w = this.width
        const h = this.height

        ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
        ctx.beginPath()

        // Start from the bottom left
        ctx.moveTo(w * 0.2, h * 0.8)

        // Bottom edge (flat-ish)
        ctx.lineTo(w * 0.8, h * 0.8)

        // Right edge (curved)
        ctx.bezierCurveTo(
          w * 0.95,
          h * 0.8, // Control point 1
          w * 0.95,
          h * 0.6, // Control point 2
          w * 0.8,
          h * 0.55, // End point
        )

        // Top-right bump
        ctx.bezierCurveTo(
          w * 0.85,
          h * 0.4, // Control point 1
          w * 0.75,
          h * 0.3, // Control point 2
          w * 0.6,
          h * 0.35, // End point
        )

        // Top-middle bump
        ctx.bezierCurveTo(
          w * 0.55,
          h * 0.2, // Control point 1
          w * 0.45,
          h * 0.2, // Control point 2
          w * 0.4,
          h * 0.35, // End point
        )

        // Top-left bump
        ctx.bezierCurveTo(
          w * 0.35,
          h * 0.25, // Control point 1
          w * 0.15,
          h * 0.35, // Control point 2
          w * 0.2,
          h * 0.55, // End point
        )

        // Left edge (curved)
        ctx.bezierCurveTo(
          w * 0.05,
          h * 0.6, // Control point 1
          w * 0.05,
          h * 0.8, // Control point 2
          w * 0.2,
          h * 0.8, // End point (back to start)
        )

        ctx.closePath()
        ctx.fill()

        // Add subtle shadows to give depth (only for high performance)
        if (performanceLevel === "high") {
          const gradient = ctx.createLinearGradient(0, 0, 0, h)
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.95)")
          gradient.addColorStop(1, "rgba(230, 230, 230, 0.95)")

          ctx.fillStyle = gradient
          ctx.fill()
        }

        ctx.restore()
      }
    }

    let clouds: Cloud[] = []

    // Initialize clouds
    function initializeClouds() {
      clouds = []
      const cloudCount = getCloudCount()

      for (let i = 0; i < cloudCount; i++) {
        const cloud = new Cloud()

        // Distribute clouds of different sizes
        if (i % 3 === 0) {
          // Smaller clouds (but with the same shape)
          cloud.width = Math.random() * 100 + 60
          cloud.height = cloud.width * 0.6
        } else if (i % 3 === 1) {
          // Medium clouds
          cloud.width = Math.random() * 150 + 100
          cloud.height = cloud.width * 0.6
        }

        // Distribute clouds across the screen initially
        cloud.x = Math.random() * width
        cloud.y = Math.random() * (height * 0.7)

        // Varied speeds based on size (smaller clouds move faster)
        cloud.speed = (Math.random() * 0.2 + 0.1) * (200 / cloud.width)

        clouds.push(cloud)
      }
    }

    // Animation loop
    let rafId: number

    function animate() {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw sky gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "#64b5f6") // Light blue at top
      gradient.addColorStop(0.5, "#90caf9") // Medium blue in middle
      gradient.addColorStop(1, "#bbdefb") // Lighter blue at bottom

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Update and draw clouds
      for (const cloud of clouds) {
        cloud.update()
        cloud.draw()
      }

      // Use throttled requestAnimationFrame based on device performance
      rafId = throttledRAF(animate)
    }

    // Initialize
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
