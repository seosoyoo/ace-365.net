"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { TableOfContents } from "@/components/ui/table-of-contents"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

export default function PrivacyPage() {
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

      {/* Table of Contents */}
      <TableOfContents />

      {/* Content */}
      <div className="relative z-10">
        <Header currentTheme={theme} onThemeChange={changeTheme} />

        <PageBreadcrumb items={[{ label: "গোপনীয়তা নীতি", isCurrent: true }]} />

        <section className="pt-4 pb-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <a href="/" className="hover:text-yellow-400 transition-colors">
                  ACE365
                </a>{" "}
                - গোপনীয়তা নীতি (Privacy Policy)
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">কার্যকর তারিখ: মে ২০২৫</p>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/10 shadow-lg mb-12"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/90">
                  এই গোপনীয়তা নীতি (Privacy Policy){" "}
                  <a href="/" className="hover:text-yellow-400 transition-colors">
                  ACE365
                  </a>{" "}
                  ওয়েবসাইটের সকল ব্যবহারকারীর জন্য প্রযোজ্য, বিশেষ করে বাংলাদেশে বসবাসকারী গ্রাহকদের জন্য। এই নীতিমালায় আমরা কীভাবে আপনার
                  ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ এবং রক্ষা করি তা ব্যাখ্যা করা হ��়েছে। 365ACE ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই
                  গোপনীয়তা নীতির শর্তাবলী মেনে নিচ্ছেন।
                </p>
              </div>
            </motion.div>

            {/* Section 1: Information Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-blue-500/20 shadow-lg mb-12"
              id="information-collection"
            >
              <h2 className="text-2xl font-bold text-white mb-4">১. তথ্য সংগ্রহ (Information Collection)</h2>
              <p className="text-white/90 mb-4">আমরা বিভিন্ন ধরণের তথ্য সংগ্রহ করি:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">ব্যক্তিগত তথ্য:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-white/90">
                    <li>নাম</li>
                    <li>মোবাইল নম্বর</li>
                    <li>ইমেইল ঠিকানা</li>
                    <li>জাতীয় পরিচয়পত্র (NID) বা অন্যান্য পরিচয়পত্র</li>
                    <li>অবস্থান তথ্য (location data)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">প্রযুক্তিগত তথ্য:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-white/90">
                    <li>আইপি অ্যাড্রেস</li>
                    <li>ডিভাইস আইডি</li>
                    <li>ব্রাউজার ধরন</li>
                    <li>অপারেটিং সিস্টেম</li>
                    <li>লগ ডেটা</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">লেনদেন সংক্রান্ত তথ্য:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-white/90">
                    <li>bKash/Nagad/Bank Transaction Details</li>
                    <li>জমা ও উত্তোলনের সময়</li>
                    <li>বেটিং ইতিহাস</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Purpose of Information Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-purple-500/20 shadow-lg mb-12"
              id="information-purpose"
            >
              <h2 className="text-2xl font-bold text-white mb-4">২. তথ্য সংগ্রহের উদ্দেশ্য</h2>
              <p className="text-white/90 mb-4">আমরা আপনার তথ্য নিচের উদ্দেশ্যে ব্যবহার করি:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>অ্যাকাউন্ট তৈরি ও ব্যবস্থাপনা</li>
                <li>গেমিং সেবা প্রদান</li>
                <li>নিরাপত্তা নিশ্চিত করা</li>
                <li>লেনদেন প্রক্রিয়া সম্পন্ন করা</li>
                <li>গ্রাহক সহায়তা প্রদান</li>
                <li>কাস্টমাইজড অফার ও প্রোমোশন পাঠানো</li>
                <li>আইনগত বাধ্যবাধকতা পূরণ</li>
              </ul>
            </motion.div>

            {/* Section 3: Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900/60 to-amber-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-amber-500/20 shadow-lg mb-12"
              id="cookies"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৩. কুকিজ (Cookies)</h2>
              <p className="text-white/90">
                আমাদের ওয়েবসাইটে কুকিজ ব্যবহার করা হয় যাতে আমরা আপনার অভিজ্ঞতা উন্নত করতে পারি। কুকিজের মাধ্যমে আপনার পছন্দ, ব্রাউজিং ইতিহাস,
                এবং লগইন তথ্য সংরক্ষিত হয়। আপনি চাইলে আপনার ব্রাউজার থেকে কুকিজ নিষ্ক্রিয় করতে পারেন। তবে এতে কিছু ফিচার সঠিকভাবে কাজ
                নাও করতে পারে।
              </p>
            </motion.div>

            {/* Section 4: Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/60 to-green-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-green-500/20 shadow-lg mb-12"
              id="data-sharing"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৪. তথ্য ভাগাভাগি (Data Sharing)</h2>
              <p className="text-white/90 mb-4">আমরা তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করতে পারি শুধুমাত্র নিচের ক্ষেত্রে:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>লেনদেন প্রক্রিয়াকরণ</li>
                <li>গ্রাহক সহায়তা প্রদানকারী কোম্পানি</li>
                <li>সরকার বা আইন প্রয়োগকারী সংস্থার চাহিদা অনুযায়ী</li>
              </ul>
              <p className="text-white/90 mt-4">আমরা আপনার তথ্য বিক্রি বা ভাড়া করি না।</p>
            </motion.div>

            {/* Section 5: Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/60 to-red-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-red-500/20 shadow-lg mb-12"
              id="data-security"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৫. তথ্য সুরক্ষা (Data Security)</h2>
              <p className="text-white/90 mb-4">আপনার ব্যক্তিগত তথ্য নিরাপদ রাখতে আমরা নিচের সুরক্ষা ব্যবস্থা গ্রহণ করি:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>এনক্রিপশন প্রযুক্তি</li>
                <li>সিকিউর সার্ভার ব্যবহৃত হয়</li>
                <li>নিয়মিত নিরাপত্তা আপডেট</li>
                <li>অভ্যন্তরীণ অ্যাক্সেস সীমিত</li>
              </ul>
            </motion.div>

            {/* Section 6: User Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-indigo-500/20 shadow-lg mb-12"
              id="user-rights"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৬. ব্যবহারকারীর অধিকার (User Rights)</h2>
              <p className="text-white/90 mb-4">আপনি আপনার তথ্য সম্পর্কে নিম্নলিখিত অধিকার রাখেন:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>আপনার তথ্য দেখতে ও আপডেট করতে পারবেন</li>
                <li>অনুরোধ করলে আপনার অ্যাকাউন্ট মুছে ফেলা হবে</li>
                <li>আপনার তথ্য ব্যবহারের উপর আপত্তি জানাতে পারবেন</li>
              </ul>
            </motion.div>

            {/* Section 7: Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-pink-900/60 to-pink-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-pink-500/20 shadow-lg mb-12"
              id="childrens-privacy"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৭. শিশুদের গোপনীয়তা (Children's Privacy)</h2>
              <p className="text-white/90">
                আমাদের সাইট ১৮ বছরের নিচের কারো জন্য নয়। আমরা ইচ্ছাকৃতভাবে শিশুদের থেকে কোনো তথ্য সংগ্রহ করি না। যদি জানা যায় কেউ মিথ্যা
                তথ্য দিয়ে অ্যাকাউন্ট খুলেছে, তবে সেটি সঙ্গে সঙ্গে বন্ধ করা হবে।
              </p>
            </motion.div>

            {/* Section 8: Third-Party Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-teal-900/60 to-teal-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-teal-500/20 shadow-lg mb-12"
              id="third-party-links"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৮. তৃতীয় পক্ষের লিঙ্ক (Third-Party Links)</h2>
              <p className="text-white/90">
                আমাদের ওয়েবসাইটে অন্যান্য ওয়েবসাইটের লিঙ্ক থাকতে পারে। আমরা সেই ওয়েবসাইটগুলোর গোপনীয়তা নীতির জন্য দায়ী নই। আপনি যখন
                কোনো তৃতীয় পক্ষের লিঙ্কে ক্লিক করেন, তখন তাদের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য হবে।
              </p>
            </motion.div>

            {/* Section 9: Changes to Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-900/60 to-cyan-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-cyan-500/20 shadow-lg mb-12"
              id="privacy-changes"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                ৯. গোপনীয়তা নীতির পরিবর্তন (Changes to Privacy Policy)
              </h2>
              <p className="text-white/90">
                আমরা যেকোনো সময় এই গোপনীয়তা নীতি আপডেট করতে পারি। কোনো পরিবর্তনের পরে ওয়েবসাইট ব্যবহার করলে ধরা হবে আপনি সেই
                পরিবর্তন মেনে নিয়েছেন। নীতির সর্বশেষ সংস্করণ ওয়েবসাইটে আপডেট করা থাকবে।
              </p>
            </motion.div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 text-center"
            >
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                হোমপেজে ফিরে যান
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
