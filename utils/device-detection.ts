export function getDevicePerformanceLevel(): "low" | "medium" | "high" {
  // Check if we're in a browser environment
  if (typeof window === "undefined") return "medium"

  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  // Check for low-end devices
  const isLowEnd = () => {
    // Check RAM if available
    if (navigator.deviceMemory && navigator.deviceMemory < 4) return true

    // Check number of logical processors
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true

    return false
  }

  if (isMobile && isLowEnd()) return "low"
  if (isMobile) return "medium"
  return "high"
}

// Throttle requestAnimationFrame based on device performance
export function createThrottledRAF(fps = 30) {
  let lastTime = 0
  const interval = 1000 / fps

  return (callback: FrameRequestCallback): number => {
    return requestAnimationFrame((timestamp) => {
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp
        callback(timestamp)
      }
    })
  }
}
