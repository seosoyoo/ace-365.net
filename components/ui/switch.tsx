"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  description?: string
  size?: "sm" | "md" | "lg"
  className?: string
  labelClassName?: string
}

export function Switch({
  checked: controlledChecked,
  onChange,
  disabled = false,
  label,
  description,
  size = "md",
  className,
  labelClassName,
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(false)

  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked

  const handleChange = () => {
    if (disabled) return

    if (!isControlled) {
      setInternalChecked(!internalChecked)
    }

    if (onChange) {
      onChange(!checked)
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return {
          switch: "w-8 h-4",
          thumb: "w-3 h-3",
          translate: "translate-x-4",
        }
      case "lg":
        return {
          switch: "w-14 h-7",
          thumb: "w-6 h-6",
          translate: "translate-x-7",
        }
      case "md":
      default:
        return {
          switch: "w-11 h-6",
          thumb: "w-5 h-5",
          translate: "translate-x-5",
        }
    }
  }

  const sizeClasses = getSizeClasses()

  return (
    <label
      className={cn(
        "flex items-center",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "cursor-pointer",
        className,
      )}
    >
      <div className="relative flex-shrink-0">
        <motion.button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={handleChange}
          className={cn(
            "relative inline-flex flex-shrink-0 rounded-full transition-colors ease-in-out duration-200 focus:outline-none",
            sizeClasses.switch,
            checked ? "bg-blue-500" : "bg-white/20",
          )}
        >
          <span className="sr-only">{label || "Toggle"}</span>
          <motion.span
            layout
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className={cn(
              "inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
              sizeClasses.thumb,
              checked ? sizeClasses.translate : "translate-x-0.5",
            )}
          />
        </motion.button>
      </div>
      {(label || description) && (
        <div className={cn("ml-3 text-sm", labelClassName)}>
          {label && <div className="font-medium text-white">{label}</div>}
          {description && <div className="text-white/70">{description}</div>}
        </div>
      )}
    </label>
  )
}
