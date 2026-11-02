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
import { translations } from './translations'

export const LangContext = createContext()

const LANGS = ['en', 'he', 'ar']

const descriptions = {
  en: 'DevUltra builds websites, apps and AI assistants for Israeli businesses. Fixed price, weekly previews, support in Hebrew, Arabic and English.',
  he: 'DevUltra בונה אתרים, אפליקציות ועוזרי AI לעסקים בישראל. מחיר קבוע, עדכון שבועי, ליווי בעברית, ערבית ואנגלית.',
  ar: 'DevUltra تبني مواقع وتطبيقات ومساعدين أذكياء للأعمال. سعر ثابت، متابعة أسبوعية، ودعم بالعربية والعبرية والإنجليزية.'
}

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang')
  return LANGS.includes(urlLang) ? urlLang : 'en'
}

function App() {
  const [lang, setLangState] = useState(getInitialLang)
  const t = translations[lang]

  const setLang = (next) => {
    setLangState(next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState({}, '', url)
  }

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[lang])
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
