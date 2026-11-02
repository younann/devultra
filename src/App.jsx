import React, { useEffect, useState, createContext } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Promises from './sections/Promises'
import Services from './sections/Services'
import AISolutions from './sections/AISolutions'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import About from './sections/About'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AccessibilityMenu from './components/AccessibilityMenu'
import { translations } from './translations'
import { PATHS, pageMeta, pagePath } from './seo'
import LegalPage from './sections/LegalPage'

export const LangContext = createContext()

function App({ initialLang, page = 'home' }) {
  const lang = initialLang
  // Section links point home from other pages
  const home = page === 'home' ? '' : PATHS[lang]
  const [still, setStill] = useState(false)
  const t = translations[lang]

  // Each language is its own page
  const setLang = (next) => {
    if (next !== lang) window.location.assign(pagePath(next, page))
  }

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
    document.title = pageMeta(lang, page).title
  }, [lang, page, t.dir])

  return (
    <LangContext.Provider value={{ lang, setLang, t, page, home }}>
      <MotionConfig reducedMotion={still ? 'always' : 'user'}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          {t.a11y.skip}
        </a>
        <Navbar />
        <main id="main">
          {page === 'home' ? (
            <>
              <Hero />
              <Promises />
              <Services />
              <AISolutions />
              <Portfolio />
              <Process />
              <About />
              <FAQ />
              <Contact />
            </>
          ) : (
            <LegalPage page={page} />
          )}
        </main>
        <Footer />
        <WhatsAppButton />
        <AccessibilityMenu onStillChange={setStill} />
      </MotionConfig>
    </LangContext.Provider>
  )
}

export default App
