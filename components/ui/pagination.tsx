"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showFirstLast?: boolean
  maxVisiblePages?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showFirstLast = true,
  maxVisiblePages = 5,
}: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    if (currentPage > 1 + Math.floor(maxVisiblePages / 2) && totalPages > maxVisiblePages) {
      pageNumbers.push(1)
      // Add ellipsis if there's a gap
      if (currentPage > 2 + Math.floor(maxVisiblePages / 2)) {
        pageNumbers.push("ellipsis-start")
      }
    }

    // Calculate range of visible page numbers
    let startPage = Math.max(1, currentPage - Math.floor((maxVisiblePages - 2) / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 3)

    if (endPage - startPage < maxVisiblePages - 3) {
      startPage = Math.max(1, endPage - (maxVisiblePages - 3))
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    // Always show last page
    if (currentPage < totalPages - Math.floor(maxVisiblePages / 2) && totalPages > maxVisiblePages) {
      // Add ellipsis if there's a gap
      if (currentPage < totalPages - 1 - Math.floor(maxVisiblePages / 2)) {
        pageNumbers.push("ellipsis-end")
      }
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className={cn("flex justify-center items-center space-x-1", className)} aria-label="Pagination">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-md focus:outline-none transition-colors",
          currentPage === 1 ? "text-white/40 cursor-not-allowed" : "text-white/70 hover:text-white hover:bg-white/10",
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* First page button */}
      {showFirstLast && !pageNumbers.includes(1) && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Go to first page"
          >
            1
          </button>
          <span className="text-white/40">
            <MoreHorizontal className="h-5 w-5" />
          </span>
        </>
      )}

      {/* Page numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "ellipsis-start" || page === "ellipsis-end") {
          return (
            <span key={`ellipsis-${index}`} className="text-white/40">
              <MoreHorizontal className="h-5 w-5" />
            </span>
          )
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={cn(
              "px-3 py-1.5 rounded-md transition-colors",
              currentPage === page
                ? "bg-white/20 text-white font-medium"
                : "text-white/70 hover:text-white hover:bg-white/10",
            )}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        )
      })}

      {/* Last page button */}
      {showFirstLast && !pageNumbers.includes(totalPages) && (
        <>
          <span className="text-white/40">
            <MoreHorizontal className="h-5 w-5" />
          </span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Go to last page"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-md focus:outline-none transition-colors",
          currentPage === totalPages
            ? "text-white/40 cursor-not-allowed"
            : "text-white/70 hover:text-white hover:bg-white/10",
        )}
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  )
}
