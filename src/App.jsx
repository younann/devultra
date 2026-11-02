import React, { useEffect, createContext } from 'react'
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
import { translations } from './translations'
import { META, PATHS } from './seo'

export const LangContext = createContext()

function App({ initialLang }) {
  const lang = initialLang
  const t = translations[lang]

  // Each language is its own page
  const setLang = (next) => {
    if (next !== lang) window.location.assign(PATHS[next])
  }

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
    document.title = META[lang].title
  }, [lang, t.dir])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Promises />
          <Services />
          <AISolutions />
          <Portfolio />
          <Process />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </MotionConfig>
    </LangContext.Provider>
  )
}

export default App
