import React, { useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EnvelopeSimple, WhatsappLogo, Phone, CheckCircle, WarningCircle, ArrowRight } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'
import { pagePath } from '../seo'

const EMAIL = 'younan.n@gmail.com'
const PHONE_DISPLAY = '+972 50-659-8192'
const PHONE_RAW = '+972506598192'
const WHATSAPP = '972506598192'

export default function Contact() {
  const { t, lang } = useContext(LangContext)
  const c = t.contact
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mykjwpbj', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const channels = [
    { Icon: WhatsappLogo, label: c.whatsappLabel, value: PHONE_DISPLAY, href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.whatsapp.defaultMessage)}`, external: true },
    { Icon: EnvelopeSimple, label: c.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: Phone, label: c.phoneLabel, value: PHONE_DISPLAY, href: `tel:${PHONE_RAW}` }
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <Reveal className="night aurora rounded-[24px] p-7 sm:p-9 lg:col-span-5">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{c.title}</h2>
          <p className="mt-5 max-w-[40ch] text-lg text-ink-2">{c.sub}</p>

          <ul className="mt-10 space-y-3">
            {channels.map(({ Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white/[0.04] p-4 transition-colors duration-200 hover:bg-white/[0.08]"
                >
                  <span className="bg-grad grid size-11 place-items-center rounded-xl text-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-ink-3">{label}</span>
                    <span className="block truncate font-medium" dir="ltr" style={{ textAlign: 'start' }}>{value}</span>
                  </span>
                  <ArrowRight size={18} className="arrow text-ink-3" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="card p-6 shadow-[var(--shadow)] sm:p-9 lg:col-span-7">
          <AnimatePresence mode="wait" initial={false}>
            {status === 'success' ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, transform: 'scale(0.97)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                role="status"
              >
                <CheckCircle size={52} weight="fill" className="text-accent" />
                <h3 className="mt-5 text-2xl font-semibold">{c.successTitle}</h3>
                <p className="mt-2 max-w-[36ch] text-ink-2">{c.successBody}</p>
                <button onClick={() => setStatus('idle')} className="btn btn-secondary mt-8">{c.sendAnother}</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                onSubmit={onSubmit}
                className="grid gap-5"
              >
                {status === 'error' && (
                  <div role="alert" className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                    <WarningCircle size={20} className="shrink-0" />
                    {c.error}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">{c.nameLabel}</label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder={c.namePlaceholder} className="field" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">{c.emailFieldLabel}</label>
                    <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder={c.emailPlaceholder} className="field" dir="ltr" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="contact-service" className="text-sm font-medium">{c.serviceLabel}</label>
                  <select id="contact-service" name="service" required defaultValue="" className="field cursor-pointer">
                    <option value="" disabled>{c.servicePlaceholder}</option>
                    {Object.entries(c.serviceOptions).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">{c.messageLabel}</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder={c.messagePlaceholder} className="field resize-none" />
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70">
                  {status === 'sending' ? c.sending : c.submit}
                </button>
                <p className="text-xs leading-relaxed text-ink-3">
                  {c.privacyNote}{' '}
                  <a href={pagePath(lang, 'privacy')} className="underline underline-offset-2 hover:text-ink">{c.privacyLink}</a>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
