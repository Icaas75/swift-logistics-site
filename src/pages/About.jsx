import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import StatsCounter from '../components/StatsCounter'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const values = [
  { icon: '✓', title: 'Integrity', desc: 'We do what we say, every time.' },
  { icon: '⏰', title: 'On-Time', desc: 'Punctuality is our promise.' },
  { icon: '💡', title: 'Innovation', desc: 'Always improving, always evolving.' },
  { icon: '🤝', title: 'Teamwork', desc: 'Together we achieve more.' },
  { icon: '💪', title: 'Reliability', desc: 'Dependable service you can count on.' },
  { icon: '❤️', title: 'Care', desc: 'Every shipment matters.' },
]

const timeline = [
  { year: 2010, title: 'Founded in Addis Ababa', desc: 'Swift Logistics Solutions was established with a single truck and a vision to transform logistics in Ethiopia.' },
  { year: 2013, title: 'Regional Expansion', desc: 'Expanded operations across East Africa, opening offices in Kenya, Uganda, and Tanzania.' },
  { year: 2017, title: 'Global Reach', desc: 'Launched international freight services, partnering with global carriers to reach 15+ countries.' },
  { year: 2022, title: 'Digital Transformation', desc: 'Implemented AI-powered tracking, automated warehousing, and a client portal for real-time visibility.' },
  { year: 2025, title: '30+ Countries', desc: 'Now serving clients in over 30 countries with a fleet of 150+ vehicles and 200+ team members.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Swift Logistics"
        subtitle="Driven by precision, powered by people — learn our story."
        breadcrumb="About"
      />

      {/* Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Office" loading="lazy" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent-dark text-white p-6 rounded-2xl shadow-xl shadow-accent/30 text-center hidden sm:block">
                <div className="font-heading text-3xl font-extrabold">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Our Story</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-6">Driven by Precision, Powered by People</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Founded in 2010, Swift Logistics Solutions started with a simple mission: make logistics faster, smarter, and more reliable for businesses of all sizes. What began as a small freight forwarding operation has grown into a global logistics partner with presence in 30+ countries.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Today, we serve over 500 businesses worldwide, handling everything from international freight to complex supply chain management.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                We believe in transparency, innovation, and above all else, putting our clients first.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a1a]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Mission & Vision</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">Our Purpose</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div {...fadeUp(0.1)} className="p-8 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5">
              <h3 className="font-heading font-bold text-xl text-accent mb-4">🎯 Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">To deliver fast, reliable, and cost-effective logistics solutions that empower businesses to grow. We combine cutting-edge technology with personalized service to create supply chain experiences that exceed expectations.</p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="p-8 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5">
              <h3 className="font-heading font-bold text-xl text-accent mb-4">🔭 Our Vision</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">To be the most trusted logistics partner globally, setting the standard for reliability, innovation, and customer care in every market we serve.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Our Values</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.1 + i * 0.05)}
                className="p-5 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 text-center hover:-translate-y-1 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center text-lg">{v.icon}</div>
                <h5 className="font-heading font-bold text-sm mb-1">{v.title}</h5>
                <p className="text-gray-400 dark:text-gray-500 text-xs">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a1a]/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[3px] text-accent mb-3">Our Journey</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">Company Timeline</h2>
          </motion.div>
          <div className="relative pl-10 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-secondary">
            {timeline.map((item, i) => (
              <motion.div key={item.year} {...fadeUp(0.1 + i * 0.1)}
                className="relative mb-8 last:mb-0 before:absolute before:left-[-30px] before:top-2 before:w-3.5 before:h-3.5 before:rounded-full before:bg-accent"
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 hover:shadow-lg transition-shadow duration-300">
                  <div className="font-heading text-xl font-bold text-accent mb-2">{item.year}</div>
                  <h4 className="font-heading font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,53,0.15)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">Want to Work With Us?</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-white/60 text-lg mb-8">Let us help you streamline your logistics and grow your business.</motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300">
              Get in Touch →
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0A192F] transition-all duration-300">
              See Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
