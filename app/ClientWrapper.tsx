"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Use dynamic import with ssr: false in a Client Component
const ClientPage = dynamic(() => import("./ClientPage"), { ssr: false })

export default function ClientWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black"></div>}>
      <ClientPage />
    </Suspense>
  )
}
