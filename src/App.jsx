import React, { useEffect, useState, createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { translations } from './translations'

// Easy access context for language
export const LangContext = createContext()

function App() {
  const [lang, setLang] = useState('en')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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
      <div className="app-container">
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
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        
        <style>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none; }
          }
          body {
            font-family: var(--font-main);
          }
        `}</style>
      </div>
    </LangContext.Provider>
  )
}

export default App
