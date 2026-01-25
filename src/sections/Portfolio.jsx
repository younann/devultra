import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import ParallaxSection from '../components/ParallaxSection'
import { LangContext } from '../App'

const images = [
  '/projects/calma-by-lamar.png'
]
const offsets = [40]

const ProjectCard = ({ project, index, image, offset }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <ParallaxSection offset={offset} speed={1.5}>
      <motion.div
        className="portfolio-card"
        onClick={handleClick}
        style={{
          position: 'relative',
          borderRadius: 'clamp(20px, 5vw, 40px)',
          overflow: 'hidden',
          height: 'clamp(400px, 60vw, 600px)',
          cursor: 'pointer',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border)'
        }}
      >
        <motion.div
          style={{ height: '70%', overflow: 'hidden', position: 'relative' }}
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src={image}
            alt={project.title}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <motion.div
            variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(0, 206, 209, 0.2) 100%)',
              pointerEvents: 'none'
            }}
          />
        </motion.div>
        <div style={{ padding: 'clamp(20px, 5vw, 40px)', background: 'var(--bg-secondary)' }}>
          <span style={{
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            fontWeight: 800,
            color: 'var(--accent-primary)',
            letterSpacing: '0.2em',
            display: 'block',
            marginBottom: '10px'
          }}>
            {project.category}
          </span>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 900,
            margin: 0
          }}>
            {project.title}
          </h3>
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
        <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 10vw, 100px)' }}>
          <span className="text-gradient" style={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.5em',
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'
          }}>
            {t.portfolio.badge}
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 7vw, 5rem)',
            marginTop: '10px',
            fontWeight: 900
          }}>
            {t.portfolio.title}
          </h2>
        </div>
        <div className="portfolio-grid">
          {t.portfolio.items.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} image={images[i]} offset={offsets[i]} />
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: clamp(30px, 6vw, 80px);
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio
