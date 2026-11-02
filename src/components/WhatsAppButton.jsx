import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, X, ArrowRight } from '@phosphor-icons/react'
import { LangContext } from '../App'

const WA_GREEN = '#25D366'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const { t } = useContext(LangContext)
  const url = `https://wa.me/972506598192?text=${encodeURIComponent(t.whatsapp.defaultMessage)}`

  return (
    <div className="fixed bottom-5 end-5 z-40 sm:bottom-6 sm:end-6">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="WhatsApp"
            initial={{ opacity: 0, transform: 'translateY(8px) scale(0.96)' }}
            animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
            exit={{ opacity: 0, transform: 'translateY(4px) scale(0.98)', transition: { duration: 0.14 } }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: t.dir === 'rtl' ? 'bottom left' : 'bottom right' }}
            className="card absolute bottom-[4.25rem] end-0 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden shadow-[var(--shadow)]"
          >
            <div className="flex items-center gap-3 border-b border-line p-4">
              <img src="/brand/icon-512.png" alt="" width="40" height="40" className="size-10 rounded-xl" />
              <div className="leading-tight">
                <p className="font-semibold" dir="ltr" style={{ textAlign: 'start' }}>DevUltra</p>
                <p className="text-xs text-ink-3">{t.whatsapp.status}</p>
              </div>
            </div>
            <div className="bg-bg p-4">
              <p className="rounded-2xl rounded-ss-md border border-line bg-surface px-3.5 py-2.5 text-sm leading-relaxed">
                {t.whatsapp.greeting}
              </p>
            </div>
            <div className="p-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-white"
                style={{ background: '#128C4A' }}
              >
                <WhatsappLogo size={20} weight="fill" />
                {t.whatsapp.startChat}
                <ArrowRight size={16} className="arrow" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close WhatsApp chat' : t.whatsapp.tooltip}
        aria-expanded={open}
        title={t.whatsapp.tooltip}
        className="btn !h-14 !w-14 !px-0 text-white shadow-[0_8px_24px_-6px_rgb(37_211_102/0.55)]"
        style={{ background: WA_GREEN }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'x' : 'wa'}
            initial={{ opacity: 0, transform: 'scale(0.8)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            exit={{ opacity: 0, transform: 'scale(0.8)' }}
            transition={{ duration: 0.15 }}
            className="grid place-items-center"
          >
            {open ? <X size={24} weight="bold" /> : <WhatsappLogo size={28} weight="fill" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
