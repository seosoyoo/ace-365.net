"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Check, Gift, Star, Shield, Clock, Users, Zap, Percent } from "lucide-react"
import Image from "next/image"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

export default function PromotionsPage() {
  const [theme, setTheme] = useState<ThemeType>("sunrise")
  const [transitioning, setTransitioning] = useState(false)

  const changeTheme = (newTheme: ThemeType) => {
    if (theme === newTheme) return

    setTransitioning(true)
    setTimeout(() => {
      setTheme(newTheme)
      setTimeout(() => {
        setTransitioning(false)
      }, 500)
    }, 300)
  }

  // Casino brands data
  const brands = [
    {
      id: "365ACE",
      name: "365ACE",
      logo: "/images/brands/ace365.webp",
      tagline: "Best Online Casino in Bangladesh",
      description:
        "365ACE-তে সবার জন্য কিছু না কিছু আছে। নিরাপদ, ব্যবহারকারী-বান্ধব এবং বৈশিষ্ট্যে ভরপুর, এটি এমন খেলোয়াড়দের জন্য সেরা গেমিং প্ল্যাটফর্ম যারা বড় জয় পেতে চান।",
      bonuses: ["প্রথম খেলার পরে ১০০% পর্যন্ত বিনামূল্যে আমানত বোনাস", "ভিআইপি অ্যাকাউন্ট ৩০ দিন"],
      features: [
        {
          title: "গেমের বৈচিত্র্য",
          description:
            "365ACE শত শত অনলাইন ক্যাসিনো গেম অফার করে, যার মধ্যে রয়েছে লাইভ ব্ল্যাকজ্যাক, রুলেট, পোকার এবং বিভিন্ন ধরণের স্লট মেশিন।",
          icon: <Star className="h-5 w-5 text-yellow-400" />,
        },
        {
          title: "স্থানীয় অর্থপ্রদানের পদ্ধতি",
          description:
            "365ACE বিকাশ, নগদ এবং রকেটের মতো স্থানীয় পেমেন্ট সিস্টেমগুলিকে সমর্থন করে, যা বাংলাদেশী খেলোয়াড়দের জন্য জমা এবং উত্তোলন সহজ এবং আরও সুবিধাজনক করে তোলে।",
          icon: <Shield className="h-5 w-5 text-yellow-400" />,
        },
        {
          title: "এক্সক্লুসিভ বোনাস",
          description:
            "365ACE নতুন খেলোয়াড়দের শুরু করার জন্য একটি উদার স্বাগত বোনাস, পাশাপাশি নিয়মিত প্রচার এবং ক্যাশব্যাক পুরষ্কার প্রদান করে।",
          icon: <Gift className="h-5 w-5 text-yellow-400" />,
        },
        {
          title: "২৪/৭ গ্রাহক সহায়তা",
          description:
            "আমাদের বাংলাভাষী সহায়তা দল যেকোনো প্রশ্ন বা সমস্যা সমাধানে আপনাকে সহায়তা করার জন্য সর্বদা উপলব্ধ।",
          icon: <Clock className="h-5 w-5 text-yellow-400" />,
        },
      ],
      color: "from-blue-900/60 to-blue-600/30",
      borderColor: "border-blue-500/20",
    },
    {
      id: "365ACE",
      name: "365ACE",
      logo: "/images/brands/ace365.webp",
      tagline: "ক্যাসিনো সাফল্যের জন্য আপনার জয়ের টিকিট",
      description:
        "365ACE সর্বদা সহজ, দ্রুত এবং নিরবচ্ছিন্ন প্রক্রিয়া। আপনি ব্রাউজার ব্যবহার করে 365ACE লগইন করতে পারেন অথবা আরও মজাদার এবং সহজ অভিজ্ঞতা পেতে অ্যাপটি ডাউনলোড করতে পারেন।",
      bonuses: ["প্রতি সপ্তাহে ৭৭% ক্যাশব্যাক লস পান", "৫টি খেলার পরে সাইন আপ বোনাস ৳১,০০০ পর্যন্ত।"],
      features: [
        {
          title: "উচ্চ RTP গেম",
          description: "সেরা রিটার্ন টু প্লেয়ার (RTP) রেটের কিছু সহ স্লট এবং টেবিল গেম খেলুন।",
          icon: <Percent className="h-5 w-5 text-green-400" />,
        },
        {
          title: "সাপ্তাহিক ক্যাশব্যাক",
          description:
            "আপনার ক্ষতির উপর সাপ্তাহিক ক্যাশব্যাক পুরষ্কার পান - কারণ 365ACE তে, প্রতিটি খেলোয়াড় দ্বিতীয় সুযোগ পাওয়ার যোগ্য।",
          icon: <Zap className="h-5 w-5 text-green-400" />,
        },
        {
          title: "স্থানীয় পেমেন্ট সমর্থন",
          description: "365ACE সহজে, স্থানীয়ভাবে জমা এবং উত্তোলনের জন্য বিকাশ, নগদ এবং রকেট গ্রহণ করে।",
          icon: <Shield className="h-5 w-5 text-green-400" />,
        },
        {
          title: "নিযুক্ত আনুগত্য প্রোগ্রাম",
          description:
            "খেলার সাথে সাথে লয়্যালটি পয়েন্ট অর্জন করুন, যা নগদ, বোনাস বা এক্সক্লুসিভ পুরষ্কারের জন্য রিডিম করা যেতে পারে।",
          icon: <Users className="h-5 w-5 text-green-400" />,
        },
      ],
      color: "from-green-900/60 to-green-600/30",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden pb-16 md:pb-0">
      {/* Sky Backgrounds */}
      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "day" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <DaySky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "night" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <NightSky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "sunrise" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <SunriseSky />
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
          theme === "sunset" ? "opacity-100" : "opacity-0"
        } ${transitioning ? "pointer-events-none" : ""}`}
      >
        <SunsetSky />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header currentTheme={theme} onThemeChange={changeTheme} />

        <PageBreadcrumb items={[{ label: "Promotions", isCurrent: true }]} />

        <section className="pt-4 pb-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">একচেটিয়া প্রচার</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
              আমাদের ব্র্যান্ড পরিবারের মধ্যে আশ্চর্যজনক বোনাস এবং বৈশিষ্ট্যগুলি আবিষ্কার করুন। প্রতিটি প্ল্যাটফর্ম আপনার গেমিং অভিজ্ঞতা উন্নত করার জন্য ডিজাইন করা অনন্য সুবিধা প্রদান করে।
              </p>
            </motion.div>

            {/* Brands Sections */}
            <div className="space-y-16">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${brand.color} backdrop-blur-md rounded-xl border ${brand.borderColor} shadow-lg overflow-hidden`}
                >
                  <div className="p-6 md:p-8">
                    {/* Brand Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                      <motion.div
                        className="relative h-32 w-32 md:h-40 md:w-40 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain mix-blend-screen drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]"
                          sizes="(max-width: 768px) 128px, 160px"
                        />
                      </motion.div>
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{brand.name}</h2>
                        <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">{brand.tagline}</h3>
                        <p className="text-white/80 max-w-3xl">{brand.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Bonuses Section */}
                      <div className="lg:col-span-1">
                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 h-full">
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <Gift className="h-6 w-6 mr-2 text-yellow-500" />
                            Exclusive Bonuses
                          </h4>
                          <ul className="space-y-4">
                            {brand.bonuses.map((bonus, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                className="flex items-start"
                              >
                                <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white/90">{bonus}</span>
                              </motion.li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <a
                              href="https://ash521.com/m/index.html?affiliateCode=aliance"
                              target="_blank"
                              rel="nofollow noreferrer noopener"
                              className="inline-block w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg text-center transition-colors"
                            >
                              এখনই বোনাস দাবি করুন
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Features Section */}
                      <div className="lg:col-span-2">
                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 h-full">
                          <h4 className="text-xl font-bold text-white mb-6">Key Features</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {brand.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                className="bg-black/20 backdrop-blur-sm rounded-lg p-5"
                              >
                                <div className="flex items-center mb-3">
                                  <div className="mr-3">{feature.icon}</div>
                                  <h5 className="font-semibold text-white">{feature.title}</h5>
                                </div>
                                <p className="text-white/80 text-sm">{feature.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 text-center">
                      <a
                        href="https://ash521.com/m/index.html?affiliateCode=aliance"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        className="inline-block px-8 py-3 bg-white hover:bg-white/90 text-black font-medium rounded-full text-center transition-colors shadow-lg"
                      >
                        Join {brand.name} Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                Back to Home
              </a>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Mobile Footer */}
      <MobileFooter />
    </main>
  )
}
