import React, { useState, useEffect, useContext, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { List, X, Translate, Check } from '@phosphor-icons/react'
import { LangContext } from '../App'
import { PATHS } from '../seo'

const LANG_NAMES = { en: 'English', he: 'עברית', ar: 'العربية' }

export default function Navbar() {
  const { lang, t } = useContext(LangContext)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 12))

  useEffect(() => {
    if (!langOpen) return
    const onDown = (e) => { if (!langRef.current?.contains(e.target)) setLangOpen(false) }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [langOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setLangOpen(false); setMenuOpen(false) } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const links = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.ai, href: '#ai' },
    { name: t.nav.work, href: '#portfolio' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.faq, href: '#faq' }
  ]

  return (
    <header
      className={`night fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled ? '!bg-[#080a1f]/95 backdrop-blur-xl border-line' : '!bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#main" className="flex items-center" aria-label="DevUltra home">
          <img src="/brand/logo-full-light.webp" alt="DevUltra" width="188" height="30" className="h-[30px] w-auto" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-2 transition-colors duration-200 hover:text-ink"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-expanded={langOpen}
              aria-haspopup="menu"
              aria-label="Change language"
              className="btn btn-sm btn-secondary !px-3 gap-1.5"
            >
              <Translate size={18} weight="regular" />
              <span className="text-xs font-semibold uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, scale: 0.96, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.12 } }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: t.dir === 'rtl' ? 'top left' : 'top right' }}
                  className="card absolute end-0 top-full mt-2 w-40 p-1.5 shadow-[var(--shadow)]"
                >
                  {Object.entries(LANG_NAMES).map(([code, name]) => (
                    <a
                      key={code}
                      href={PATHS[code]}
                      hrefLang={code}
                      lang={code}
                      role="menuitemradio"
                      aria-checked={lang === code}
                      onClick={() => setLangOpen(false)}
                      className="flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                    >
                      {name}
                      {lang === code && <Check size={16} className="text-accent" />}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="btn btn-sm btn-primary hidden sm:inline-flex">{t.nav.cta}</a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            className="btn btn-sm btn-secondary !px-3 lg:hidden"
          >
            <List size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2 }}
            className="night fixed inset-0 z-[60] flex flex-col bg-bg px-4 sm:px-6 lg:hidden"
          >
            <div className="flex h-16 items-center justify-between">
              <img src="/brand/logo-full-light.webp" alt="DevUltra" width="188" height="30" className="h-[30px] w-auto" />
              <button onClick={() => setMenuOpen(false)} aria-label={t.nav.close} className="btn btn-sm btn-secondary !px-3">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, transform: 'translateY(8px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="border-b border-line py-4 text-2xl font-semibold tracking-tight"
                >
                  {l.name}
                </motion.a>
              ))}
            </div>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary mt-8 w-full">{t.nav.cta}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
