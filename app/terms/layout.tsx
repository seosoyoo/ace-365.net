import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: {
        absolute: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
      },
    description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
    alternates: {
        canonical: "https://www.ace-365.net/terms",
    },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
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
                                    name: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
                                    item: "https://www.ace-365.net/terms",
                                },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
                            description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
                            url: "https://www.ace-365.net/terms",
                            mainEntity: {
                                "@type": "Article",
                                headline: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
                                author: {
                                    "@type": "Organization",
                                    name: "ACE365",
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "ACE365",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: "https://www.ace-365.net/images/brands/365ace.webp",
                                    },
                                },
                                image: {
                                    "@type": "ImageObject",
                                    url: "https://www.ace-365.net/images/brands/365ace.webp",
                                    width: "1200",
                                    height: "630",
                                    caption: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
                                },
                                datePublished: "2023-01-15T00:00:00Z",
                                dateModified: "2023-12-01T00:00:00Z",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "ACE365 এর নিয়ম ও শর্তাবলী - নির্দেশিকা ক্যাসিনো প্ল্যাটফর্ম",
                            description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
                            url: "https://www.ace-365.net/terms",
                            mainContentOfPage: {
                                "@type": "WebPageElement",
                                cssSelector: "#terms-content",
                            },
                            specialty: "Terms of Service",
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
