import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { LangContext } from '../App'

const Contact = () => {
  const { t } = useContext(LangContext)
  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-gradient" style={{ fontWeight: 700, textTransform: 'uppercase' }}>{t.contact.badge}</span>
          <h2 style={{ fontSize: '3rem', margin: '10px 0 30px' }}>{t.contact.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><Mail size={20} /></div>
              <div><p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.contact.emailLabel}</p><p style={{ fontWeight: 600 }}>hello@devultra.net</p></div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><Phone size={20} /></div>
              <div><p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.contact.callLabel}</p><p style={{ fontWeight: 600 }}>+1 (555) 000-0000</p></div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass" style={{ padding: '40px', borderRadius: '30px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <input type="text" placeholder={t.contact.namePlaceholder} style={inputStyle} />
              <input type="email" placeholder={t.contact.emailPlaceholder} style={inputStyle} />
            </div>
            <select style={inputStyle}>
              <option value="">{t.contact.servicePlaceholder}</option>
              <option value="website">Website</option>
              <option value="landing">Landing Page</option>
              <option value="automation">Automation</option>
            </select>
            <textarea placeholder={t.contact.messagePlaceholder} rows="5" style={inputStyle}></textarea>
            <button className="primary-btn" style={{ width: '100%' }}>{t.contact.submit}</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

const inputStyle = { background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '16px', color: '#fff', fontSize: '1rem', width: '100%', outline: 'none', fontFamily: 'inherit' }

export default Contact
