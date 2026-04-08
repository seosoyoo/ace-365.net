"use client"

import type React from "react"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { cn } from "@/lib/utils"

interface DropdownMenuItemProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
}

export function DropdownMenuItem({ children, onClick, disabled, className, icon }: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          disabled={disabled}
          className={cn(
            "flex w-full items-center px-4 py-2.5 text-sm",
            active ? "bg-white/10 text-white" : "text-white/80",
            disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </button>
      )}
    </Menu.Item>
  )
}

interface DropdownMenuSeparatorProps {
  className?: string
}

export function DropdownMenuSeparator({ className }: DropdownMenuSeparatorProps) {
  return <div className={cn("h-px my-1 bg-white/10", className)} />
}

interface DropdownMenuLabelProps {
  children: React.ReactNode
  className?: string
}

export function DropdownMenuLabel({ children, className }: DropdownMenuLabelProps) {
  return <div className={cn("px-4 py-2 text-xs font-medium text-white/60", className)}>{children}</div>
}

interface DropdownMenuProps {
  children: React.ReactNode
  trigger: React.ReactNode
  align?: "left" | "right"
  className?: string
  menuClassName?: string
}

export function DropdownMenu({ children, trigger, align = "right", className, menuClassName }: DropdownMenuProps) {
  return (
    <Menu as="div" className={cn("relative inline-block text-left", className)}>
      <Menu.Button className="inline-flex w-full justify-center focus:outline-none">{trigger}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            "absolute z-50 mt-2 w-56 origin-top-right rounded-lg bg-black/80 backdrop-blur-md shadow-lg border border-white/10 focus:outline-none overflow-hidden",
            align === "right" ? "right-0" : "left-0",
            menuClassName,
          )}
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
