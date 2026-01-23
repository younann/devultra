import React, { useContext } from 'react'
import { LangContext } from '../App'

const Footer = () => {
  const { t } = useContext(LangContext)

  const linkStyle = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
    transition: 'color 0.3s ease'
  }

  return (
    <footer style={{ padding: 'clamp(50px, 10vw, 80px) 5%', borderTop: '1px solid var(--glass-border)' }}>
      <div className="footer-container">
        <div style={{ maxWidth: '350px' }}>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 800 }}>
            DEVULTRA<span className="text-gradient">.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            {t.footer.desc}
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{t.footer.social}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Twitter/X</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Instagram</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{t.footer.links}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#services" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>{t.nav.services}</a>
              <a href="#portfolio" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>{t.nav.portfolio}</a>
              <a href="#contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DevUltra Agency. {t.footer.rights}</p>
        <p>{t.footer.built}</p>
      </div>

      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
        }
        .footer-links {
          display: flex;
          gap: clamp(30px, 6vw, 60px);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: clamp(40px, 8vw, 60px) auto 0;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          font-size: clamp(0.75rem, 2vw, 0.85rem);
          color: var(--text-secondary);
        }
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
