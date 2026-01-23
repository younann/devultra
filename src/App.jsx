import React, { useEffect, useState, createContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'
import { translations } from './translations'

export const LangContext = createContext()

function App() {
  const [lang, setLang] = useState('en')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
  }, [lang, t.dir])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="app-container" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>
        <motion.div
          className="custom-cursor hidden-mobile"
          animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
        />
        <div
          className="custom-cursor-dot hidden-mobile"
          style={{ left: mousePos.x, top: mousePos.y }}
        />

        <Navbar />

        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        <WhatsAppButton />

        <style>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </LangContext.Provider>
  )
}

export default App
