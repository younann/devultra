import React, { useContext } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Background3D from '../components/Background3D'
import { LangContext } from '../App'

const Hero = () => {
  const { t } = useContext(LangContext)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 500])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const rotateX = useTransform(scrollY, [0, 1000], [0, 15])
  const scale = useTransform(scrollY, [0, 500], [1, 0.8])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 })
  const springY2 = useSpring(y2, { stiffness: 50, damping: 20 })

  return (
    <section 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        padding: '0 5%',
        perspective: '1500px'
      }}
    >
      <Background3D />
      
      <motion.div 
        style={{ 
          y: springY1, 
          rotateX, 
          scale, 
          opacity, 
          textAlign: 'center', 
          zIndex: 10,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          style={{ transform: 'translateZ(100px)' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              display: 'inline-block',
              fontSize: '1rem', 
              fontWeight: 700, 
              letterSpacing: '0.4em', 
              textTransform: 'uppercase',
              color: 'var(--accent-primary)',
              marginBottom: '20px'
            }}
          >
            {t.hero.badge}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              fontSize: 'clamp(3rem, 11vw, 7.5rem)', 
              lineHeight: 0.85, 
              fontWeight: 900,
              marginBottom: '30px',
              letterSpacing: '-0.04em'
            }}
          >
            {t.hero.title1} <br />
            <span className="text-gradient">{t.hero.title2}</span> <br />
            {t.hero.title3}
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ y: springY2, transform: 'translateZ(50px)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.2rem', 
              maxWidth: '700px', 
              margin: '0 auto 50px',
              lineHeight: 1.4
            }}
          >
            {t.hero.desc}
          </motion.p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="primary-btn">{t.hero.cta1}</button>
            <button className="secondary-btn">{t.hero.cta2}</button>
          </div>
        </motion.div>
      </motion.div>

      {/* Orbs etc omitted for brevity but remain in original */}
      <motion.div 
        animate={{ y: [0, -40, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '20%', left: '10%', width: '150px', height: '150px', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', borderRadius: '50%', opacity: 0.15, filter: 'blur(50px)' }}
      />
      <motion.div 
        animate={{ y: [0, 50, 0], rotate: [360, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', bottom: '15%', right: '5%', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', borderRadius: '50%', opacity: 0.15, filter: 'blur(60px)' }}
      />

      <style>{`
        .primary-btn { background: var(--text-primary); color: var(--bg-primary); padding: 18px 40px; border-radius: 100px; border: none; font-weight: 800; font-size: 1.1rem; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .primary-btn:hover { transform: translateY(-5px) scale(1.05); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3); }
        .secondary-btn { background: transparent; color: var(--text-primary); padding: 18px 40px; border-radius: 100px; border: 1px solid var(--glass-border); font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: all 0.3s ease; }
        .secondary-btn:hover { background: var(--glass-bg); border-color: var(--accent-primary); }
      `}</style>
    </section>
  )
}

export default Hero
