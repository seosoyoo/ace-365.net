"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  icon,
  className,
  titleClassName,
  contentClassName,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={cn(
        "border border-white/10 rounded-lg overflow-hidden mb-4 last:mb-0 bg-black/40 backdrop-blur-md",
        className,
      )}
    >
      <button
        className={cn(
          "flex items-center justify-between w-full p-4 text-left text-white focus:outline-none",
          titleClassName,
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          <span className="font-medium">{title}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-white/70 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={cn("p-4 pt-0 text-white/90", contentClassName)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    id: string
    title: string
    content: React.ReactNode
    icon?: React.ReactNode
  }>
  defaultOpenId?: string
  className?: string
  itemClassName?: string
  titleClassName?: string
  contentClassName?: string
}

export function Accordion({
  items,
  defaultOpenId,
  className,
  itemClassName,
  titleClassName,
  contentClassName,
}: AccordionProps) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          defaultOpen={item.id === defaultOpenId}
          icon={item.icon}
          className={itemClassName}
          titleClassName={titleClassName}
          contentClassName={contentClassName}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
