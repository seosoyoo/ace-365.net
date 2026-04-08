"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X, ChevronLeft, ChevronRight } from "lucide-react"

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  const [sections, setSections] = useState<Array<{ id: string; name: string; icon: string }>>([])

  useEffect(() => {
    // Check which page we're on
    const isAboutPage = window.location.pathname.includes("/about")
    const isFaqPage = window.location.pathname.includes("/faq")
    const isTermsPage = window.location.pathname.includes("/terms")
    const isPrivacyPage = window.location.pathname.includes("/privacy")

    if (isAboutPage) {
      setSections([
        { id: "introduction", name: "Introduction", icon: "📝" },
        { id: "vision", name: "আমাদের দৃষ্টিভঙ্গি", icon: "🔭" },
        { id: "core-values", name: "আমাদের মূল মূল্যবোধ", icon: "💎" },
        { id: "what-you-get", name: "আপনি কী পাবেন", icon: "🎁" },
        { id: "built-for-bangladesh", name: "বাংলাদেশের জন্য তৈরি", icon: "🇧🇩" },
        { id: "join", name: "যোগ দিন", icon: "🚀" },
      ])
    } else if (isFaqPage) {
      setSections([
        { id: "platform", name: "প্ল্যাটফর্ম সম্পর্কে", icon: "🌐" },
        { id: "account", name: "অ্যাকাউন্ট", icon: "🔑" },
        { id: "payments", name: "পেমেন্ট ও উইথড্র", icon: "💰" },
        { id: "security", name: "নিরাপত্তা ও গোপনীয়তা", icon: "🔒" },
        { id: "support", name: "কাস্টমার সাপোর্ট", icon: "🎧" },
        { id: "promotions", name: "প্রোমোশন ও বোনাস", icon: "🎁" },
      ])
    } else if (isTermsPage) {
      setSections([
        { id: "general-info", name: "সাধারণ তথ্য", icon: "ℹ️" },
        { id: "account-registration", name: "অ্যাকাউন্ট রেজিস্ট্রেশন", icon: "👤" },
        { id: "games-betting", name: "গেমস এবং বেটিং নীতি", icon: "🎮" },
        { id: "deposits-withdrawals", name: "অর্থ জমা ও উত্তোলন", icon: "💰" },
        { id: "bonus-promotion", name: "বোনাস ও প্রোমোশন", icon: "🎁" },
        { id: "limitations", name: "সীমাবদ্ধতা", icon: "⛔" },
        { id: "privacy-policy", name: "গোপনীয়তা নীতি", icon: "🔒" },
        { id: "liability", name: "দায়িত্ব সীমাবদ্ধতা", icon: "⚖️" },
        { id: "terms-changes", name: "শর্তাবলীর পরিবর্তন", icon: "📝" },
      ])
    } else if (isPrivacyPage) {
      setSections([
        { id: "information-collection", name: "তথ্য সংগ্রহ", icon: "📊" },
        { id: "information-purpose", name: "তথ্য সংগ্রহের উদ্দেশ্য", icon: "🎯" },
        { id: "cookies", name: "কুকিজ", icon: "🍪" },
        { id: "data-sharing", name: "তথ্য ভাগাভাগি", icon: "🔄" },
        { id: "data-security", name: "তথ্য সুরক্ষা", icon: "🔒" },
        { id: "user-rights", name: "ব্যবহারকারীর অধিকার", icon: "⚖️" },
        { id: "childrens-privacy", name: "শিশুদের গোপনীয়তা", icon: "🔞" },
        { id: "third-party-links", name: "তৃতীয় পক্ষের লিঙ্ক", icon: "🔗" },
        { id: "privacy-changes", name: "গোপনীয়তা নীতির পরিবর্তন", icon: "🔄" },
      ])
    } else {
      setSections([
        { id: "home", name: "Home", icon: "🏠" },
        { id: "games", name: "Popular Games", icon: "🎮" },
        { id: "providers", name: "Game Providers", icon: "🏢" },
        { id: "promotions", name: "Promotions", icon: "🎁" },
        { id: "content1", name: "অনলাইন ক্যাসিনো", icon: "🌐" },
        { id: "content2", name: "কেন 365ACE বেছে নেওয়া", icon: "✅" },
      ])
    }
  }, [])

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for better UX

      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const topOffset = rect.top + window.scrollY

        if (scrollPosition >= topOffset && scrollPosition < topOffset + rect.height) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  // Scroll to section with smooth behavior
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <div className={`fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block ${className}`}>
      {/* Desktop Version - Single Column Sidebar */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-48"
              >
                <div className="p-3 space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center w-full px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-white/20 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">{section.icon}</span>
                      <span className="text-sm font-medium">{section.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Collapse button at bottom */}
                <div className="p-3 pt-0">
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center justify-center w-full px-3 py-2 rounded-lg bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    <span className="text-xs font-medium">Collapse</span>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-3 px-2 space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center justify-center w-10 h-10 mx-auto rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-white/20 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                      whileTap={{ scale: 0.95 }}
                      title={section.name}
                    >
                      <span>{section.icon}</span>
                    </motion.button>
                  ))}

                  {/* Expand button at bottom */}
                  <motion.button
                    onClick={() => setIsExpanded(true)}
                    className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Expand menu"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Version - Dropdown */}
      <div className="md:hidden fixed bottom-24 right-4 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/70 backdrop-blur-md text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-3 w-48"
            >
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
