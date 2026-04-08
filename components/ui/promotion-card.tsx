"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PromotionCardProps {
  name: string
  description: string
  bonus: string
  period: string
  features: string[]
  cta: string
  popular: boolean
  index: number
}

export function PromotionCard({ name, description, bonus, period, features, cta, popular, index }: PromotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex"
    >
      <div
        className={`bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-xl p-6 flex flex-col w-full relative ${
          popular ? "ring-2 ring-yellow-500" : ""
        }`}
      >
        {popular && (
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
            <span className="bg-yellow-500 text-black text-xs font-medium px-3 py-1 rounded-full">Popular</span>
          </div>
        )}
        <div className="mb-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/90">{description}</p>
        </div>
        <div className="mb-6 flex-1">
          <div className="mb-4">
            <span className="text-4xl font-bold text-yellow-500">{bonus}</span>
            {period && <span className="text-white/90 ml-2">({period})</span>}
          </div>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full py-3 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors font-medium">
          {cta}
        </button>
      </div>
    </motion.div>
  )
}
