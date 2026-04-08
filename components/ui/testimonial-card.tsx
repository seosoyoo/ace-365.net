"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
  index: number
}

export function TestimonialCard({ name, role, content, avatar, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-xl p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-white/90">{role}</p>
          </div>
        </div>
        <p className="text-white/90">"{content}"</p>
      </div>
    </motion.div>
  )
}
