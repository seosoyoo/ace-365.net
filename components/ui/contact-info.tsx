"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

interface ContactInfoProps {
  className?: string
  showSchema?: boolean
}

export function ContactInfo({ className, showSchema = true }: ContactInfoProps) {
  const contactData = {
    name: "365ACE",
    address: {
      street: "১২৩ ক্যাসিনো এভিনিউ",
      locality: "গুলশান",
      region: "ঢাকা",
      postalCode: "১২১২",
      country: "বাংলাদেশ",
    },
    phone: "+880 1234 567890",
    email: "support@ace-365.net",
    hours: "২৪/৭",
    url: "https://www.ace-365.net",
  }

  return (
    <div className={className}>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: contactData.name,
              url: contactData.url,
              logo: "https://www.ace-365.net/images/brands/jitabet.webp",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: contactData.phone,
                contactType: "customer service",
                email: contactData.email,
                availableLanguage: ["English", "Bengali"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: contactData.address.street,
                addressLocality: contactData.address.locality,
                addressRegion: contactData.address.region,
                postalCode: contactData.address.postalCode,
                addressCountry: contactData.address.country,
              },
              sameAs: [
                "https://www.facebook.com/365ace",
                "https://www.instagram.com/365ace",
                "https://www.twitter.com/365ace",
                "https://www.youtube.com/365ace",
              ],
            }),
          }}
        />
      )}

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <address className="not-italic">
            {contactData.address.street}, {contactData.address.locality}, {contactData.address.region}{" "}
            {contactData.address.postalCode}, {contactData.address.country}
          </address>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <a href={`tel:${contactData.phone.replace(/\s+/g, "")}`} className="hover:underline">
            {contactData.phone}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <a href={`mailto:${contactData.email}`} className="hover:underline">
            {contactData.email}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <span>খোলা: {contactData.hours}</span>
        </div>
      </div>
    </div>
  )
}
