import type { Metadata } from "next/types"
import ClientWrapper from "./ClientWrapper"

export const metadata: Metadata = {
  title: "ACE365 - Bangladesh's Top Fun Casino & Bet Platform",
  description:
    "ACE365 হল বাংলাদেশে অনলাইনে ক্যাসিনো গেম খেলার জন্য সবচেয়ে মজাদার এবং স্মার্ট বেট প্ল্যাটফর্মগুলির মধ্যে একটি, স্বাগত বোনাস দাবি করতে এখনই লগইন করুন এবং সাইন আপ করুন।",
  alternates: {
    canonical: "https://www.ace-365.net",
  },
}

export default function HomePage() {
  return <ClientWrapper />
}
