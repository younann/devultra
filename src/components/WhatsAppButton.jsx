import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { LangContext } from '../App'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useContext(LangContext)

  const phoneNumber = '972506598192'
  const message = encodeURIComponent(t.whatsapp.defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      style={{ position: 'fixed', bottom: 'clamp(20px, 4vw, 30px)', right: 'clamp(20px, 4vw, 30px)', zIndex: 1000 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="whatsapp-tooltip"
            style={{
              position: 'absolute',
              right: '70px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#fff',
              color: '#1a1a1a',
              padding: '10px 16px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
          >
            {t.whatsapp.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'absolute',
              bottom: 'clamp(65px, 12vw, 80px)',
              right: '0',
              width: 'clamp(280px, 80vw, 320px)',
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ background: '#25D366', padding: 'clamp(15px, 4vw, 20px)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 'clamp(40px, 10vw, 50px)', height: 'clamp(40px, 10vw, 50px)', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, color: '#25D366' }}>D</span>
              </div>
              <div>
                <h4 style={{ color: '#fff', margin: 0, fontSize: 'clamp(1rem, 3vw, 1.1rem)' }}>DevUltra</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, fontSize: 'clamp(0.75rem, 2vw, 0.85rem)' }}>{t.whatsapp.status}</p>
              </div>
            </div>

            <div style={{ padding: 'clamp(15px, 4vw, 20px)', background: '#e5ddd5' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ background: '#fff', padding: '12px 16px', borderRadius: '0 12px 12px 12px', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
              >
                <p style={{ margin: 0, color: '#1a1a1a', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.5 }}>{t.whatsapp.greeting}</p>
                <span style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', color: '#999', display: 'block', marginTop: '4px', textAlign: 'right' }}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </motion.div>
            </div>

            <div style={{ padding: 'clamp(12px, 3vw, 16px)', background: '#fff' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: 'clamp(12px, 3vw, 14px)',
                  background: '#25D366',
                  color: '#fff',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <MessageCircle size={20} />
                {t.whatsapp.startChat}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 'clamp(50px, 12vw, 60px)',
          height: 'clamp(50px, 12vw, 60px)',
          borderRadius: '50%',
          background: isOpen ? '#fff' : '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: isOpen ? '0 4px 20px rgba(37,211,102,0.3)' : '0 4px 30px rgba(37,211,102,0.4)'
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={24} color="#25D366" />
            </motion.div>
          ) : (
            <motion.div key="whatsapp" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#25D366', zIndex: -1 }}
          />
        )}
      </motion.button>

      <style>{`
        @media (max-width: 768px) {
          .whatsapp-tooltip { display: none !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default WhatsAppButton
