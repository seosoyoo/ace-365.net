"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogIn, UserPlus, Gift, Sparkles } from "lucide-react";

export function MobileFooter() {
    const [showSparkle, setShowSparkle] = useState(false);

    useEffect(() => {
        // Toggle sparkle effect every few seconds
        const interval = setInterval(() => {
            setShowSparkle(true);
            setTimeout(() => setShowSparkle(false), 1500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 },
        },
    };

    const iconVariants = {
        initial: { rotate: 0 },
        animate: { rotate: [0, 15, -15, 10, -10, 5, -5, 0], transition: { duration: 0.5 } },
    };

    const sparkleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            transition: { duration: 1.5, times: [0, 0.5, 1] },
        },
    };

    return (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 left-0 right-0 md:hidden bg-black/90 backdrop-blur-md border-t border-yellow-500/30 z-40 shadow-lg shadow-black/50">
            <div className="grid grid-cols-3 gap-1 p-2">
                <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors shadow-md" variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <div className="flex flex-col items-center justify-center">
                        <motion.div variants={iconVariants} whileHover="animate">
                            <LogIn size={20} className="mb-1" />
                        </motion.div>
                        <span className="text-xs font-bold tracking-wide">লগইন</span>
                    </div>
                </motion.a>

                <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors shadow-md" variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <div className="flex flex-col items-center justify-center">
                        <motion.div variants={iconVariants} whileHover="animate">
                            <UserPlus size={20} className="mb-1" />
                        </motion.div>
                        <span className="text-xs font-bold tracking-wide">নিবন্ধন</span>
                    </div>
                </motion.a>

                <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black py-3 px-4 rounded-lg font-medium transition-colors shadow-md overflow-hidden" variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <div className="flex flex-col items-center justify-center relative z-10">
                        <motion.div variants={iconVariants} whileHover="animate" animate={showSparkle ? "animate" : "initial"}>
                            <Gift size={20} className="mb-1" />
                        </motion.div>
                        <span className="text-xs font-bold tracking-wide">বোনাস</span>
                    </div>

                    {/* Sparkle effects */}
                    {showSparkle && (
                        <>
                            <motion.div className="absolute top-1 right-2" variants={sparkleVariants} initial="hidden" animate="visible">
                                <Sparkles size={14} className="text-white" />
                            </motion.div>
                            <motion.div className="absolute bottom-2 left-2" variants={sparkleVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                                <Sparkles size={12} className="text-white" />
                            </motion.div>
                            <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" variants={sparkleVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                                <Sparkles size={16} className="text-white" />
                            </motion.div>
                        </>
                    )}
                </motion.a>
            </div>
        </motion.div>
    );
}
