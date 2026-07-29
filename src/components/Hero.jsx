import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatsCounter from './StatsCounter'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const heroStats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: 'K', label: 'Shipments Delivered' },
  { value: 99, suffix: '%', label: 'On-Time Rate' },
  { value: 50, suffix: '+', label: 'Global Partners' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId

    const resize = () => {
      const parent = canvas.parentElement
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        const dx = this.x - mouseRef.current.x
        const dy = this.y - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          this.x += dx * force * 0.02
          this.y += dy * force * 0.02
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80)
      particles = Array.from({ length: count }, () => new Particle())
    }

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 150)})`
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      connect()
      animId = requestAnimationFrame(animate)
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('resize', resize)
    init()
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[70px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#060F1E]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,107,53,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(0,180,216,0.12)_0%,transparent_50%)]" />
        <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Built by Yisihak Addisu — Portfolio Project
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6">
          Your Partner in<br />
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Efficient Logistics
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
          End-to-end freight, warehousing, and supply chain solutions powered by technology and driven by people who care.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300">
            Get a Quote →
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-[#0A192F] hover:-translate-y-0.5 transition-all duration-300">
            Explore Services
          </Link>
        </motion.div>

        {/* Hero Stats */}
        <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/5">
          {heroStats.map(stat => (
            <div key={stat.label}>
              <div className="font-heading text-3xl font-bold text-white">
                <StatsCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest"
      >
        <span>Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 relative">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-accent animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  )
}
