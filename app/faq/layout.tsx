import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "ACE365 প্রায় জিজ্ঞাসিত প্রশ্নাবলী (FAQ) | বাংলাদেশের শীর্ষ ক্যাসিনো ও বেট প্ল্যাটফর্ম",
  },
  description:
    "ACE365 এর সাধারণ প্রশ্নাবলী - অ্যাকাউন্ট, পেমেন্ট, গেমস, বোনাস এবং সাপোর্ট সম্পর্কে জানুন। বাংলাদেশের সেরা অনলাইন ক্যাসিনো ও বেটিং প্ল্যাটফর্ম।",
  alternates: {
    canonical: "https://www.ace-365.net/faq",
  },
}

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
    </>
  )
}
