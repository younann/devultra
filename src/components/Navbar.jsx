import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { LangContext } from '../App'

const Navbar = () => {
  const { lang, setLang, t } = useContext(LangContext)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.automations, href: '#automations' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const toggleLang = (l) => {
    setLang(l)
    setLangMenuOpen(false)
  }

  return (
    <nav 
      className={scrolled ? 'nav-floating' : 'nav-fixed'}
      style={{ 
        paddingLeft: '5%', 
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="logo"
        style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em' }}
      >
        DEV<span className="text-gradient">ULTRA</span>
      </motion.div>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="hidden-mobile">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{ 
              textDecoration: 'none', 
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'color 0.3s ease'
            }}
            whileHover={{ color: 'var(--text-primary)' }}
          >
            {link.name}
          </motion.a>
        ))}

        {/* Language Switcher */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-secondary)', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            <Globe size={18} />
            <span style={{ textTransform: 'uppercase' }}>{lang}</span>
          </button>
          <AnimatePresence>
            {langMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  zIndex: 100
                }}
              >
                {['en', 'ar', 'he'].map(l => (
                  <button 
                    key={l}
                    onClick={() => toggleLang(l)}
                    style={{
                      background: lang === l ? 'var(--accent-primary)' : 'transparent',
                      color: lang === l ? '#fff' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '5px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    {l === 'en' ? 'English' : l === 'ar' ? 'العربية' : 'עברית'}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '10px 24px',
            borderRadius: '100px',
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          {t.nav.cta}
        </motion.button>
      </div>

      {/* Mobile Toggle */}
      <div 
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ cursor: 'pointer', zIndex: 100 }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: t.dir === 'rtl' ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: t.dir === 'rtl' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: t.dir === 'rtl' ? 'auto' : 0,
              left: t.dir === 'rtl' ? 0 : 'auto',
              width: '80%',
              height: '100vh',
              background: 'var(--bg-secondary)',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              borderLeft: t.dir === 'rtl' ? 'none' : '1px solid var(--glass-border)',
              borderRight: t.dir === 'rtl' ? '1px solid var(--glass-border)' : 'none'
            }}
          >
             {/* Language switch in mobile */}
             <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                {['en', 'ar', 'he'].map(l => (
                  <button 
                    key={l}
                    onClick={() => toggleLang(l)}
                    style={{
                      background: 'transparent',
                      color: lang === l ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      border: lang === l ? '1px solid var(--accent-primary)' : '1px solid transparent',
                      padding: '5px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 700
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  color: 'var(--text-primary)'
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
          .mobile-toggle { display: block; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
