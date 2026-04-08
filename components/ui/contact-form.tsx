"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, message })
    // Reset form
    setEmail("")
    setMessage("")
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-white text-black hover:bg-white/90 font-medium transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
