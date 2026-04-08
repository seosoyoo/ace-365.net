import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: {
        absolute: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
      },
    description: "365ACE হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
    alternates: {
        canonical: "https://www.ace-365.net/privacy",
    },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://www.ace-365.net/",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                                    item: "https://www.ace-365.net/privacy",
                                },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                            description: "365ACE কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করে তা জানুন। আমাদের গোপনীয়তা নীতি আপনার ডেটা এবং গোপনীয়তা রক্ষার জন্য আমাদের প্রতিশ্রুতির রূপরেখা তুলে ধরে।",
                            url: "https://www.ace-365.net/privacy",
                            mainEntity: {
                                "@type": "Article",
                                headline: "365ACE ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                                author: {
                                    "@type": "Organization",
                                    name: "365ACE",
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "365ACE",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: "https://www.364-ace.net/images/brands/jitabet.webp",
                                    },
                                },
                                image: {
                                    "@type": "ImageObject",
                                    url: "https://www.364-ace.net/images/brands/jitabet.webp",
                                    width: "1200",
                                    height: "630",
                                    caption: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                                },
                                datePublished: "2023-01-15T00:00:00Z",
                                dateModified: "2023-12-01T00:00:00Z",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                            description: "365ACE অনলাইন ক্যাসিনো এবং স্পোর্টস বেটিং প্ল্যাটফর্মের গোপনীয়তা নীতি।",
                            url: "https://www.ace-365.net/privacy",
                            mainContentOfPage: {
                                "@type": "WebPageElement",
                                cssSelector: "#privacy-content",
                            },
                            specialty: "ACE365 গোপনীয়তা নীতি - আপনার ডেটা সুরক্ষা অগ্রাধিকার",
                            lastReviewed: "2023-12-01",
                            datePublished: "2023-01-15T00:00:00Z",
                            dateModified: "2023-12-01T00:00:00Z",
                        },
                    ]),
                }}
            />
            {children}
        </>
    );
}
