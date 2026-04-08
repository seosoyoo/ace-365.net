"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { useState } from "react"

export default function GameProvidersSection() {
  const [isHovered, setIsHovered] = useState(false)

  // Provider logos - combined list
  const providers = [
    { name: "9 Wickets", logo: "/images/providers/9wickets.webp" },
    { name: "Ameba", logo: "/images/providers/ameba.webp" },
    { name: "AP Gaming", logo: "/images/providers/apgaming.webp" },
    { name: "Ask Me Slot", logo: "/images/providers/askme-slot.webp" },
    { name: "Big Time", logo: "/images/providers/bigtime.webp" },
    { name: "BNG", logo: "/images/providers/bng.webp" },
    { name: "Booming Games", logo: "/images/providers/booming-games.webp" },
    { name: "BT Gaming", logo: "/images/providers/btgaming.webp" },
    { name: "BTI", logo: "/images/providers/bti.webp" },
    { name: "BUT", logo: "/images/providers/but.webp" },
    { name: "Fachai", logo: "/images/providers/fachai.webp" },
    { name: "FB Sports", logo: "/images/providers/fbsports.webp" },
    { name: "Funta Gaming", logo: "/images/providers/funta-gaming.webp" },
    { name: "Gaming Friend", logo: "/images/providers/gaming-friend.webp" },
    { name: "Gemini", logo: "/images/providers/gemini.webp" },
    { name: "GPI", logo: "/images/providers/gpi.webp" },
    { name: "JDB", logo: "/images/providers/jdb.webp" },
    { name: "JFF", logo: "/images/providers/jff.webp" },
    { name: "JILI", logo: "/images/providers/jili.webp" },
    { name: "KA Gaming", logo: "/images/providers/ka-gaming.webp" },
    { name: "Lucky Sports", logo: "/images/providers/lucky-sports.webp" },
    { name: "Maha", logo: "/images/providers/maha.webp" },
    { name: "Mega", logo: "/images/providers/mega.webp" },
    { name: "Micro Gaming", logo: "/images/providers/micro-gaming.webp" },
    { name: "Netent", logo: "/images/providers/netent.webp" },
    { name: "Nolimit", logo: "/images/providers/nolimit.webp" },
    { name: "PG", logo: "/images/providers/pg.webp" },
    { name: "Playstar", logo: "/images/providers/playstar.webp" },
    { name: "Play Tech", logo: "/images/providers/playtech.webp" },
    { name: "Poly", logo: "/images/providers/poly.webp" },
    { name: "PP", logo: "/images/providers/pp.webp" },
    { name: "RCB", logo: "/images/providers/rcb.webp" },
    { name: "Red Tiger", logo: "/images/providers/red-tiger.webp" },
    { name: "Saba", logo: "/images/providers/saba.webp" },

  ]

  // Calculate animation duration based on number of providers
  const animationDuration = providers.length * 3 // 3 seconds per provider

  return (
    <section id="providers" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <SectionTitle title="আমাদের গেম প্রদানকারী" description="বিশ্বের শীর্ষস্থানীয় প্রদানকারীদের থেকে গেমের অভিজ্ঞতা নিন" />
        </div>

        {/* Marquee container with CSS animation */}
        <div
          className="relative overflow-hidden"
          style={{ height: "120px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex space-x-8 absolute left-0 whitespace-nowrap"
            style={{
              animation: isHovered ? "none" : `marquee ${animationDuration}s linear infinite`,
              transform: isHovered ? "translateX(0)" : "none",
            }}
          >
            {/* First set of logos */}
            {providers.map((provider, index) => (
              <ProviderLogo key={`set1-${index}`} name={provider.name} logo={provider.logo} index={index} />
            ))}

            {/* Duplicate set for continuous scrolling */}
            {providers.map((provider, index) => (
              <ProviderLogo key={`set2-${index}`} name={provider.name} logo={provider.logo} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Add the CSS animation keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

// Provider logo component with hover animation
function ProviderLogo({ name, logo, index }: { name: string; logo: string; index: number }) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="rounded-lg p-4 h-24 w-40 flex items-center justify-center hover:bg-black/20 transition-colors">
        <img
          src={logo || "/placeholder.svg"}
          alt={name}
          className="max-h-16 max-w-full object-contain mix-blend-screen drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            ;(e.target as HTMLImageElement).src = `/placeholder.svg?height=64&width=120&query=${encodeURIComponent(
              name + " gaming logo",
            )}`
          }}
        />
      </div>
    </motion.div>
  )
}
