"use client";
import { FooterColumn } from "@/components/ui/footer-column";
import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterSection() {
    // Update the product links to include all pages
    const productLinks = [
        { name: "Slots", href: "/games" },
        { name: "Live Casino", href: "/games" },
        { name: "Sports Betting", href: "/games" },
        { name: "Poker", href: "/games" },
        { name: "Fishing", href: "/games" },
        { name: "eSports", href: "/games" },
    ];

    // Update the resource links to remove the Testimonials page
    const resourceLinks = [
        { name: "About Us", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Promotions", href: "/promotions" },
        { name: "Contact Us", href: "/contact" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
    ];

    // Payment providers
    const paymentProviders = [
        { name: "bKash", logo: "/images/payment/bkash.jpg" },
        { name: "Nagad", logo: "/images/payment/nagad.png" },
        { name: "Rocket", logo: "/images/payment/rocket.png" },
        { name: "USDT", logo: "/images/payment/usdt.jpg" },
    ];

    return (
        <footer id="contact" className="py-12 bg-black/80 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                {/* Payment Providers Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white text-center mb-6">পেমেন্ট পদ্ধতি</h3>
                    <div className="flex justify-center gap-6 flex-wrap">
                        {paymentProviders.map((provider, index) => (
                            <motion.div key={provider.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 * index }} className="rounded-lg p-3 hover:bg-white/5 transition-colors">
                                <div className="relative h-12 w-20 mix-blend-screen">
                                    <Image src={provider.logo || "/placeholder.svg"} alt={`${provider.name} payment method`} fill className="object-contain drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" sizes="80px" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <motion.div className="relative h-10 w-32" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Image src="/images/brands/ace365.webp" alt="ACE365 Logo" fill className="object-contain" />
                        </motion.div>
                        <p className="text-white">ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।</p>
                        <SocialLinks />
                    </div>

                    <FooterColumn title="Products" links={productLinks} />
                    <FooterColumn title="Resources" links={resourceLinks} />
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
  <p className="text-white/90 text-sm">
    © {new Date().getFullYear()} ACE365. All rights reserved. 18+ Gamble Responsibly.
  </p>

  <p className="text-white/90 text-sm mt-2">
    Build by Soyo
  </p>

  <a
  href="https://c66lottery.com"
  className="hidden"
>
  66 Lottery
</a>
</div>
            </div>
        </footer>
    );
}
