import { Breadcrumb, BreadcrumbItem } from "./breadcrumb"
import { Home } from "lucide-react"

interface PageBreadcrumbProps {
  items: {
    label: string
    href?: string
    isCurrent?: boolean
  }[]
}

export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-24 pb-4">
      <Breadcrumb className="text-sm">
        {items.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href} isCurrent={item.isCurrent}>
            {index === 0 && item.label === "Home" ? <Home className="h-4 w-4" /> : item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  )
}
