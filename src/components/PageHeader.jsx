import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden pt-[70px]">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,107,53,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(0,180,216,0.12)_0%,transparent_50%)]" />
      </div>
      <div className="relative z-10 px-6">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm text-white/40 mb-4"
          >
            <Link to="/" className="text-accent hover:underline">Home</Link>
            <span className="text-white/20">/</span>
            <span>{breadcrumb}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-lg mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
