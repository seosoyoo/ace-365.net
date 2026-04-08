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

export default function TermsPage() {
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

        <PageBreadcrumb items={[{ label: "শর্তাবলী", isCurrent: true }]} />

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
                - শর্তাবলী (Terms and Conditions)
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                <a href="/" className="hover:text-yellow-400 transition-colors">
                  ACE365
                </a>{" "}
                ওয়েবসাইটে স্বাগতম। এই ওয়েবসাইটটি ব্যবহার করার আগে দয়া করে আমাদের শর্তাবলী মনোযোগ সহকারে পড়ুন। এই শর্তাবলীতে বর্ণিত সব
                নিয়ম, নীতিমালা ও শর্ত মেনে চলা আপনার দায়িত্ব। আপনি যদি এই শর্তাবলী মেনে নিতে অনিচ্ছুক হন, তবে অনুগ্রহ করে 365ACE
                ওয়েবসাইট ব্যবহার করবেন না।
              </p>
            </motion.div>

            {/* Section 1: সাধারণ তথ্য (General Information) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-blue-500/20 shadow-lg mb-12"
              id="general-info"
            >
              <h2 className="text-2xl font-bold text-white mb-4">১. সাধারণ তথ্য</h2>
              <p className="text-white/90 mb-4">
                এই ওয়েবসাইটটি পরিচালনা করে 365ACE ("আমরা", "আমাদের", বা "সাইট")। ওয়েবসাইটটি মূলত অনলাইন গেমিং, ক্যাসিনো, স্পোর্টস
                বেটিং এবং অন্যান্য বিনোদনমূলক কার্যক্রম প্রদান করে। বাংলাদেশে বসবাসকারী ব্যবহারকারীদের জন্য আমাদের সেবা প্রদান করা হয়, তবে
                আপনাকে অবশ্যই ১৮ বছর বা তার বেশি বয়সী হতে হবে।
              </p>
            </motion.div>

            {/* Section 2: অ্যাকাউন্ট রেজিস্ট্রেশন (Account Registration) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-purple-500/20 shadow-lg mb-12"
              id="account-registration"
            >
              <h2 className="text-2xl font-bold text-white mb-4">২. অ্যাকাউন্ট রেজিস্ট্রেশন</h2>
              <p className="text-white/90 mb-4">আপনি যখন 365ACE-এ একটি অ্যাকাউন্ট তৈরি করেন, তখন আপনি নিশ্চিত করছেন যে:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>আপনি কমপক্ষে ১৮ বছর বয়সী।</li>
                <li>আপনি প্রদত্ত তথ্য সঠিক, হালনাগাদ এবং সম্পূর্ণ।</li>
                <li>আপনি বাংলাদেশের একজন বৈধ নাগরিক বা বাসিন্দা।</li>
              </ul>
              <p className="text-white/90 mt-4">
                অ্যাকাউন্টের নিরাপত্তা বজায় রাখা আপনার দায়িত্ব। আপনার পাসওয়ার্ড বা লগইন তথ্য অন্য কারো সঙ্গে ভাগ করা যাবে না। কোন অননুমোদিত
                প্রবেশাধিকার হলে আমাদের সাথে সাথে যোগাযোগ করুন।
              </p>
            </motion.div>

            {/* Section 3: গেমস এবং বেটিং নীতি (Games and Betting Policy) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/60 to-green-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-green-500/20 shadow-lg mb-12"
              id="games-betting"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৩. গেমস এবং বেটিং নীতি</h2>
              <p className="text-white/90 mb-4">
                365ACE ওয়েবসাইটে বিভিন্ন ক্যাসিনো গেমস, লাইভ ডিলার, স্পোর্টস বেটিং ও স্লট মেশিন উপলব্ধ। আপনি আমাদের গেমগুলো ব্যবহার
                করার সময় নিচের নীতিগুলো মানতে বাধ্য:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>কোন ধরণের স্ক্রিপ্ট, বট বা স্বয়ংক্রিয় সফটওয়্যার ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।</li>
                <li>প্রতারণামূলক কার্যক্রম করলে আপনার অ্যাকাউন্ট স্থগিত বা বাতিল হতে পারে।</li>
                <li>আমরা যে কোনো সময় গেম, শর্ত বা পুরস্কারের নিয়ম পরিবর্তন করতে পারি।</li>
              </ul>
            </motion.div>

            {/* Section 4: অর্থ জমা ও উত্তোলন (Deposits and Withdrawals) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900/60 to-amber-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-amber-500/20 shadow-lg mb-12"
              id="deposits-withdrawals"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৪. অর্থ জমা ও উত্তোলন</h2>
              <p className="text-white/90 mb-4">
                আমরা bKash, Nagad, এবং অন্যান্য জনপ্রিয় মোবাইল ব্যাংকিং সার্ভিসের মাধ্যমে টাকা জমা ও উত্তোলনের সুবিধা দিয়ে থাকি। নিচের
                শর্তগুলো মানতে হবে:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>অর্থ জমা/উত্তোলন শুধুমাত্র আপনার নিজের নামে থাকা অ্যাকাউন্টের মাধ্যমেই করতে হবে।</li>
                <li>সন্দেহজনক আর্থিক লেনদেন হলে আমরা যাচাই করার অধিকার রাখি।</li>
                <li>উত্তোলনের জন্য KYC প্রক্রিয়া সম্পন্ন করা বাধ্যতামূলক।</li>
              </ul>
            </motion.div>

            {/* Section 5: বোনাস ও প্রোমোশন (Bonus and Promotion) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-900/60 to-yellow-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-yellow-500/20 shadow-lg mb-12"
              id="bonus-promotion"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৫. বোনাস ও প্রোমোশন</h2>
              <p className="text-white/90 mb-4">
                365ACE নিয়মিতভাবে প্রোমোশন এবং বোনাস অফার করে। এই অফারগুলো শুধুমাত্র নির্দিষ্ট সময়ের জন্য এবং নির্দিষ্ট শর্তসাপেক্ষে
                প্রযোজ্য:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>���কাধিক অ্যাকাউন্ট খুলে বোনাস নেওয়া নিষিদ্ধ।</li>
                <li>বোনাস গ্রহণের পরে নির্দিষ্ট সময়ের মধ্যে নির্দিষ্ট পরিমাণ বাজি ধরতে হবে।</li>
                <li>আমরা যে কোনো সময় অফার বাতিল বা পরিবর্তন করতে পারি।</li>
              </ul>
            </motion.div>

            {/* Section 6: সীমাবদ্ধতা (Limitations) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/60 to-red-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-red-500/20 shadow-lg mb-12"
              id="limitations"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৬. সীমাবদ্ধতা</h2>
              <p className="text-white/90 mb-4">আমাদের সাইট ব্যবহার করতে কিছু সীমাবদ্ধতা রয়েছে:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>১৮ বছরের নিচে কারো জন্য সাইটে প্রবেশ নিষিদ্ধ।</li>
                <li>আপনি আমাদের সাইট ব্যবহার করে কোন অবৈধ কার্যক্রম করতে পারবেন না।</li>
                <li>আমাদের কন্টেন্ট পুনঃপ্রকাশ বা কপি করা যাবে না।</li>
              </ul>
            </motion.div>

            {/* Section 7: গোপনীয়তা নীতি (Privacy Policy) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-indigo-500/20 shadow-lg mb-12"
              id="privacy-policy"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৭. গোপনীয়তা নীতি</h2>
              <p className="text-white/90">
                আপনার ব্যক্তিগত তথ্য আমাদের কাছে গুরুত্বপূর্ণ। আমাদের গোপনীয়তা নীতিমালায় আমরা কিভাবে তথ্য সংগ্রহ, সংরক্ষণ এবং ব্যবহার করি তা
                ব্যাখ্যা করা হয়েছে। আপনি এই শর্তে সম্মত হচ্ছেন যে আমরা আপনার তথ্য ব্যবহার করতে পারি আমাদের পরিষেবা উন্নয়নের জন্য।
              </p>
            </motion.div>

            {/* Section 8: দায়িত্ব সীমাবদ্ধতা (Limitation of Liability) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-teal-900/60 to-teal-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-teal-500/20 shadow-lg mb-12"
              id="liability"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৮. দায়িত্ব সীমাবদ্ধতা</h2>
              <p className="text-white/90 mb-4">আমরা কোনোভাবেই দায়বদ্ধ থাকবো না:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>আপনার ক্ষতির জন্য যা আমাদের নিয়ন্ত্রণের বাইরে।</li>
                <li>কোন থার্ড-পার্টি সার্ভিস ব্যবহারে আপনার কোনো আর্থিক ক্ষতির জন্য।</li>
                <li>সার্ভার ডাউন, টেকনিক্যাল সমস্যা বা সিস্টেম ফেইলুরের কারণে গেম চলাকালীন যেকোনো সমস্যার জন্য।</li>
              </ul>
            </motion.div>

            {/* Section 9: শর্তাবলীর পরিবর্তন (Changes to Terms) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-pink-900/60 to-pink-600/30 backdrop-blur-md rounded-xl p-6 md:p-10 border border-pink-500/20 shadow-lg mb-12"
              id="terms-changes"
            >
              <h2 className="text-2xl font-bold text-white mb-4">৯. শর্তাবলীর পরিবর্তন</h2>
              <p className="text-white/90">
                আমরা যে কোনো সময় আমাদের শর্তাবলী পরিবর্তন বা আপডেট করার অধিকার রাখি। পরিবর্তনের পরে ওয়েবসাইট ব্যবহার করলে ধরে নেওয়া
                হবে আপনি সেই পরিবর্তন মেনে নিয়েছেন।
              </p>
            </motion.div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
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
