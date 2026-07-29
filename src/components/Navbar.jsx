import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-xl">
          Yisihak A.
          <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-pulse" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? 'text-gray-900 dark:text-white after:w-full'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-accent transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          aria-label="Menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-[#1a1a35] shadow-2xl border-l border-gray-200 dark:border-white/5 flex flex-col p-8 gap-6 z-40 md:hidden"
          >
            <div className="h-[70px]" /> {/* spacer */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-gray-600 dark:text-gray-300 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-4 flex items-center gap-3 text-gray-600 dark:text-gray-300"
            >
              {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
