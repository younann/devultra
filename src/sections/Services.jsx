import React, { useRef, useContext } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Globe, Zap, Cpu, LifeBuoy } from 'lucide-react'
import { LangContext } from '../App'

const icons = [<Globe size={32} />, <Zap size={32} />, <Cpu size={32} />, <LifeBuoy size={32} />]
const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981']

const ServiceCard = ({ service, index, icon, color }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX: springRotateX, rotateY: springRotateY, scale: springScale, opacity, perspective: 1200, transformStyle: 'preserve-3d' }}
      className="glass service-card"
    >
      <div style={{ transform: 'translateZ(50px)', padding: '40px' }}>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{ width: '64px', height: '64px', borderRadius: '16px', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, marginBottom: '24px', boxShadow: `0 10px 30px ${color}20` }}
        >
          {icon}
        </motion.div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: 800 }}>{service.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
          {service.description || service.desc}
        </p>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%, ${color}10, transparent 70%)`, pointerEvents: 'none', borderRadius: '24px' }} />
    </motion.div>
  )
}

const Services = () => {
  const { t } = useContext(LangContext)
  return (
    <section id="services" className="section-padding" style={{ perspective: '2000px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span className="text-gradient" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em' }}>{t.services.badge}</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '10px', fontWeight: 900 }}>{t.services.title}</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {t.services.items.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} icon={icons[i]} color={colors[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
