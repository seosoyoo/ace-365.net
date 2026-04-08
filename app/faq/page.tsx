"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ChevronDown, Search, X } from "lucide-react"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"
import { TableOfContents } from "@/components/ui/table-of-contents"

// FAQ Item interface
interface FAQItem {
  id: string
  question: string
  answer: React.ReactNode
  category: string
}

// FAQ Accordion Item Component
const FAQAccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="border border-white/10 rounded-lg overflow-hidden mb-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 bg-black/30 backdrop-blur-sm text-left transition-colors hover:bg-black/40"
      >
        <h3 className="text-lg font-medium text-white">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronDown className="h-5 w-5 text-white/70" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-black/20 backdrop-blur-sm text-white/90 leading-relaxed">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [theme, setTheme] = useState<ThemeType>("sunrise")
  const [transitioning, setTransitioning] = useState(false)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

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

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // FAQ Categories
  const categories = [
    { id: "all", name: "সব প্রশ্ন" },
    { id: "platform", name: "প্ল্যাটফর্ম সম্পর্কে" },
    { id: "account", name: "অ্যাকাউন্ট" },
    { id: "payments", name: "পেমেন্ট ও উইথড্র" },
    { id: "security", name: "নিরাপত্তা ও গোপনীয়তা" },
    { id: "support", name: "কাস্টমার সাপোর্ট" },
    { id: "promotions", name: "প্রোমোশন ও বোনাস" },
  ]

  // FAQ Data
  const faqItems: FAQItem[] = [
    {
      id: "what-is-platform",
      question: "ACE365 কী ধরনের প্ল্যাটফর্ম?",
      answer: (
        <p>
          <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ACE365
          </a>{" "}
          একটি অনলাইন গেমিং এবং বিনোদন প্ল্যাটফর্ম যা বাংলাদেশসহ বিভিন্ন দেশের ব্যবহারকারীদের জন্য স্পোর্টস বেটিং, ক্যাসিনো গেম, এবং
          অন্যান্য গেমিং সেবা প্রদান করে।
        </p>
      ),
      category: "platform",
    },
    {
      id: "how-to-open-account",
      question: "ACE365-তে কিভাবে অ্যাকাউন্ট খুলবো?",
      answer: <p>আপনি www.ace-365.net এ গিয়ে "Register" বা "Sign Up" অপশনে ক্লিক করে সহজেই অ্যাকাউন্ট খুলতে পারেন।</p>,
      category: "account",
    },
    {
      id: "account-info-required",
      question: "অ্যাকাউন্ট খোলার জন্য কী তথ্য দিতে হবে?",
      answer: <p>নাম, মোবাইল নম্বর, ইমেইল, পাসওয��ার্ড এবং কখনো কখনো পরিচয়পত্রের তথ্য (যেমন: NID) দিতে হতে পারে।</p>,
      category: "account",
    },
    {
      id: "legal-in-bangladesh",
      question: "ACE365 কি বাংলাদেশে বৈধ?",
      answer: (
        <p>
          ACE365 একটি আন্তর্জাতিক প্ল্যাটফর্ম এবং এটি স্থানীয় আইন অনুসরণ করে। তবে ব্যবহারকারীদের তাদের নিজ নিজ দেশের আইন অনুযায়ী
          দায়িত্বশীলভাবে ব্যবহার করতে হবে।
        </p>
      ),
      category: "platform",
    },
    {
      id: "deposit-methods",
      question: "আমি কিভাবে টাকা জমা দিতে পারি?",
      answer: <p>আপনি bKash, Nagad, রকেট, ব্যাংক ট্রান্সফার এবং অ���্যান্য ই-ওয়ালেটের মাধ্যমে টাকা জমা দিতে পারেন।</p>,
      category: "payments",
    },
    {
      id: "withdrawal-time",
      question: "উইথড্র করতে কত সময় লাগে?",
      answer: <p>সাধারণত উইথড্র প্রক্রিয়া ১০ মিনিট থেকে ২৪ ঘণ্টার মধ্যে সম্পন্ন হয়, নির্ভর করে আপনার ব্যবহৃত পেমেন্ট মেথডের উপর।</p>,
      category: "payments",
    },
    {
      id: "reset-password",
      question: "আমি কিভাবে আমার পাসওয়ার্ড রিসেট করতে পারি?",
      answer: (
        <p>
          লগইন পেজে "Forgot Password?" অপশনে ক্লিক করে আপনার রেজিস্টারকৃত ইমেইল বা মোবাইল নম্বর ব্যবহার করে পাসওয়ার্ড রিসেট করতে
          পারেন।
        </p>
      ),
      category: "account",
    },
    {
      id: "contact-customer-service",
      question: "কীভাবে কাস্টমার সার্ভিসের সাথে যোগাযোগ করবো?",
      answer: <p>আপনি ইমেইল (privacy@ace-365.net) বা আমাদের হেল্পলাইন নম্বরে ফোন করে যোগাযোগ করতে পারেন।</p>,
      category: "support",
    },
    {
      id: "personal-data-protection",
      question: "ACE365 কি আমার ব্যক্তিগত তথ্য সংরক্ষণ করে?",
      answer: <p>হ্যাঁ, আমরা নিরাপত্তা নিশ্চিত করে আপনার তথ্য এনক্রিপ্ট করে সংরক্ষণ করি। বিস্তারিত জানতে আমাদের গোপনীয়তা নীতি দেখুন।</p>,
      category: "security",
    },
    {
      id: "data-security",
      question: "আমি কিভাবে জানবো আমার তথ্য নিরাপদ?",
      answer: <p>আমরা SSL এনক্রিপশন, নিরাপদ সার্ভার এবং অভ্যন্তরীণ নিয়ন্ত্রণ ব্যবহার করে আপনার তথ্য সুরক্ষিত রাখি।</p>,
      category: "security",
    },
    {
      id: "promotions-bonuses",
      question: "আমি কিভাবে প্রোমোশন ও বোনাস পাবো?",
      answer: (
        <p>
          আপনার অ্যাকাউন্টে লগইন করার পর "Promotions" সেকশনে গিয়ে বর্তমান অফারগুলো দেখা যাবে। এছাড়াও আমরা ইমেইল ও এসএমএসের মাধ্যমে অফার
          পাঠাই।
        </p>
      ),
      category: "promotions",
    },
    {
      id: "multiple-accounts",
      question: "একাধিক অ্যাকাউন্ট রাখা কি অনুমোদিত?",
      answer: <p>না, একজন ব্যবহারকারী শুধুমাত্র একটি অ্যাকাউন্ট ব্যবহার করতে পারবেন। একাধিক অ্যাকাউন্ট ধরা পড়লে সেগুলো বন্ধ করে দেওয়া হবে।</p>,
      category: "account",
    },
    {
      id: "delete-account",
      question: "আমি কি আমার অ্যাকাউন্ট মুছে ফেলতে পারি?",
      answer: <p>হ্যাঁ, আপনি আমাদের কাস্টমার সাপোর্টে অনুরোধ জানালে আপনার অ্যাকাউন্ট ডিলিট করা হবে।</p>,
      category: "account",
    },
    {
      id: "age-restriction",
      question: "শিশুদের জন্য কি এই সাইট ব্যবহারযোগ্য?",
      answer: (
        <p>
          না, আমাদের সাইট শুধুমাত্র ১৮ বছরের বেশি বয়সীদের জন্য প্রযোজ্য। কমবয়সী কেউ মিথ্যা তথ্য দিয়ে অ্যাকাউন্ট খুললে সেটি বন্ধ করে দেওয়া
          হবে।
        </p>
      ),
      category: "security",
    },
    {
      id: "cookies-usage",
      question: "ACE365 কি কুকিজ ব্যবহার করে?",
      answer: <p>হ্যাঁ, আমরা কুকিজ ব্যবহার করি আপনার অভিজ্ঞতা উন্নত করার জন্য। চাইলে আপনি ব্রাউজার সেটিং থেকে কুকিজ বন্ধ করতে পারেন।</p>,
      category: "security",
    },
    {
      id: "game-issues",
      question: "গেম খেলার সময় সমস্��া হলে কী করব?",
      answer: <p>আপনি দ্রুত কাস্টমার সাপোর্টে যোগাযোগ করুন বা লাইভ চ্যাট ফিচার ব্যবহার করে সমাধান চাইতে পারেন।</p>,
      category: "support",
    },
    {
      id: "third-party-sharing",
      question: "তৃতীয় পক্ষের সাথে কি আমার তথ্য ভাগ করা হয়?",
      answer: <p>শুধুমাত্র নির্দিষ্ট পরিস্থিতিতে (যেমন: লেনদেন, গ্রাহক সেবা, বা আইনগত চাহিদা) তৃতীয় পক্ষের সঙ্গে তথ্য শেয়ার করা হয়।</p>,
      category: "security",
    },
    {
      id: "third-party-links",
      question: "কোনো তৃতীয় পক্ষের লিঙ্ক ব্যবহার করলে আমি কীভাবে সতর্ক থাকবো?",
      answer: (
        <p>
          আপনি যখন আমাদের ওয়েবসাইট ছেড়ে অন্য কোনো লিঙ্কে যান, তখন তাদের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য হয়। দয়া করে ভালোভাবে পড়ে নিন।
        </p>
      ),
      category: "security",
    },
    {
      id: "update-info",
      question: "আমার তথ্য কিভাবে আপডেট করব?",
      answer: <p>লগইন করার পর "My Profile" সেকশনে গিয়ে আপনি নিজের তথ্য আপডেট করতে পারেন।</p>,
      category: "account",
    },
    {
      id: "privacy-policy-changes",
      question: "গোপনীয়তা নীতির পরিবর্তন কিভাবে জানবো?",
      answer: (
        <p>আমাদের ওয়েবসাইটে সর্বশেষ আপডেটকৃত গোপনীয়তা নীতি প্রকাশ করা হয় এবং গুরুত্বপূর্ণ পরিবর্তন হলে ইমেইলের মাধ্যমে জানানো হয়।</p>
      ),
      category: "security",
    },
  ]

  // Filter FAQ items based on search query and category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === "string" && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "all" || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

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

        <PageBreadcrumb items={[{ label: "প্রায় জিজ্ঞাসিত প্রশ্নাবলী", isCurrent: true }]} />

        {/* Table of Contents */}
        <TableOfContents />

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
                - প্রায় জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                আমাদের সেবা, বৈশিষ্ট্য এবং নীতিমালা সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজে পান।
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-10"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-white/70" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="প্রশ্ন খুঁজুন..."
                  className="w-full pl-10 pr-10 py-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-white/70 hover:text-white" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-yellow-500 text-black font-medium shadow-lg"
                        : "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-8"
            >
              <p className="text-white/80">
                {filteredFAQs.length === 0
                  ? "কোন প্রশ্ন পাওয়া যায়নি। অন্য কিছু খুঁজুন বা ক্যাটাগরি পরিবর্তন করুন।"
                  : `${faqItems.length} টি প্রশ্নের মধ্যে ${filteredFAQs.length} টি দেখাচ্ছে`}
              </p>
            </motion.div>

            {/* FAQ Sections */}
            <div className="max-w-3xl mx-auto">
              {/* Platform Section */}
              {activeCategory === "all" || activeCategory === "platform" ? (
                <div id="platform" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "platform")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Account Section */}
              {activeCategory === "all" || activeCategory === "account" ? (
                <div id="account" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "account")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Payments Section */}
              {activeCategory === "all" || activeCategory === "payments" ? (
                <div id="payments" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "payments")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Security Section */}
              {activeCategory === "all" || activeCategory === "security" ? (
                <div id="security" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "security")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Support Section */}
              {activeCategory === "all" || activeCategory === "support" ? (
                <div id="support" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "support")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Promotions Section */}
              {activeCategory === "all" || activeCategory === "promotions" ? (
                <div id="promotions" className="mb-10">
                  {filteredFAQs
                    .filter((item) => item.category === "promotions")
                    .map((item, index) => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={!!openItems[item.id]}
                        onToggle={() => toggleItem(item.id)}
                        index={index}
                      />
                    ))}
                </div>
              ) : null}

              {/* Empty State */}
              {filteredFAQs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16 bg-black/30 backdrop-blur-md rounded-xl mt-8"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">কোন প্রশ্ন পাওয়া যায়নি</h3>
                  <p className="text-white/80 max-w-md mx-auto">
                    আপনার খোঁজার শর্তের সাথে মিলে এমন কোন প্রশ্ন পাওয়া যায়নি। অন্য কিওয়ার্ড ব্যবহার করুন বা ক্যাটাগরি অনুসারে ব্রাউজ করুন।
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors"
                    >
                      সার্চ পরিষ্কার করুন
                    </button>
                  )}
                </motion.div>
              )}
            </div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 text-center bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto border border-blue-500/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">আরও প্রশ্ন আছে?</h2>
              <p className="text-white/90 mb-6">
                আমাদের কাস্টমার সাপোর্ট টিম ২৪/৭ আপনার যেকোনো প্রশ্ন বা সমস্যার সমাধানে সাহায্য করতে প্রস্তুত।
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.ace-365.net/contact"
                  className="px-6 py-3 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors flex items-center justify-center font-medium"
                >
                  লাইভ চ্যাট সাপোর্ট
                </a>
              </div>
            </motion.div>

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

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  typeof item.answer === "string"
                    ? item.answer
                    : "Please visit our website for the detailed answer to this question.",
              },
            })),
          }),
        }}
      />
    </main>
  )
}
