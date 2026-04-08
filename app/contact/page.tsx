"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/navbar/header"
import FooterSection from "@/components/navbar/footer-section"
import { MobileFooter } from "@/components/navbar/mobile-footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import type { ThemeType } from "@/components/theme-selector"
import DaySky from "@/components/theme-backgrounds/day-sky"
import NightSky from "@/components/theme-backgrounds/night-sky"
import SunriseSky from "@/components/theme-backgrounds/sunrise-sky"
import SunsetSky from "@/components/theme-backgrounds/sunset-sky"
import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

export default function ContactPage() {
  const [theme, setTheme] = useState<ThemeType>("sunrise")
  const [transitioning, setTransitioning] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-yellow-400" />,
      title: "ইমে���ল আমাদের",
      details: "support@ace-365.net",
      description: "আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব",
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-400" />,
      title: "কল করুন",
      details: "+880 1234 567890",
      description: "সহায়তার জন্য ২৪/৭ উপলব্ধ",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-yellow-400" />,
      title: "লাইভ চ্যাট",
      details: "আমাদের ওয়েবসাইটে উপলব্ধ",
      description: "আমাদের টিম থেকে তাৎক্ষণিক সাহায্য পান",
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "কার্যকাল",
      details: "২৪/৭ গ্রাহক সহায়তা",
      description: "আমরা সবসময় সাহায্য করতে এখানে আছি",
    },
  ]

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: "ফেসবুক", url: "https://ash521.com/m/index.html?affiliateCode=aliance/" },
    { icon: <Twitter className="h-5 w-5" />, name: "টুইটার", url: "https://ash521.com/m/index.html?affiliateCode=aliance/" },
    { icon: <Instagram className="h-5 w-5" />, name: "ইনস্টাগ্রাম", url: "https://ash521.com/m/index.html?affiliateCode=aliance/" },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "কিভাবে দ্রুত উত্তর পেতে পারি?",
      answer:
        "দ্রুততম উত্তরের জন্য, অনুগ্রহ করে আমাদের ওয়েবসাইটে উপলব্ধ লাইভ চ্যাট ফিচার ব্যবহার করুন। আমাদের সাপোর্ট টিম আপনাকে সাহায্য করার জন্য ২৪/৭ উপলব্ধ।",
    },
    {
      question: "আমার মেসেজে কী তথ্য অন্তর্ভুক্ত করা উচিত?",
      answer:
        "অনুগ্রহ করে আপনার ইউজারনেম (যদি প্রযোজ্য হয়), আপনার সমস্যা বা প্রশ্নের বিবরণ, এবং যেকোনো প্রাসঙ্গিক স্ক্রিনশট বা তথ্য অন্তর্ভুক্ত করুন যা আমাদের আপনাকে আরও ভালভাবে সাহায্য করতে পারে।",
    },
    {
      question: "উত্তর পেতে কতক্ষণ সময় লাগে?",
      answer:
        "আমরা সব অনুসন্ধানের উত্তর ২৪ ঘন্টার মধ্যে দেওয়ার চেষ্টা করি। জরুরি বিষয়ের জন্য, অনুগ্রহ করে তাৎক্ষণিক সহায়তার জন্য আমাদের লাইভ চ্যাট ব্যবহার করুন।",
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

        <PageBreadcrumb items={[{ label: "যোগাযোগ", isCurrent: true }]} />

        <section className="pt-4 pb-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">আমাদের সাথে যোগাযোগ করুন</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                প্রশ্ন আছে বা সাহায্য দরকার? আমাদের টিম আপনাকে সাহায্য করতে এখানে আছে। নিচের যেকোনো চ্যানেলের মাধ্যমে আমাদের সাথে যোগাযোগ
                করুন।
              </p>
            </motion.div>

            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-black/40 p-3 rounded-full mb-4">{info.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-yellow-400 font-medium mb-2">{info.details}</p>
                    <p className="text-white/70 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-blue-500/20 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-white mb-6">আমাদের একটি বার্তা পাঠান</h2>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">বার্তা সফলভাবে পাঠানো হয়েছে!</h3>
                    <p className="text-white/90">
                      আমাদের সাথে যোগাযোগ করার জন্য ধন্যবাদ। আমাদের টিম যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করবে।
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        আপনার নাম
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                        placeholder="আপনার নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        ইমেইল ঠিকানা
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                        placeholder="আপনার ইমেইল লিখুন"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">
                        বিষয়
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                      >
                        <option value="" className="bg-gray-800">
                          একটি বিষয় নির্বাচন করুন
                        </option>
                        <option value="account" className="bg-gray-800">
                          অ্যাকাউন্ট সমস্যা
                        </option>
                        <option value="deposit" className="bg-gray-800">
                          জমা/উত্তোলন
                        </option>
                        <option value="bonus" className="bg-gray-800">
                          বোনাস ও প্রোমোশন
                        </option>
                        <option value="technical" className="bg-gray-800">
                          টেকনিক্যাল সাপোর্ট
                        </option>
                        <option value="other" className="bg-gray-800">
                          অন্যান্য
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2">
                        আপনার বার্তা
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
                        placeholder="আমরা কিভাবে আপনাকে সাহায্য করতে পারি?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "পাঠানো হচ্ছে..."
                      ) : (
                        <>
                          বার্তা পাঠান <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Additional Information */}
              <div className="space-y-8">
                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-purple-500/20 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">আমাদের সাথে যুক্ত থাকুন</h2>
                  <p className="text-white/90 mb-6">
                    সর্বশেষ আপডেট, প্রোমোশন এবং ঘোষণার জন্য সোশ্যাল মিডিয়াতে আমাদের অনুসরণ করুন।
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white px-4 py-3 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-green-900/60 to-green-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-green-500/20 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">আমাদের অবস্থান</h2>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">ACE365 সদর দপ্তর</h3>
                      <p className="text-white/90">
                        ১২৩ ক্যাসিনো বুলেভার্ড, সুইট ৪৫৬
                        <br />
                        ঢাকা, বাংলাদেশ
                      </p>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="w-full h-48 bg-black/30 rounded-lg flex items-center justify-center">
                    <p className="text-white/70">ইন্টারেক্টিভ মানচিত্র শীঘ্রই আসছে</p>
                  </div>
                </motion.div>

                {/* FAQ */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-br from-amber-900/60 to-amber-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-amber-500/20 shadow-lg"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">দ্রুত প্রশ্নোত্তর</h2>
                    <a
                      href="/faq"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                    >
                      সব প্রশ্ন দেখুন
                    </a>
                  </div>

                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-black/30 rounded-lg p-4 border border-white/10 hover:border-amber-500/30 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                        <p className="text-white/80 text-sm">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ACE365 সদর দপ্তর",
            image: "https://www.ace-365.net/images/brands/jitabet.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "১২৩ ক্যাসিনো বুলেভার্ড, সুইট ৪৫৬",
              addressLocality: "ঢাকা",
              addressRegion: "ঢাকা",
              postalCode: "১০০০",
              addressCountry: "BD",
            },
            telephone: "+880-1234-567890",
            email: "support@ace-365.net",
            url: "https://www.ace-365.net",
            openingHours: "Mo-Su 00:00-24:00",
          }),
        }}
      />
    </main>
  )
}
