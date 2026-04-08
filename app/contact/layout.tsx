import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: {
        absolute: "ACE365 - যোগাযোগ করুন",
      },
    description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
    keywords: ["ace365 contact", "ace365 customer care"],
    openGraph: {
        title: "ACE365 - যোগাযোগ করুন",
        description: "ACE365 গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন। আমরা আপনাকে সহায়তা করার জন্য ২৪/৭ উপলব্ধ।",
        url: "https://www.ace-365.net/contact",
        siteName: "ACE365",
        images: [
            {
                url: "/images/brands/365ace.webp",
                width: 210,
                height: 75,
                alt: "Logo ACE365 Contact Support",
            },
        ],
        locale: "bn_BD",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ACE365 - যোগাযোগ করুন",
        description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
        images: ["/images/brands/365ace.webp"],
    },
    alternates: {
        canonical: "https://www.ace-365.net/contact",
    },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
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
                                    name: "হোম",
                                    item: "https://www.ace-365.net/",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "যোগাযোগ",
                                    item: "https://www.ace-365.net/contact",
                                },
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "যোগাযোগ ACE365",
                            description: "ACE365 গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন। আপনার যেকোনো প্রশ্ন বা সমস্যায় সাহায্য করার জন্য আমরা ২৪/৭ উপলব্ধ।",
                            url: "https://www.ace-365.net/contact",
                            mainEntity: {
                                "@type": "Organization",
                                name: "ACE365",
                                contactPoint: [
                                    {
                                        "@type": "ContactPoint",
                                        telephone: "+880-1234-567890",
                                        contactType: "customer service",
                                        availableLanguage: ["English", "Bengali"],
                                        email: "support@ace-365.net",
                                    },
                                ],
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "ACE365 সদর দপ্তর",
                            image: "https://www.jitaweb.com/images/brands/365ace.webp",
                            priceRange: "$$",
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
                        },
                    ]),
                }}
            />
            {children}
        </>
    );
}
