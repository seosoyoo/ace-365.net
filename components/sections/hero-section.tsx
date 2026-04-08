"use client"
import { Download } from "lucide-react"
import type { ThemeType } from "@/components/theme-selector"
import Image from "next/image"

interface HeroSectionProps {
  theme: ThemeType
}

export default function HeroSection({ theme }: HeroSectionProps) {
  const getThemeText = () => {
    switch (theme) {
      case "day":
        return "Bangladesh's Top Fun Casino & Bet Platform"
      case "night":
        return "Bangladesh's Top Fun Casino & Bet Platform"
      case "sunrise":
        return "Bangladesh's Top Fun Casino & Bet Platform"
      case "sunset":
        return "Bangladesh's Top Fun Casino & Bet Platform"
      default:
        return "Bangladesh's Top Fun Casino & Bet Platform"
    }
  }

  const getThemeDescription = () => {
    switch (theme) {
      case "day":
        return "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।"
      case "night":
        return "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।"
      case "sunrise":
        return "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।"
      case "sunset":
        return "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।"
      default:
        return "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।"
    }
  }

  // Gradient colors for JITABET based on theme
  const getJitabetGradient = () => {
    switch (theme) {
      case "day":
        return "from-blue-400 via-blue-500 to-blue-600"
      case "night":
        return "from-purple-400 via-purple-500 to-indigo-600"
      case "sunrise":
        return "from-yellow-400 via-orange-500 to-red-600"
      case "sunset":
        return "from-orange-400 via-pink-500 to-purple-600"
      default:
        return "from-yellow-400 via-orange-500 to-red-600"
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        {/* Properly sized and visible preloaded image for LCP optimization */}
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-lg mb-6">
            <span className={`bg-gradient-to-r ${getJitabetGradient()} text-transparent bg-clip-text`}>ACE365</span>
            <span> : {getThemeText()}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md mb-8">{getThemeDescription()}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://ash521.com/m/index.html?affiliateCode=aliance/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="px-6 py-3 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors flex items-center justify-center font-medium"
            >
              অ্যাপ ডাউনলোড করুন
              <Download className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://ash521.com/m/index.html?affiliateCode=aliance/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              এখনই লগইন করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
