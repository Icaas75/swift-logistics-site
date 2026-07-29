import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsCounter from '../components/StatsCounter'
import { useRef } from 'react'

const services = [
  { icon: '🚢', title: 'Freight Forwarding', description: 'Air, sea, and land freight solutions with real-time tracking, customs documentation, and guaranteed timelines.' },
  { icon: '🏭', title: 'Warehousing & Distribution', description: 'Secure, scalable storage with intelligent inventory management, pick-and-pack, and last-mile distribution.' },
  { icon: '🔗', title: 'Supply Chain Management', description: 'End-to-end visibility and optimization from procurement to delivery, powered by data and expertise.' },
  { icon: '📋', title: 'Customs Clearance', description: 'Hassle-free customs brokerage with expert documentation, compliance checks, and fast-track processing.' },
  { icon: '📦', title: 'E-Commerce Logistics', description: 'Specialized fulfillment for online retailers — same-day pickup, smart packaging, and global delivery networks.' },
  { icon: '📍', title: 'Real-Time Tracking', description: 'Complete visibility across your supply chain with GPS tracking, predictive ETAs, and instant alerts.' },
]

const stats = [
  { value: 25000, suffix: 'K', label: 'Packages Delivered' },
  { value: 150, suffix: '+', label: 'Fleet Vehicles' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 30, suffix: '+', label: 'Countries Covered' },
]

const whys = [
  { icon: '🌐', title: 'Global Network', desc: 'Strategic partnerships across 30+ countries ensure seamless international shipping.' },
  { icon: '⚡', title: 'Fast & Reliable', desc: '99% on-time delivery rate with real-time tracking and proactive updates.' },
  { icon: '🔒', title: 'Secure Handling', desc: 'Insurance-backed shipping with GPS-monitored fleet and secure warehousing.' },
  { icon: '💡', title: 'Smart Technology', desc: 'AI-powered route optimization, predictive analytics, and automated inventory systems.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Personal account managers available 24/7 to handle your logistics needs.' },
  { icon: '💰', title: 'Cost-Effective', desc: 'Optimized routes and consolidated shipments that save you up to 30% on logistics costs.' },
]

const testimonials = [
  { initials: 'SK', name: 'Sarah K.', role: 'CEO, GreenLeaf Commerce', text: 'Swift Logistics transformed our supply chain. Their real-time tracking and dedicated support have been game-changing for our e-commerce business.' },
  { initials: 'JM', name: 'James M.', role: 'Supply Chain Director, TechGlobal Inc.', text: 'We\'ve been partnering with Swift for over 5 years. Their reliability, professionalism, and cost-effectiveness are unmatched.' },
  { initials: 'AL', name: 'Amina L.', role: 'Operations Manager, AfroTrade', text: 'The team went above and beyond during our peak season. They handled a 300% volume surge without a single delay.' },
  { initials: 'DR', name: 'David R.', role: 'Founder, GlobalMart', text: 'Their customs clearance expertise saved us weeks of delays. I recommend Swift to anyone doing international shipping.' },
  { initials: 'PW', name: 'Priya W.', role: 'Logistics Lead, FreshFoods Co.', text: 'The warehouse management system Swift implemented reduced our inventory errors by 95%. Absolutely incredible.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function Home() {
  const trackRef = useRef(null)

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3 after:content-[''] after:inline-block after:w-8 after:h-0.5 after:bg-accent after:ml-3 after:align-middle">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent">
              Core Logistics Services
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              Comprehensive solutions tailored to move your business forward — from warehouse to worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.1)}
                className="text-center p-6 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  <StatsCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a1a]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Warehouse" loading="lazy" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent-dark text-white p-6 rounded-2xl shadow-xl shadow-accent/30 text-center hidden sm:block">
                <div className="font-heading text-3xl font-extrabold">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3 after:content-[''] after:inline-block after:w-8 after:h-0.5 after:bg-accent after:ml-3 after:align-middle">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-6">Driven by Precision,<br />Powered by People</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Swift Logistics Solutions is a leading provider of comprehensive logistics and supply chain services. Since 2010, we have helped businesses of all sizes streamline operations, reduce costs, and deliver exceptional experiences.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Our team combines deep industry expertise with cutting-edge technology to create logistics solutions that just work — every time, every mile.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['24/7 Customer Support', 'Real-Time Tracking', 'Customized Solutions', 'Competitive Rates'].map((feat, i) => (
                  <motion.div key={feat} {...fadeUp(0.2 + i * 0.05)} className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-[#1a1a35] text-sm font-medium shadow-sm">
                    <span className="text-accent">✓</span> {feat}
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                Learn Our Story →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3 after:content-[''] after:inline-block after:w-8 after:h-0.5 after:bg-accent after:ml-3 after:align-middle">
              Why Swift
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              We don't just move goods — we move your business forward with reliability, transparency, and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whys.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 + i * 0.1)}
                className="p-6 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center text-2xl">{item.icon}</div>
                <h4 className="font-heading font-bold text-base mb-2">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3 after:content-[''] after:inline-block after:w-8 after:h-0.5 after:bg-accent after:ml-3 after:align-middle">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          </motion.div>

          <div ref={trackRef} className="flex gap-6 mt-12 overflow-x-auto pb-4 scrollbar-none">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-[320px] sm:min-w-[380px] flex-shrink-0 p-6 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#fbbf24] text-sm mb-4">★★★★★</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 dark:text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,53,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(0,180,216,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Transform Your Logistics?</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-white/60 text-lg mb-8">Get a personalized quote in under 24 hours. No obligations, just expert advice.</motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300">
              Get a Free Quote →
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0A192F] hover:-translate-y-0.5 transition-all duration-300">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
