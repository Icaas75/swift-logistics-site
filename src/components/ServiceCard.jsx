import { motion } from 'framer-motion'

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-[#1a1a35] border border-gray-100 dark:border-white/5 rounded-2xl p-8 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 cursor-default"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center text-2xl mb-5">
        <span className="w-full h-full rounded-xl bg-gray-50 dark:bg-[#0a0a1a]/50 flex items-center justify-center">
          {icon}
        </span>
      </div>

      <h3 className="font-heading font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>

      <span className="inline-flex items-center gap-1 mt-5 text-accent font-semibold text-sm group-hover:gap-2 transition-all duration-300">
        Learn more →
      </span>
    </motion.div>
  )
}
