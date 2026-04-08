"use client"

import { useEffect, useState } from "react"
import ThemeBackground from "@/components/theme-backgrounds/theme-background"
import Header from "@/components/navbar/header"
import HeroSection from "@/components/sections/hero-section"
import Content2Section from "@/components/sections/content2-section"
import GamesSection from "@/components/sections/games-section"
import GameProvidersSection from "@/components/sections/game-providers-section"
import Content1Section from "@/components/sections/content1-section"
import PromotionsSection from "@/components/sections/promotions-section"
import FooterSection from "@/components/navbar/footer-section"
import { BackToTop } from "@/components/ui/back-to-top"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { TableOfContents } from "@/components/ui/table-of-contents"
import { useTheme } from "@/contexts/theme-context"

export default function ClientPage() {
  // Add a fallback theme state to prevent the error during initial render
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme() // Initialize theme here

  // Only access the theme context after component has mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Safe access to theme context
  // const themeContext = mounted ? useTheme() : { theme: "sunrise" }
  // const { theme } = themeContext

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.ace-365.net/#webpage",
                url: "https://www.ace-365.net/",
                name: "ACE365 - Bangladesh's Top Fun Casino & Bet Platform",
                description:
                  "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
              },
              {
                "@type": "WebSite",
                "@id": "https://www.ace-365.net/#website",
                url: "https://www.ace-365.net/",
                name: "ACE365",
                description: "ACE365 - Bangladesh's Top Fun Casino & Bet Platform",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.ace-365.net/games?search={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://www.ace-365.net/#organization",
                name: "ACE365",
                url: "https://www.ace-365.net/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.ace-365.net/images/brands/ace365.webp",
                  width: 600,
                  height: 60,
                },
                sameAs: [
                  "https://www.facebook.com/365ace",
                  "https://twitter.com/365ace",
                  "https://www.instagram.com/365ace",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+880-1234-567890",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  email: "support@ace-365.net",
                },
              },
              {
                "@type": "SoftwareApplication",
                name: "365ACE ক্যাসিনো এবং স্পোর্টস বেটিং অ্যাপ",
                applicationCategory: "GameApplication",
                operatingSystem: "Android, iOS, Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "BDT",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "1250",
                },
              },
            ],
          }),
        }}
      />
      <main id="main-content" className="relative w-full min-h-screen overflow-x-hidden pb-16 md:pb-0">
        {/* Sky Background - Now using our optimized component */}
        <ThemeBackground />

        {/* Table of Contents */}
        <TableOfContents />

        {/* Content */}
        <div className="relative z-10">
          <Header />
          {mounted && <HeroSection theme={theme} />}
          <GamesSection />
          <GameProvidersSection />
          <PromotionsSection />
          <Content1Section />
          <Content2Section />
          <FooterSection />
        </div>

        {/* Back to Top Button */}
        <BackToTop />

        {/* Mobile Footer */}
        <MobileFooter />
      </main>
    </>
  )
}
