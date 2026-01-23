import React, { useContext, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MessageSquare, Palette, Code2, TestTube, Rocket } from 'lucide-react'
import { LangContext } from '../App'

const steps = [
  { icon: MessageSquare, color: '#3b82f6' },
  { icon: Palette, color: '#8b5cf6' },
  { icon: Code2, color: '#ec4899' },
  { icon: TestTube, color: '#f59e0b' },
  { icon: Rocket, color: '#10b981' }
]

const ProcessStep = ({ step, index, icon: Icon, color, isLast }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="process-step"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="process-icon"
        style={{
          background: `${color}15`,
          border: `2px solid ${color}30`,
        }}
      >
        <Icon size={24} color={color} />
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
          className="step-number"
          style={{ background: color }}
        >
          {index + 1}
        </motion.div>
      </motion.div>

      <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, marginBottom: '12px', textAlign: 'center' }}>
        {step.title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', textAlign: 'center', lineHeight: 1.6, maxWidth: '200px' }}>
        {step.desc}
      </p>
    </motion.div>
  )
}

const Process = () => {
  const { t } = useContext(LangContext)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="process" ref={containerRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
      <motion.div
        style={{
          y: backgroundY,
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
          opacity: 0.05,
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(40px, 10vw, 80px)', textAlign: 'center' }}
        >
          <span className="text-gradient" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>
            {t.process.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginTop: '16px', fontWeight: 900 }}>
            {t.process.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '20px auto 0', lineHeight: 1.6 }}>
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="process-grid">
          {t.process.steps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} icon={steps[i].icon} color={steps[i].color} isLast={i === t.process.steps.length - 1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px, 10vw, 80px)', padding: 'clamp(25px, 5vw, 40px)', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}
        >
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '24px', fontWeight: 600 }}>
            {t.process.cta.text}
          </p>
          <a href="#contact" className="process-cta-btn">{t.process.cta.button}</a>
        </motion.div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .process-icon {
          width: clamp(60px, 12vw, 80px);
          height: clamp(60px, 12vw, 80px);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
          cursor: pointer;
        }
        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
        }
        .process-cta-btn {
          display: inline-block;
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 18px 40px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 800;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .process-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
        }
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }
        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }
      `}</style>
    </section>
  )
}

export default Process
