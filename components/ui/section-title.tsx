"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-xl text-white drop-shadow-md max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </>
  )
}
