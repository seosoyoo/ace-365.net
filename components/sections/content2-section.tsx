"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Check, Shield, Zap, Gift, CreditCard, AlertCircle, UserPlus } from "lucide-react";

export default function Content2Section() {
    // List of reasons why people choose ACE365
    const chooseReasons = ["🇧🇩 ১০০% স্থানীয় অভিজ্ঞতা (বাংলা ও টাকা)", "এনক্রিপ্টেড লগইন এবং ডেটা সুরক্ষা", "বিকাশ, নগদ, রকেটের মাধ্যমে দ্রুত জমা/উত্তোলন", "দৈনিক বোনাস, ক্যাশব্যাক এবং ভিআইপি অফার", "২৪/৭ বাংলাভাষী সহায়তা দল"];

    // List of bonuses and promotions
    const bonusesPromotions = ["১০০% পর্যন্ত স্বাগতম বোনাস", "প্রতি সপ্তাহান্তে বিনামূল্যে স্পিন", "সক্রিয় বাজিকরদের জন্য স্পোর্টস ক্যাশব্যাক", "রেফারেল বোনাস বন্ধুদের আমন্ত্রণ জানান, অর্থ প্রদান করুন", "VIP লয়্যালটি প্রোগ্রাম ব্যক্তিগত পুরষ্কার, এক্সক্লুসিভ ডিল"];

    // List of payment methods
    const paymentMethods = ["bKash", "Nagad", "রকেট", "স্থানীয় ব্যাংক স্থানান্তর"];

    // List of responsible gaming features
    const responsibleGaming = ["আমানতের সীমা", "সেশনের সময় সতর্কতা", "স্ব-বর্জন সরঞ্জাম"];

    // Steps to join
    const joinSteps = ["অ্যাপটি ডাউনলোড করুন", "আপনার প্রথম জমা করুন", "ACE365 দিয়ে জিততে শুরু করুন"];

    return (
        <section id="content2" className="py-24 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <SectionTitle title="কেন ACE365 বেছে নেওয়া?" description="আমরা কেবল আরেকটি বেটিং সাইট নই। আমরা আপনার জন্য তৈরি বাংলাদেশি খেলোয়াড় যারা আরও ভালো কিছুর যোগ্য।" />
                </div>

                {/* Top Choice Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-green-900/60 to-green-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-green-500/20 shadow-lg mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">ACE365 - বাংলাদেশের শীর্ষ পছন্দ</h3>
                    <p className="text-white/90 text-center max-w-4xl mx-auto">হাজার হাজার মানুষ কেন ACE365 বেছে নেয় তা এখানে:</p>

                    <div className="mt-6">
                        <ul className="space-y-3">
                            {chooseReasons.map((reason, index) => (
                                <motion.li key={`reason-${index}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-white/90">{reason}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-white/90 text-center mt-6">আমরা নিখুঁত নই, তবে আমরা সর্বদা আপনার জন্য আরও ভাল হওয়ার জন্য কাজ করছি।</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bonuses & Promotions Section */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-blue-500/20 shadow-lg h-full">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600/30 p-3 rounded-full mr-4">
                                <Gift className="h-8 w-8 text-blue-400" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold text-white">বোনাস এবং প্রচার</h4>
                        </div>

                        <p className="text-white/90 mb-6">ACE365-তে, সবাই বিজয়ী। শুধুমাত্র খেলার জন্য পুরষ্কার পান।</p>

                        <p className="text-white/90 mb-4">আপনার জন্য কী অপেক্ষা করছে:</p>

                        <ul className="space-y-3 mb-6">
                            {bonusesPromotions.map((bonus, index) => (
                                <motion.li key={`bonus-${index}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-white/90">{bonus}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <p className="text-white/90">আপনি যত বেশি খেলবেন, আমরা তত বেশি ফেরত দেব। এত সহজ।</p>
                    </motion.div>

                    {/* Payment & Responsible Gaming Section */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-purple-500/20 shadow-lg h-full">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-600/30 p-3 rounded-full mr-4">
                                <Shield className="h-8 w-8 text-purple-400" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold text-white">আপনার অর্থ, আপনার নিয়ন্ত্রণ সুরক্ষিত করে</h4>
                        </div>

                        <p className="text-white/90 mb-6">জটিল ব্যাংকিং ভুলে যান। আমরা এটি সহজ এবং দ্রুত রাখি।</p>

                        <h5 className="text-lg font-semibold text-white mb-4">সমর্থিত অর্থপ্রদান পদ্ধতি:</h5>
                        <ul className="space-y-3 mb-6">
                            {paymentMethods.map((method, index) => (
                                <motion.li key={`payment-${index}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="flex items-start">
                                    <CreditCard className="h-5 w-5 text-purple-300 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-white/90">{method}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <p className="text-white/90 mb-6">সমস্ত আমানত এবং উত্তোলন কয়েক মিনিটের মধ্যে এনক্রিপ্ট করা, যাচাই করা এবং প্রক্রিয়াজাত করা হয়।</p>

                        <h4 className="text-lg font-semibold text-white mb-4">দায়িত্বশীল গেমিং নীতি</h4>
                        <p className="text-white/90 mb-4">গেমিং মজাদার কিন্তু শুধুমাত্র যখন এটি আপনার নিয়ন্ত্রণে থাকে।</p>

                        <h5 className="text-md font-semibold text-white mb-2">ACE365 নিরাপদ এবং দায়িত্বশীল খেলা প্রচার করে যেমন:</h5>
                        <ul className="space-y-3">
                            {responsibleGaming.map((feature, index) => (
                                <motion.li key={`responsible-${index}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} className="flex items-start">
                                    <AlertCircle className="h-5 w-5 text-purple-300 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-white/90">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Join Today Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-amber-900/60 to-amber-600/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-amber-500/20 shadow-lg mt-12">
                    <div className="flex items-center mb-6 justify-center">
                        <div className="bg-amber-600/30 p-3 rounded-full mr-4">
                            <UserPlus className="h-8 w-8 text-amber-400" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white">আজই ACE365 তে যোগ দিন আপনার খেলা এখানে শুরু হচ্ছে</h4>
                    </div>

                    <p className="text-white/90 text-center mb-6">আপনি ACE365 ক্যাসিনো, 365 ACE বেট, অথবা ACE365 অ্যাপ অনুসন্ধান করেছেন এবং আপনি সঠিক জায়গাটি খুঁজে পেয়েছেন।</p>

                    <h5 className="text-lg font-semibold text-white mb-4 text-center">30 সেকেন্ডের মধ্যে সাইন আপ করুন। বাংলায় খেলুন। বাংলাদেশি টাকায় জিতুন:</h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {joinSteps.map((step, index) => (
                            <motion.div key={`step-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 * index }} className="bg-amber-800/30 p-4 rounded-lg border border-amber-500/20 text-center">
                                <div className="bg-amber-700/40 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-amber-200 font-bold">{index + 1}</span>
                                </div>
                                <p className="text-white">{step}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-white/90 text-center mt-8 font-semibold">ACE365 বাংলাদেশের রিয়েল অনলাইন ক্যাসিনো এবং বেটিং হাব</p>
                </motion.div>
            </div>
        </section>
    );
}
