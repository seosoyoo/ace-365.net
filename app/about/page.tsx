"use client"

import { motion } from "framer-motion"
import { BackToTop } from "@/components/ui/back-to-top"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { useState } from "react"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"
import { TableOfContents } from "@/components/ui/table-of-contents"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

export default function AboutPage() {
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

        <PageBreadcrumb items={[{ label: "About", isCurrent: true }]} />

        {/* Table of Contents */}
        <TableOfContents />

        <section className="pt-4 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl mb-16"
              id="introduction"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text">
                  ACE365 সম্পর্কে
                </span>
              </h1>

              <p className="text-white/90 text-lg leading-relaxed">
                ACE365, আমরা কেবল আরেকটি অনলাইন ক্যাসিনো বা স্পোর্টসবুকের চেয়েও বেশি কিছু। আমরা আবেগপ্রবণ গেমার, বাজিকর এবং
                প্রযুক্তি-বুদ্ধিমান স্বপ্নদ্রষ্টাদের একটি সম্প্রদায় যারা বিশ্বাস করে যে গেমিং মজাদার, ন্যায্য এবং ফলপ্রসূ হওয়া উচিত—বিশেষ করে
                বাংলাদেশের খেলোয়াড়দের জন্য।
              </p>

              <p className="text-white/90 text-lg leading-relaxed mt-4">আমাদের সূচনার পর থেকে, আমাদের লক্ষ্য সহজ:</p>

              <p className="text-white/90 text-lg leading-relaxed mt-4">
                একটি নিরাপদ, মসৃণ এবং উত্তেজনাপূর্ণ প্ল্যাটফর্ম তৈরি করা যেখানে আপনি আসল অর্থের ক্যাসিনো গেম উপভোগ করতে পারবেন, আপনার
                প্রিয় খেলাগুলিতে বাজি ধরতে পারবেন এবং বিনোদনের জগৎ অন্বেষণ করতে পারবেন - সবকিছুই আপনার ফোন থে��ে।
              </p>

              <p className="text-white/90 text-lg leading-relaxed mt-4">আমরা জানি বাংলাদেশী খেলোয়াড়দের কী প্রয়োজন:</p>

              <ul className="list-disc pl-6 mt-2 text-white/90 text-lg space-y-2">
                <li>বিকাশ, নগদ, রকেটের মাধ্যমে দ্রুত আমানত এবং উত্তোলন</li>
                <li>সহজে ব্যবহারযোগ্য অ্যাপ যা এমনকি কম দামের অ্যান্ড্রয়েড ফোনেও কাজ করে</li>
                <li>পূর্ণ বাংলা ভাষা সহায়তা</li>
                <li>24/7 গ্রাহক পরিষেবা যা আসলে সাহায্য করে</li>
                <li>এবং সবচেয়ে গুরুত্বপূর্ণ: সৎ গেম এবং দ্রুত অর্থপ্রদান</li>
              </ul>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-blue-500/20 shadow-xl mb-16"
              id="vision"
            >
              <h2 className="text-3xl font-bold text-white mb-6">আমাদের দৃষ্টিভঙ্গি</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                উচ্চমানের গেম, স্থানীয় সহায়তা এবং বিশ্বাসযোগ্য ন্যায্য খেলা প্রদানের মাধ্যমে বাংলাদেশে অনলাইন গেমিং এবং বেটিং এর জন্য #1 পছন্দ
                হওয়া।
              </p>
            </motion.div>

            {/* Core Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-purple-500/20 shadow-xl mb-16"
              id="core-values"
            >
              <h2 className="text-3xl font-bold text-white mb-6">আমাদের মূল মূল্যবোধ</h2>
              <ul className="space-y-4 text-white/90 text-lg">
                <li className="flex">
                  <span className="text-purple-300 font-bold mr-2">•</span>
                  <span>
                    <strong className="text-purple-300">বিশ্বাস</strong> - প্রতিটি খেলা ন্যায্য, প্রতিটি অর্থপ্রদান স্বচ্ছ
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-300 font-bold mr-2">•</span>
                  <span>
                    <strong className="text-purple-300">গতি</strong> - দ্রুত লোডিং, দ্রুত সহায়তা এবং তাৎক্ষণিক অর্থপ্রদান
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-300 font-bold mr-2">•</span>
                  <span>
                    <strong className="text-purple-300">সম্মান</strong> - আপনি কেবল একজন খেলোয়াড় নন; আপনি আমাদের পরিবারের অংশ
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-300 font-bold mr-2">•</span>
                  <span>
                    <strong className="text-purple-300">উদ্ভাবন</strong> - আমরা আমাদের প্রযুক্তি আপগ্রেড করতে থাকি যাতে আপনি সর্বদা
                    এগিয়ে থাকেন
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* What You Get Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900/60 to-yellow-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-yellow-500/20 shadow-xl mb-16"
              id="what-you-get"
            >
              <h2 className="text-3xl font-bold text-white mb-6">ACE365 এ আপনি কী পাবেন</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">��্যাসিনো গেমস</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    ক্লাসিক স্লট থেকে রিয়েল-টাইম লাইভ ডিলার টেবিল - আমাদের সবকিছুই আছে। শীর্ষস্থানীয় সরবরাহকারীদের শত শত গেমের সাথে,
                    আপনার জয়ের পথ কখনই ফুরিয়ে যাবে না।
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">স্পোর্টস বেটিং</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    আপনি ক্রিকেট, ফুটবল, কাবাডি বা টেনিস পছন্দ করুন না কেন, আমাদের স্পোর্টসবুকে আপনার পছন্দের সুযোগ রয়েছে - লাইভ বেট এবং
                    বিশেষ বাংলাদেশী লিগ সহ।
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">মোবাইল গেমিং</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    আমাদের হালকা ওজনের অ্যাপ ডাউনলোড করুন এবং যেকোনো সময়, যেকোনো জায়গায় খেলুন। ট্র্যাফিক জ্যামে আটকে থাকা অবস্থায় বাজি ধরছেন
                    নাকি রিল ঘুরাচ্ছেন? আমরা আপনার জন্য ব্যবস্থা করেছি।
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3">এক্সক্লুসিভ বোনাস</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    দৈনিক ক্যাশব্যাক, স্বাগত বোনাস, ফ্রি স্পিন, রেফারেল পুরষ্কার - আমরা অন্য কারও মতো আনুগত্যকে পুরস্কৃত করি না।
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Built for Bangladesh Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/60 to-green-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-green-500/20 shadow-xl mb-16"
              id="built-for-bangladesh"
            >
              <h2 className="text-3xl font-bold text-white mb-6">বাংলাদেশের জন্য তৈরি, গ্লোবাল স্ট্যান্ডার্ড দ্বারা পরিচালিত</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                ACE365 বিশেষভাবে বাংলাদেশী ব্যবহারকারীদের জন্য তৈরি, তবে এটি বিশ্বব্যাপী প্রযুক্তি এবং লাইসেন্সিং দ্বারা চালিত। আমরা কঠোর
                আন্তর্জাতিক গেমিং আইন অনুসরণ করি এবং আপনার ডেটা এবং অর্থ নিরাপদ রাখতে সামরিক-গ্রেড এনক্রিপশন ব্যবহার করি।
              </p>

              <h3 className="text-2xl font-bold text-green-300 mb-4">
                আমরা গর্বের সাথে বলতে পারি যে আমরা বাংলাদেশের প্রথম প্ল্যাটফর্মগুলির মধ্যে একটি যারা নিম্নলিখিত অফার করে:
              </h3>

              <ul className="space-y-4 text-white/90 text-lg">
                <li className="flex">
                  <span className="text-green-300 font-bold mr-2">•</span>
                  <span>BDT (টাকা) এর জন্য সম্পূর্ণ সমর্থন</span>
                </li>
                <li className="flex">
                  <span className="text-green-300 font-bold mr-2">•</span>
                  <span>OTP বা ফিঙ্গারপ্রিন্টের মাধ্যমে সহজ লগইন</span>
                </li>
                <li className="flex">
                  <span className="text-green-300 font-bold mr-2">•</span>
                  <span>BPL, ঈদ, দুর্গাপূজা এবং আরও অনেক কিছুর সময় স্থানীয় প্রচারণা</span>
                </li>
              </ul>
            </motion.div>

            {/* Join ACE365 Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-900/60 to-yellow-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-yellow-500/20 shadow-xl"
              id="join"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                <span className="text-yellow-400">ACE365</span>
                -এ যোগ দিন আজই!
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 text-center">
                ACE365 বাংলাদেশের খেলোয়াড়দের জন্য সেরা অনলাইন গেমিং অভিজ্ঞতা নিয়ে এসেছে। এখনই নিবন্ধন করুন এবং আপনার স্বাগত বোনাস দাবি
                করুন।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.ace-365.net"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="px-8 py-4 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors flex items-center justify-center font-medium text-lg"
                >
                  রেজিস্টার করুন
                </a>
                <a
                  href="https://www.ace-365.net"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center font-medium text-lg"
                >
                  লগইন
                </a>
              </div>
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
