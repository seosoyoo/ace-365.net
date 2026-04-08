import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { MobileOptimizations } from "@/components/mobile/mobile-optimizations";
import { AccessibilityEnhancements } from "@/components/ui/accessibility-enhancements";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap", // Optimize font display
    preload: true,
});

// Update the metadata object with new title, description, keywords, and language settings
export const metadata: Metadata = {
    title: {
        default: "365ACE - Bangladesh's Top Fun Casino & Bet Platform",
        template: "%s | 365ACE",
    },
    description: "365ACE হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
    keywords: ["ace365", "ace 365", "365ace", "365 ace"],
    authors: [{ name: "365ACE" }],
    creator: "365ACE",
    publisher: "365ACE",
    openGraph: {
        type: "website",
        locale: "bn_BD",
        url: "https://www.ace-365.net",
        title: "365ACE - Bangladesh's Top Fun Casino & Bet Platform",
        description: "365ACE হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
        siteName: "365ACE",
        images: [
            {
                url: "/images/banner/365ace-login.webp",
                width: 800,
                height: 600,
                alt: "365ACE - Bangladesh's Top Fun Casino & Bet Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "365ACE - Bangladesh's Top Fun Casino & Bet Platform",
        description: "365ACE হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
        images: ["/images/banner/365ace-login.webp"],
        creator: "@365ace",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/images/brands/favicon-jitabet.webp",
        apple: "/images/brands/favicon-jitabet.webp",
    },
    verification: {
        google: "LC6L_98hDNTJmQ0blLXC8Ud7Eb_IzEMiLFxJVTDbQLo",
        yandex: "yandex-verification-code",
    },
    alternates: {
        languages: {
            bn: "https://www.ace-365.net/",
        },
    },
    generator: "v0.dev",
};

// Update the html lang attribute
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bn-BD">
            <head>
                {/* Favicon with varied sizes */}
                <link rel="icon" type="image/ico" href="/images/brands/favicon-ace365.webp" />
                <link rel="icon" type="image/ico" href="/images/brands/favicon-ace365.webp" sizes="32x32" />
                <link rel="icon" type="image/ico" href="/images/brands/favicon-ace365.webp" sizes="16x16" />
                <link rel="apple-touch-icon" type="image/ico" href="/images/brands/favicon-ace365.webp" sizes="180x180" />

                {/* Preconnect to critical domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Preload critical assets with high fetchpriority */}
                <link rel="preload" href="/images/brands/ace365.webp" as="image" fetchPriority="high" />
                <link rel="preload" href="/images/banner/365ace-login.webp" as="image" />
                <link rel="preload" href="/images/banner/365ace-app.webp" as="image" />
                <link rel="preload" href="/images/banner/365ace-smart-bet.webp" as="image" />

                {/* Inline critical CSS */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
          /* Critical CSS for above-the-fold content */
          body { background-color: #000; color: #fff; }
          .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          
          /* Add critical hero styles */
          .hero-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
          .hero-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
          .hero-description { font-size: 1.25rem; margin-bottom: 2rem; }
          .hero-buttons { display: flex; gap: 1rem; justify-content: center; }
          
          /* Optimize image display */
          .hero-logo { max-width: 100%; height: auto; margin: 0 auto 2rem; }
          
          @media (min-width: 768px) {
            .hero-title { font-size: 3.5rem; }
            .hero-description { font-size: 1.5rem; }
          }
        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <AccessibilityEnhancements />
                <ThemeProvider>
                    <MobileOptimizations />
                    <Suspense>{children}</Suspense>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
