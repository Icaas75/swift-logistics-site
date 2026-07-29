import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
          <input className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm" type="text" id="name" placeholder="John Smith" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
          <input className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm" type="email" id="email" placeholder="john@example.com" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
          <input className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm" type="tel" id="phone" placeholder="+251 900067360" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
          <input className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm" type="text" id="subject" placeholder="Quote Request" />
        </div>
      </div>
      <div className="mt-5">
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm min-h-[120px] resize-y" id="message" placeholder="Tell us about your logistics needs..." required />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 cursor-pointer border-none"
      >
        {sending ? '⏳ Sending...' : 'Send Message →'}
      </button>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 rounded-xl bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-400/20 text-center"
        >
          <div className="text-2xl mb-2">✅</div>
          <strong className="block">Message Sent!</strong>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Thank you! I'll get back to you within 24 hours.</p>
        </motion.div>
      )}
    </form>
  )
}
