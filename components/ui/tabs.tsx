"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
  tabClassName?: string
  contentClassName?: string
  variant?: "default" | "pills" | "underline"
  orientation?: "horizontal" | "vertical"
  onChange?: (tabId: string) => void
}

export function Tabs({
  tabs,
  defaultTabId,
  className,
  tabClassName,
  contentClassName,
  variant = "default",
  orientation = "horizontal",
  onChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    if (onChange) {
      onChange(tabId)
    }
  }

  const getTabStyles = (tabId: string) => {
    const isActive = activeTab === tabId

    if (variant === "pills") {
      return isActive ? "bg-white text-black font-medium" : "text-white/70 hover:text-white hover:bg-white/10"
    }

    if (variant === "underline") {
      return isActive
        ? "text-white font-medium border-b-2 border-yellow-500"
        : "text-white/70 hover:text-white border-b-2 border-transparent"
    }

    // Default variant
    return isActive ? "text-white font-medium bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
  }

  return (
    <div className={cn("w-full", orientation === "vertical" ? "flex flex-row space-x-4" : "flex flex-col", className)}>
      <div
        className={cn(
          orientation === "vertical"
            ? "flex flex-col space-y-2 min-w-[150px]"
            : "flex flex-row space-x-2 overflow-x-auto scrollbar-hide",
          "mb-4",
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn("px-4 py-2 rounded-lg transition-colors", getTabStyles(tab.id), tabClassName)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <div className="flex items-center">
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className={cn("w-full", contentClassName)}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn("transition-opacity duration-300", activeTab === tab.id ? "block" : "hidden")}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {activeTab === tab.id && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                {tab.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
