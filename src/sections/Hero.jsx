import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import ChatDemo from '../components/ChatDemo'
import { LangContext } from '../App'

const ease = [0.23, 1, 0.32, 1]
const enter = (delay) => ({
  initial: { opacity: 0, transform: 'translateY(14px)' },
  animate: { opacity: 1, transform: 'translateY(0px)' },
  transition: { duration: 0.7, delay, ease }
})

export default function Hero() {
  const { t } = useContext(LangContext)

  return (
    <section className="night aurora">

      <div className="relative mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.p {...enter(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm font-medium text-ink-2 backdrop-blur">
            <Sparkle size={14} weight="fill" className="text-[#6fd3ff]" />
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.06)}
            className="hero-title max-w-[16ch] text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[4.1rem]"
          >
            {t.hero.titleA}{' '}
            <span className="text-grad">{t.hero.titleEm}</span>
          </motion.h1>
          <motion.p {...enter(0.12)} className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-2">
            {t.hero.sub}
          </motion.p>
          <motion.div {...enter(0.18)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              {t.nav.cta}
              <ArrowRight size={18} weight="bold" className="arrow" />
            </a>
            <a href="#portfolio" className="btn btn-secondary">{t.hero.cta2}</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: 'translateY(24px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <ChatDemo />
          <p className="mx-auto mt-12 max-w-[40ch] text-center text-sm text-ink-3">{t.chat.caption}</p>
        </motion.div>
      </div>
    </section>
  )
}
