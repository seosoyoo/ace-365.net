"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Check, Download, Shield, Clock, Smartphone, Bell } from "lucide-react";
import Image from "next/image";

export default function Content1Section() {
    // List jenis taruhan
    const betTypes = ["ক্রিকেট বেটিং: আইপিএল, বিপিএল, এশিয়া কাপ", "ফুটবল বেটিং: ইপিএল, উয়েফা, বিশ্বকাপ", "রিয়েল টাইম অ্যানালিটিক্স দ্বারা চালিত স্মার্ট অডস", "বিকাশের মাধ্যমে তাৎক্ষণিক পেমেন্ট"];

    // List keunggulan login
    const loginBenefits = ["🇧🇩 ১০০% স্থানীয় অভিজ্ঞতা (বাংলা ও টাকা)", "এনক্রিপ্টেড লগইন এবং ডেটা সুরক্ষা", "বিকাশ, নগ���, রকেটের মাধ্যমে দ্রুত জমা/উত্তোলন", "দৈনিক বোনাস, ক্যাশব্যাক এবং ভিআইপি অফার"];

    // List fitur app
    const appFeatures = [
        {
            title: "দ্রুত কর্মক্ষমতা",
            description: "কম দামের স্মার্টফোনের জন্য অপ্টিমাইজ করা",
            icon: <Clock className="h-5 w-5 text-yellow-400" />,
        },
        {
            title: "নিরাপদ ও সুরক্ষিত লগইন",
            description: "বায়োমেট্রিক বিকল্প সহ নিরাপদ ও সুরক্ষিত লগইন",
            icon: <Check className="h-5 w-5 text-yellow-400" />,
        },
        {
            title: "সহজ ডাউনলোড",
            description: "অ্যান্ড্রয়েডে সরাসরি ডাউনলোডের জন্য APK উপলব্ধ",
            icon: <Smartphone className="h-5 w-5 text-yellow-400" />,
        },
        {
            title: "রিয়েল-টাইম আপডেট",
            description: "প্রচারের জন্য পুশ বিজ্ঞপ্তি এবং বাংলায় গ্রাহক সহায়তা",
            icon: <Bell className="h-5 w-5 text-yellow-400" />,
        },
    ];

    return (
        <section id="content1" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <SectionTitle title="ACE365 - বাংলাদেশে বিশ্বস্ত ক্যাসি এবং বেটিং প্ল্যাটফর্ম" description="অনলাইন ক্যাসিনো গেম, স্পোর্টস বেট এবং একটি নিরবচ্ছিন্ন মোবাইল অ্যাপ অভিজ্ঞতার জন্য বাংলাদেশের সেরা গন্তব্য, ACE365 সাথে আসল অর্থের গেমিংয়ের রোমাঞ্চ উপভোগ করুন। আপনি একজন অভিজ্ঞ খেলোয়াড় হোন বা এই দৃশ্যে নতুন হোন না কেন, 365 ACE বাংলাদেশী খেলোয়াড়দের জন্য তৈরি একটি নিরাপদ, দ্রুত এবং ব্যবহারকারী বান্ধব প্ল্যাটফর্ম অফার করে।" />
                </div>

                <div className="space-y-16">
                    {/* Sports Betting Section */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl border border-blue-500/20 shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ACE365 এর সাথে ক্রিকেট, ফুটবল এবং আরও অনেক কিছুতে বাজি ধরা</h3>
                                <p className="text-white/90 mb-6">যদি খেলাধুলা আপনার আবেগ হয়, তাহলে ACE365 স্পোর্টস বেটিং এমন একটি জায়গা যেখানে আপনি ঠিক ঘরে বসেই অনুভব করবেন। BPL এর মতো স্থানীয় ক্রিকেট লিগ থেকে শুরু করে IPL এবং UEFA চ্যাম্পিয়ন্স লিগের মতো বিশ্বব্যাপী ইভেন্ট পর্যন্ত, আমাদের প্ল্যাটফর্মটি প্রতিযোগিতামূলক প্রতিকূলতার সাথে গতিশীল, রিয়েল টাইম বেটিং বিকল্পগুলি অফার করে।</p>

                                <h4 className="text-xl font-semibold text-white mb-4">ACE365 দিয়ে কেন বাজি ধরবেন?</h4>
                                <ol className="space-y-2 list-decimal pl-5 text-white/90">
                                    {betTypes.map((type, index) => (
                                        <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="pl-2">
                                            {type}
                                        </motion.li>
                                    ))}
                                </ol>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/3] relative">
                                    <Image src="/images/banner/365ace-smart-bet.webp" alt="Sports Betting" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Login Section */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl border border-purple-500/20 shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/3] relative">
                                    <Image src="/images/banner/365ace-login.webp" alt="ACE365 Login" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ACE365 বাংলাদেশের সেরা অনলাইন ক্যাসিনো</h3>
                                <p className="text-white/90 mb-6">ACE365 অনলাইন ক্যাসিনো উচ্চমানের গেম এবং বড় জয় উপভোগ করার জন্য উপযুক্ত জায়গা। রোমাঞ্চকর স্লট মেশিন থেকে শুরু করে ইন্টারেক্টিভ লাইভ ডিলার টেবিল পর্যন্ত, আমাদের ক্যাসিনোতে নিরাপদ, ন্যায্য এবং মজাদার আসল অর্থের গেমিংয়ের সুযোগ রয়েছে।</p>

                                <p className="text-white/90 mb-6">আপনি রিল স্পিনিং করতে চান অথবা ব্ল্যাকজ্যাকের ক্লাসিক গেমে কোনও ডিলারকে চ্যালেঞ্জ করতে চান, 365 ACE সবার জন্য কিছু না কিছু আছে। আমাদের প্ল্যাটফর্মটি সম্পূর্ণ লাইসেন্সপ্রাপ্ত এবং সুরক্ষিত, যা নিশ্চিত করে যে আপনি কোনও উদ্বেগ ছাড়াই খেলতে পারবেন।</p>

                                <h4 className="text-xl font-semibold text-white mb-4">ACE365 অনলাইন ক্যাসিনোর হাইলাইটস:</h4>
                                <ul className="space-y-2 mb-6">
                                    <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-start">
                                        <Shield className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">উত্তেজনাপূর্ণ থিম এবং মেগা জ্যাকপট সহ স্লট</span>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-start">
                                        <Shield className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">RNG সার্টিফিকেশন সহ প্রোভাবিলি ফেয়ার গেমস</span>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-start">
                                        <Shield className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">বাংলা ভাষা সমর্থন এবং স্থানীয় বোনাস</span>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* App Download Section */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-amber-900/60 to-yellow-600/30 backdrop-blur-md rounded-xl border border-yellow-500/20 shadow-lg overflow-hidden p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ACE365 মোবাইল অ্যাপটি ডাউনলোড করুন</h3>
                                <p className="text-white/90 mb-6">ACE365 অ্যাপের মাধ্যমে আপনার পছন্দের ক্যাসিনো এবং স্পোর্টস বেট গেমগুলি এখন আপনার পকেটে। বাংলাদেশের ব্যবহারকারীদের জন্য বিশেষভাবে তৈরি, আমাদের মোবাইল অ্যাপটি আপনাকে আপনার স্মার্টফোন থেকে প্ল্যাটফর্ম স্লট, ক্যাসিনো টেবিল, স্পোর্টস বেট, লাইভ গেম এবং আরও অনেক কিছুতে সম্পূর্ণ অ্যাক্সেস দেয়।</p>

                                <h4 className="text-xl font-semibold text-white mb-4">ACE365 অ্যাপের শীর্ষ বৈশিষ্ট্য:</h4>
                                <div className="space-y-4">
                                    {appFeatures.map((feature, index) => (
                                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="flex">
                                            <div className="mr-3 mt-1">{feature.icon}</div>
                                            <div>
                                                <h5 className="font-medium text-white">{feature.title}:</h5>
                                                <p className="text-white/90">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div className="mt-8 flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                                    <a href="https://ash521.com/m/index.html?affiliateCode=aliance/" target="_blank" rel="nofollow noreferrer noopener" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full transition-colors">
                                        <Download className="h-5 w-5" />
                                        অ্যান্ড্রয়েডের জন্য ডাউনলোড করুন
                                    </a>
                                    <a href="https://ash521.com/m/index.html?affiliateCode=aliance/" target="_blank" rel="nofollow noreferrer noopener" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors">
                                        <Download className="h-5 w-5" />
                                        iOS এর জন্য ডাউনলোড করুন
                                    </a>
                                </motion.div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                                <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-2xl mx-auto max-w-xs">
                                    <Image src="/images/banner/365ace-app.webp" alt="ACE365 Mobile App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black font-bold rounded-full h-24 w-24 flex items-center justify-center text-center p-2 transform rotate-12 shadow-xl">
                                    <span>এখনই ডাউনলোড করুন!</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
