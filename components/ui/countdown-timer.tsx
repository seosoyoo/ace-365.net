"use client"

import { useState, useEffect } from "react"
import { Clock, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  endTime: Date
}

export function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isExpired, setIsExpired] = useState(false)
  const [isAlmostExpired, setIsAlmostExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsExpired(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      // Check if less than 24 hours remaining
      if (difference < 24 * 60 * 60 * 1000) {
        setIsAlmostExpired(true)
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [endTime])

  if (isExpired) {
    return (
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="inline-flex items-center px-4 py-2 rounded-lg bg-red-500/30 text-red-400 text-sm font-medium border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
      >
        <AlertTriangle className="mr-2 h-4 w-4" />
        <span className="font-bold">EXPIRED</span>
      </motion.div>
    )
  }

  // Different animations and styles based on time remaining
  const getTimerStyle = () => {
    if (isAlmostExpired) {
      return {
        containerClass:
          "bg-orange-500/30 text-orange-400 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]",
        animation: {
          scale: [1, 1.05, 1],
          backgroundColor: ["rgba(249, 115, 22, 0.3)", "rgba(249, 115, 22, 0.4)", "rgba(249, 115, 22, 0.3)"],
        },
        transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        icon: <Clock className="mr-2 h-4 w-4 animate-pulse" />,
      }
    } else {
      return {
        containerClass: "bg-blue-500/30 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        animation: {
          scale: [1, 1.02, 1],
        },
        transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
        icon: <Clock className="mr-2 h-4 w-4" />,
      }
    }
  }

  const timerStyle = getTimerStyle()

  // Create time unit display components
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-black/40 backdrop-blur-md rounded-md px-2 py-1 min-w-[2.5rem] text-center">
        <span className="font-bold text-lg">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  )

  return (
    <motion.div
      animate={timerStyle.animation}
      transition={timerStyle.transition}
      className={`inline-flex items-center px-4 py-3 rounded-lg ${timerStyle.containerClass}`}
    >
      {timerStyle.icon}

      <div className="flex items-center">
        {timeLeft.days > 0 && <TimeUnit value={timeLeft.days} label="days" />}
        <TimeUnit value={timeLeft.hours} label="hrs" />
        <span className="text-lg font-bold mx-0.5">:</span>
        <TimeUnit value={timeLeft.minutes} label="min" />
        <span className="text-lg font-bold mx-0.5">:</span>
        <TimeUnit value={timeLeft.seconds} label="sec" />
      </div>
    </motion.div>
  )
}
