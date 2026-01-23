import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(() => onComplete?.(), 500)
          }, 300)
          return 100
        }
        return Math.min(prev + increment, 100)
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(30px, 6vw, 40px)'
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                width: 'clamp(90px, 20vw, 120px)',
                height: 'clamp(90px, 20vw, 120px)',
                borderRadius: '50%',
                border: '2px solid transparent',
                borderTopColor: 'var(--accent-primary)',
                borderRightColor: 'var(--accent-secondary)'
              }}
            />

            {/* Pulsing Ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                position: 'absolute',
                width: 'clamp(65px, 15vw, 90px)',
                height: 'clamp(65px, 15vw, 90px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-primary)20, var(--accent-secondary)20)'
              }}
            />

            {/* Logo Text */}
            <motion.div style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', fontWeight: 900, letterSpacing: '-0.02em', zIndex: 1 }}>
              <span style={{ color: 'var(--text-primary)' }}>DEV</span>
              <span className="text-gradient">ULTRA</span>
            </motion.div>
          </motion.div>

          {/* Progress Bar */}
          <div style={{ width: 'clamp(150px, 40vw, 200px)' }}>
            <div style={{ height: '3px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', borderRadius: '10px' }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', marginTop: '16px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-secondary)', fontWeight: 500 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Loading Text */}
          <motion.div style={{ display: 'flex', gap: '8px', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: 'var(--text-secondary)' }}>
            <span>Loading</span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}>.</motion.span>
          </motion.div>

          {/* Background Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0, scale: 0 }}
              animate={{ y: [null, Math.random() * -200], scale: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
