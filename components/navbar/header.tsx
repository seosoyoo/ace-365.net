"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeSelector from "@/components/theme-selector";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";

export default function Header() {
    const { theme: currentTheme, changeTheme: onThemeChange } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update the navItems array to include all pages
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Games", href: "/games" },
        { name: "Promotions", href: "/promotions" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];

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

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            <motion.div className="relative h-10 w-32 md:h-12 md:w-40" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <Image src="/images/brands/ace365.webp" alt="365ACE Logo" fill className="object-contain" priority />
                            </motion.div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-between flex-1 ml-8">
                        {/* Menu Items - Left Side */}
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-white hover:text-white font-medium transition-colors drop-shadow-md">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Auth Buttons and Theme Selector - Right Side */}
                        <div className="flex items-center space-x-4">
                            <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-md border border-blue-400 flex items-center gap-2" variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <LogIn size={18} />
                                লগইন
                            </motion.a>
                            <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-colors shadow-md flex items-center gap-2" variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <UserPlus size={18} />
                                নিবন্ধন
                            </motion.a>
                            <ThemeSelector />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden space-x-4">
                        <div className="relative z-50">
                            <ThemeSelector />
                        </div>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 rounded-full bg-black/30 backdrop-blur-md" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-4 bg-black/70 backdrop-blur-md rounded-lg p-4">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-white hover:text-white font-medium block py-2 transition-colors drop-shadow-md" onClick={() => setMobileMenuOpen(false)}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/10">
                                <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center justify-center gap-2 mt-2" variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={() => setMobileMenuOpen(false)}>
                                    <LogIn size={18} />
                                    লগইন
                                </motion.a>
                            </li>
                            <li>
                                <motion.a href="https://ash521.com/m/index.html?affiliateCode=aliance" target="_blank" rel="nofollow noreferrer noopener" className="w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-colors flex items-center justify-center gap-2" variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={() => setMobileMenuOpen(false)}>
                                    <UserPlus size={18} />
                                    নিবন্ধন
                                </motion.a>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </div>
        </header>
    );
}
