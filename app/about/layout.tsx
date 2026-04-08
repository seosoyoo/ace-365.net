import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    absolute: "ACE365 আমাদের সম্পর্কে - ভিশন এবং মিশন ক্যাসিনো প্ল্যাটফর্ম",
  },
  description:
    "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
  alternates: {
    canonical: "https://www.ace-365.net/about",
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
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
                  name: "About Us",
                  item: "https://www.ace-365.net/about",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "ACE365 আমাদের সম্পর্কে - ভিশন এবং মিশন ক্যাসিনো প্ল্যাটফর্ম",
              description:
                "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
              url: "https://www.ace-365.net/about",
              mainContentOfPage: {
                "@type": "WebPageElement",
                about: {
                  "@type": "Thing",
                  name: "ACE365 কোম্পানির তথ্য",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "ACE365 আমাদের সম্পর্কে - ভিশন এবং মিশন ক্যাসিনো প্ল্যাটফর্ম",
              description: "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
              url: "https://www.ace-365.net/about",
              about: {
                "@type": "Organization",
                name: "ACE365",
                url: "https://www.ace-365.net/",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ACE365 Headquarters",
              image: "https://www.ace-365.net/images/brands/jitabet.webp",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Casino Boulevard, Suite 456",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                postalCode: "1000",
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
  )
}
