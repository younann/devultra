import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { LangContext } from '../App'

const Contact = () => {
  const { t } = useContext(LangContext)

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '12px',
    padding: 'clamp(14px, 3vw, 18px)',
    color: '#fff',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease'
  }

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <span className="text-gradient" style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>
            {t.contact.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '10px 0 30px' }}>{t.contact.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                width: 'clamp(45px, 8vw, 55px)',
                height: 'clamp(45px, 8vw, 55px)',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div>
                <p style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: 'var(--text-secondary)', marginBottom: '4px' }}>{t.contact.emailLabel}</p>
                <p style={{ fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>younan.n@gmail.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                width: 'clamp(45px, 8vw, 55px)',
                height: 'clamp(45px, 8vw, 55px)',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div>
                <p style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: 'var(--text-secondary)', marginBottom: '4px' }}>{t.contact.callLabel}</p>
                <p style={{ fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>+972 (050) 659-8192</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass contact-form"
          style={{ padding: 'clamp(25px, 5vw, 40px)', borderRadius: '30px' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <select style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">{t.contact.servicePlaceholder}</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="devops">DevOps & Cloud</option>
              <option value="design">UI/UX Design</option>
              <option value="automation">Business Automation</option>
            </select>
            <textarea
              placeholder={t.contact.messagePlaceholder}
              rows="5"
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
            <button type="submit" className="contact-submit-btn">{t.contact.submit}</button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 80px);
          align-items: start;
        }
        .form-row {
          display: flex;
          gap: 20px;
        }
        .contact-submit-btn {
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 18px 40px;
          border-radius: 100px;
          border: none;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        .contact-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
        }
        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
