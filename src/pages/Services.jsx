import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

const services = [
  { icon: '🚢', title: 'Freight Forwarding', description: 'Comprehensive air, sea, and land freight solutions with end-to-end tracking, customs documentation, and guaranteed delivery timelines.' },
  { icon: '🏭', title: 'Warehousing & Distribution', description: 'Secure storage facilities with intelligent inventory management, pick-and-pack services, and efficient last-mile distribution networks.' },
  { icon: '🔗', title: 'Supply Chain Management', description: 'Complete supply chain visibility and optimization from procurement to final delivery, powered by advanced analytics and deep expertise.' },
  { icon: '📋', title: 'Customs Clearance', description: 'Expert customs brokerage services with fast-track processing, accurate documentation, and full compliance assurance.' },
  { icon: '📦', title: 'E-Commerce Logistics', description: 'Specialized fulfillment solutions for online retailers including same-day pickup, smart packaging, and global delivery networks.' },
  { icon: '📍', title: 'Real-Time Tracking', description: 'Complete visibility across your supply chain with GPS tracking, predictive ETAs, and instant proactive alerts.' },
]

const industries = [
  { icon: '🛍️', title: 'Retail & E-Commerce', desc: 'Fast fulfillment, easy returns, and last-mile delivery optimized for online retailers.' },
  { icon: '🏥', title: 'Healthcare & Pharma', desc: 'Temperature-controlled shipping, chain-of-custody tracking, and regulatory compliance.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Just-in-time delivery, raw material sourcing, and finished goods distribution.' },
  { icon: '💰', title: 'Finance & Tech', desc: 'Secure high-value shipments, data center logistics, and equipment transport.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics solutions tailored to your business."
        breadcrumb="Services"
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">What We Offer</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent">
              Core Logistics Services
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-4">
              End-to-end logistics solutions designed to move your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-[#0a0a1a]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Industries</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">Tailored Services by Industry</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 + i * 0.1)}
                className="p-6 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center text-2xl">{item.icon}</div>
                <h4 className="font-heading font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,53,0.15)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">Need a Custom Solution?</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-white/60 text-lg mb-8">Every business is unique. Let us build a logistics plan tailored to your specific needs.</motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300">
              Request a Quote →
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0A192F] transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
