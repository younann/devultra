import React, { useContext } from 'react'
import { LangContext } from '../App'

const Footer = () => {
  const { t } = useContext(LangContext)
  return (
    <footer style={{ padding: '80px 5%', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>DEVULTRA<span className="text-gradient">.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>{t.footer.desc}</p>
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <h4 style={{ marginBottom: '15px' }}>{t.footer.social}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#" style={linkStyle}>Twitter/X</a>
              <a href="#" style={linkStyle}>LinkedIn</a>
              <a href="#" style={linkStyle}>Instagram</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>{t.footer.links}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" style={linkStyle}>{t.nav.services}</a>
              <a href="#portfolio" style={linkStyle}>{t.nav.portfolio}</a>
              <a href="#contact" style={linkStyle}>{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '60px auto 0', paddingTop: '30px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <p>&copy; 2026 DevUltra Agency. {t.footer.rights}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  )
}

const linkStyle = { color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }

export default Footer
