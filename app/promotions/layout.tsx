import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    absolute: "ACE365 প্রচার - সীমিত সময়ের বোনাস",
  },
  description: "ACE365 খেলোয়াড়দের জন্য এক্সক্লুসিভ প্রোমোশন, বোনাস এবং বিশেষ অফার আবিষ্কার করুন।",
  alternates: {
    canonical: "https://www.ace-365.net/promotions",
  },
}

export default function PromotionsLayout({ children }: { children: ReactNode }) {
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
                  name: "Promotions",
                  item: "https://www.ace-365.net/promotions",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "ACE365 প্রচার এবং বোনাস",
              description: "ACE365 খেলোয়াড়দের জন্য এক্সক্লুসিভ প্রোমোশন, বোনাস এবং বিশেষ অফার আবিষ্কার করুন।",
              url: "https://www.ace-365.net/promotions",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "Event",
                      name: "স্বাগতম বোনাস প্রচার",
                      startDate: "2025-05-01T00:00:00+06:00",
                      endDate: "2025-06-30T23:59:59+06:00",
                      description: "আপনার প্রথম জমার উপর ৳১০,০০০ পর্যন্ত ১০০% স্বাগত বোনাস পান",
                      organizer: {
                        "@type": "Organization",
                        name: "ACE365",
                        url: "https://www.ace-365.net",
                      },
                      location: {
                        "@type": "Place",
                        name: "ACE365 অনলাইন ক্যাসিনো",
                        address: {
                          "@type": "PostalAddress",
                          addressCountry: "Bangladesh",
                        },
                      },
                      performer: {
                        "@type": "Organization",
                        name: "ACE365 ক্যাসিনো",
                      },
                      eventStatus: "https://schema.org/EventScheduled",
                      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                      image: "https://www.ace-365.net/images/banner/jitabet-login.webp",
                      offers: {
                        "@type": "Offer",
                        name: "স্বাগতম বোনাস",
                        availability: "https://schema.org/InStock",
                        price: "0",
                        priceCurrency: "BDT",
                        validFrom: "2025-05-01T00:00:00+06:00",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@type": "Event",
                      name: "সাপ্তাহিক ক্যাশব্যাক অফার",
                      startDate: "2025-05-01T00:00:00+06:00",
                      endDate: "2025-12-31T23:59:59+06:00",
                      description: "আপনার সাপ্তাহিক ক্ষতির উপর ১৫% পর্যন্ত ক্যাশব্যাক পান",
                      organizer: {
                        "@type": "Organization",
                        name: "ACE365",
                        url: "https://www.ace-365.net",
                      },
                      location: {
                        "@type": "Place",
                        name: "ACE365 অনলাইন ক্যাসিনো",
                        address: {
                          "@type": "PostalAddress",
                          addressCountry: "Bangladesh",
                        },
                      },
                      performer: {
                        "@type": "Organization",
                        name: "ACE365 ক্যাসিনো",
                      },
                      eventStatus: "https://schema.org/EventScheduled",
                      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                      image: "https://www.ace-365.net/images/banner/jitabet-login.webp",
                      offers: {
                        "@type": "Offer",
                        name: "সাপ্তাহিক ক্যাশব্যাক",
                        availability: "https://schema.org/InStock",
                        price: "0",
                        priceCurrency: "BDT",
                        validFrom: "2025-05-01T00:00:00+06:00",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@type": "Event",
                      name: "একটি বন্ধু বোনাস পড়ুন",
                      startDate: "2025-05-01T00:00:00+06:00",
                      endDate: "2025-12-31T23:59:59+06:00",
                      description: "ACE365-তে রেফার করা প্রতিটি বন্ধুর জন্য ৳১,০০০ টাকা পান",
                      organizer: {
                        "@type": "Organization",
                        name: "ACE365",
                        url: "https://www.ace-365.net",
                      },
                      location: {
                        "@type": "Place",
                        name: "ACE365 অনলাইন ক্যাসিনো",
                        address: {
                          "@type": "PostalAddress",
                          addressCountry: "Bangladesh",
                        },
                      },
                      performer: {
                        "@type": "Organization",
                        name: "ACE365 ক্যাসিনো",
                      },
                      eventStatus: "https://schema.org/EventScheduled",
                      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                      image: "https://www.ace-365.net/images/banner/jitabet-login.webp",
                      offers: {
                        "@type": "Offer",
                        name: "রেফারেল বোনাস",
                        availability: "https://schema.org/InStock",
                        price: "0",
                        priceCurrency: "BDT",
                        validFrom: "2025-05-01T00:00:00+06:00",
                      },
                    },
                  },
                ],
              },
            },
          ]),
        }}
      />
      {children}
    </>
  )
}
