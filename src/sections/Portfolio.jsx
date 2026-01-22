import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import ParallaxSection from '../components/ParallaxSection'
import { LangContext } from '../App'

const images = [
  'https://images.unsplash.com/photo-1614850523296-e8c041de4392?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop'
]
const offsets = [40, -60, 80]

const ProjectCard = ({ project, index, image, offset }) => {
  return (
    <ParallaxSection offset={offset} speed={1.5}>
      <motion.div
        className="portfolio-item-v2"
        style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', height: '600px', cursor: 'pointer', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}
      >
        <div style={{ height: '70%', overflow: 'hidden' }}>
          <motion.img src={image} alt={project.title} whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '40px', background: 'var(--bg-secondary)' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.2em', display: 'block', marginBottom: '10px' }}>{project.category}</span>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>{project.title}</h3>
        </div>
      </motion.div>
    </ParallaxSection>
  )
}

const Portfolio = () => {
  const { t } = useContext(LangContext)
  return (
    <section id="portfolio" className="section-padding">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="text-gradient" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5em' }}>{t.portfolio.badge}</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginTop: '10px', fontWeight: 900 }}>{t.portfolio.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px' }}>
          {t.portfolio.items.map((project, i) => (
             <ProjectCard key={project.title} project={project} index={i} image={images[i]} offset={offsets[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
