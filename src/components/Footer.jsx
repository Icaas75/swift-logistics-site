import { Link } from 'react-router-dom'

const socials = [
  { href: 'https://instagram.com/icaas5', label: 'Instagram', icon: 'logo-instagram' },
  { href: 'https://t.me/icaas5', label: 'Telegram', icon: 'paper-plane' },
  { href: 'https://github.com/Icaas75', label: 'GitHub', icon: 'logo-github' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/5">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Swift Logistics <span className="text-accent">by Yisihak A.</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A portfolio project showcasing a modern logistics platform built with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-5 after:h-0.5 after:bg-accent pb-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/services', label: 'Services' }, { to: '/contact', label: 'Contact' }].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 text-sm hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-5 after:h-0.5 after:bg-accent pb-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              {['Freight Forwarding', 'Warehousing', 'Supply Chain', 'Customs Clearance'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-5 after:h-0.5 after:bg-accent pb-3">
              Contact
            </h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent"><ion-icon name="location-sharp" /></span>
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent"><ion-icon name="call-outline" /></span>
                <span>+251 900067360</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent"><ion-icon name="mail-outline" /></span>
                <span>addisuisaac785@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <p className="text-white/20 text-xs">
            © 2025 Built by Yisihak Addisu. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 text-lg"
              >
                <ion-icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
