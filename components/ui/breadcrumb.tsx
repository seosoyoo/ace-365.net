import React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItemProps {
  href?: string
  children: React.ReactNode
  isCurrent?: boolean
  className?: string
}

export function BreadcrumbItem({ href, children, isCurrent, className }: BreadcrumbItemProps) {
  const Component = href && !isCurrent ? "a" : "span"

  return (
    <Component
      href={href}
      className={cn(
        "text-sm font-medium",
        isCurrent ? "text-white pointer-events-none" : "text-white/70 hover:text-white",
        className,
      )}
      aria-current={isCurrent ? "page" : undefined}
    >
      {children}
    </Component>
  )
}

interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
  separator?: React.ReactNode
  showHomeIcon?: boolean
  homeHref?: string
}

export function Breadcrumb({
  children,
  className,
  separator = <ChevronRight className="h-4 w-4 text-white/40" />,
  showHomeIcon = true,
  homeHref = "/",
}: BreadcrumbProps) {
  // Filter out any null or undefined children
  const childrenArray = React.Children.toArray(children).filter(Boolean)

  return (
    <nav className={cn("flex items-center space-x-2", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {showHomeIcon && (
          <li className="flex items-center">
            <BreadcrumbItem href={homeHref}>
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </BreadcrumbItem>
          </li>
        )}

        {React.Children.map(childrenArray, (child, index) => {
          const isLast = index === childrenArray.length - 1

          return (
            <li key={index} className="flex items-center">
              {index > 0 || showHomeIcon ? <div className="mx-2">{separator}</div> : null}
              {child}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
