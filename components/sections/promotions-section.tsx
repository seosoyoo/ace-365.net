"use client";

import { useState, useEffect, useRef } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Promotion {
    id: string;
    logo: string;
    brand: string;
    description: string;
    endTime: Date;
    link: string;
}

export default function PromotionsSection() {
    const [promotions, setPromotions] = useState<Promotion[]>([
        {
            id: "365ace",
            logo: "/images/brands/365ace.webp",
            brand: "365ACE",
            description: "৳১০০০ পর্যন্ত বিনামূল্যে সাইন আপ বোনাস",
            endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
            link: "https://ash521.com/m/index.html?affiliateCode=aliance",
        },
        {
            id: "365ace",
            logo: "/images/brands/365ace.webp",
            brand: "365ACE",
            description: "২০০% পর্যন্ত বিনামূল্যে আমানত বোনাস",
            endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
            link: "https://ash521.com/m/index.html?affiliateCode=aliance",
        },
        {
            id: "365ace",
            logo: "/images/brands/365ace.webp",
            brand: "365ACE",
            description: "১৫০% পর্যন্ত বিনামূল্যে রিলোড বোনাস",
            endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
            link: "https://ash521.com/m/index.html?affiliateCode=aliance",
        },
        {
            id: "365ace",
            logo: "/images/brands/365ace.webp",
            brand: "365ACE",
            description: "সাপ্তাহিক ৭৭% পর্যন্ত ক্যাশব্যাক",
            endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            link: "https://ash521.com/m/index.html?affiliateCode=aliance",
        },
        {
            id: "365ace",
            logo: "/images/brands/365ace.webp",
            brand: "365ACE",
            description: "ভিআইপি অ্যাকাউন্ট ৩০ দিন",
            endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
            link: "https://ash521.com/m/index.html?affiliateCode=aliance",
        },
    ]);

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="promotions" ref={sectionRef} className="py-24 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <SectionTitle title="Exciting Promotions" description="Boost your gameplay with our special offers" />
                </div>

                {isVisible ? (
                    <>
                        {/* Promotions Table - Desktop */}
                        <div className="hidden md:block overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 backdrop-blur-md border border-indigo-500/20 shadow-lg">
                            <div className="w-full overflow-x-auto" style={{ overflowX: "hidden" }}>
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-indigo-500/30">
                                            <th className="px-6 py-4 text-left text-sm font-medium text-white/80">Promotion</th>
                                            <th className="px-6 py-4 text-center text-sm font-medium text-white/80">Time Remaining</th>
                                            <th className="px-6 py-4 text-center text-sm font-medium text-white/80">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {promotions.map((promo, index) => (
                                            <motion.tr key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className={`${index !== promotions.length - 1 ? "border-b border-indigo-500/30" : ""} hover:bg-indigo-700/20 transition-colors`}>
                                                <td className="px-6 py-4 text-white/90 text-base">{promo.description}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-center">
                                                        <CountdownTimer endTime={promo.endTime} />
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-center">
                                                        <motion.a href={promo.link} target="_blank" rel="nofollow noreferrer noopener" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 px-5 py-2.5 text-sm font-medium text-black transition-colors shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                            এখন দাবি
                                                            <ChevronRight className="ml-1 h-4 w-4" />
                                                        </motion.a>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Promotions Cards - Mobile */}
                        <div className="md:hidden space-y-6">
                            {promotions.map((promo, index) => (
                                <motion.div key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 backdrop-blur-md border border-indigo-500/20 shadow-lg rounded-xl p-6">
                                    <div className="mb-4">
                                        <h3 className="font-medium text-white text-lg text-center">{promo.description}</h3>
                                    </div>
                                    <div className="flex flex-col items-center gap-6">
                                        <CountdownTimer endTime={promo.endTime} />
                                        <motion.a href={promo.link} target="_blank" rel="nofollow noreferrer noopener" className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 px-4 py-3 text-sm font-medium text-black transition-colors shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            এখন দাবি
                                            <ChevronRight className="ml-1 h-4 w-4" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* সমস্ত প্রচার দেখুন Button */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-12 text-center">
                            <a href="/promotions">
                                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium px-8 py-3 rounded-full">
                                    সমস্ত প্রচার দেখুন
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </motion.div>
                    </>
                ) : (
                    <div className="h-96 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
                    </div>
                )}
            </div>
        </section>
    );
}
