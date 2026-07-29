import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const contactDetails = [
  { icon: '📍', title: 'Office Address', text: 'Addis Ababa, Ethiopia' },
  { icon: '📞', title: 'Phone', text: '+251 900067360' },
  { icon: '✉️', title: 'Email', text: 'addisuisaac785@gmail.com' },
  { icon: '🕐', title: 'Working Hours', text: 'Available 24/7' },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="I'm here to help with all your logistics needs."
        breadcrumb="Contact"
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Contact</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-4">
              Have a question or need a quote? Fill out the form and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp(0)} className="bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 rounded-2xl p-8">
              <ContactForm />
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Reach out through any channel and I'll respond promptly.</p>

              <div className="space-y-6">
                {contactDetails.map((d) => (
                  <div key={d.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-accent text-lg flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{d.title}</h5>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{d.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,53,0.15)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">Prefer to Talk Directly?</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-white/60 text-lg mb-8">Call me anytime for immediate assistance.</motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
            <a href="tel:+251900067360" className="px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300">
              Call +251 900067360
            </a>
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0A192F] transition-all duration-300">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
