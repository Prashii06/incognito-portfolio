import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import BrandMark from './BrandMark'
import { useActiveSection } from '../hooks/useActiveSection'
import './Header.css'

const nav = [
  { href: '#home', label: 'Home', id: 'home' as const },
  { href: '#team', label: 'Team', id: 'team' as const },
  { href: '#projects', label: 'Projects', id: 'projects' as const },
  { href: '/contact', label: 'Contact', id: 'contact' as const },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const prefix = isHome ? '' : '/'
  const activeSection = useActiveSection(isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (hash: string) => {
    if (!isHome) return
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const resolveHref = (href: string) => {
    if (href.startsWith('/')) return href
    return `${prefix}${href}`
  }

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          <motion.img
            src="/favicon.png"
            alt=""
            className="header__logo"
            width={40}
            height={40}
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          />
          <BrandMark size="header" />
        </Link>

        <nav className="header__nav" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              className={`header__link ${isHome && activeSection === item.id ? 'header__link--active' : ''}`}
              onClick={(e) => {
                if (isHome && item.href.startsWith('#')) {
                  e.preventDefault()
                  scrollTo(item.href)
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
