import React, { useContext, useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  ChatCircleText, CalendarBlank, UserPlus, FileText, Sparkle, WhatsappLogo, UserSwitch,
  Clock, CalendarCheck, Funnel, AddressBook, Table, Check
} from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

const TAB_ICONS = [ChatCircleText, CalendarBlank, UserPlus, FileText]
const FLOW_ICONS = [
  [WhatsappLogo, Sparkle, UserSwitch],
  [ChatCircleText, Clock, CalendarCheck],
  [UserPlus, Funnel, AddressBook],
  [FileText, Sparkle, Table]
]
const ease = [0.23, 1, 0.32, 1]

function Flow({ labels, icons }) {
  const reduce = useReducedMotion()
  return (
    <div className="flex items-start justify-between gap-2" dir="ltr">
      {labels.map((label, i) => {
        const Icon = icons[i]
        return (
          <React.Fragment key={label}>
            <div className="flex w-24 flex-col items-center gap-2.5 text-center sm:w-28">
              <div
                className={`grid size-14 place-items-center rounded-2xl ${
                  i === 1 ? 'bg-grad text-white shadow-[0_10px_30px_-8px_rgb(124_92_255/0.7)]' : 'border border-line bg-surface-2 text-ink'
                }`}
              >
                <Icon size={24} />
              </div>
              <span className="text-xs leading-tight text-ink-2">{label}</span>
            </div>
            {i < labels.length - 1 && (
              <div className="relative mt-7 h-px flex-1 bg-line">
                {!reduce && (
                  <motion.span
                    className="absolute inset-0"
                    initial={{ transform: 'translateX(0%)', opacity: 0 }}
                    animate={{ transform: ['translateX(0%)', 'translateX(100%)'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.8, ease: 'linear', repeatDelay: 0.8 }}
                  >
                    <span className="absolute -top-[3px] -ms-[3px] block size-[7px] rounded-full bg-[#6fd3ff] shadow-[0_0_10px_#6fd3ff]" />
                  </motion.span>
                )}
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default function AISolutions() {
  const { t } = useContext(LangContext)
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const tab = t.ai.tabs[active]

  const onKey = (e) => {
    const n = t.ai.tabs.length
    const fwd = t.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const back = t.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    let next = null
    if (e.key === fwd || e.key === 'ArrowDown') next = (active + 1) % n
    if (e.key === back || e.key === 'ArrowUp') next = (active - 1 + n) % n
    if (next !== null) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section id="ai" className="night aurora py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-[#6fd3ff]">{t.ai.eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{t.ai.title}</h2>
          <p className="mt-5 text-lg text-ink-2">{t.ai.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div
            role="tablist"
            aria-label={t.ai.eyebrow}
            onKeyDown={onKey}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {t.ai.tabs.map((tb, i) => {
              const Icon = TAB_ICONS[i]
              const selected = i === active
              return (
                <button
                  key={tb.label}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`ai-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="ai-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-start text-[0.95rem] font-medium transition-colors duration-200 lg:px-5 lg:py-4 ${
                    selected ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="ai-tab-bg"
                      className="absolute inset-0 rounded-2xl border border-line bg-surface"
                      transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <Icon size={20} className={`relative ${selected ? 'text-accent' : ''}`} />
                  <span className="relative whitespace-nowrap">{tb.label}</span>
                </button>
              )
            })}
          </div>

          <div
            id="ai-panel"
            role="tabpanel"
            aria-labelledby={`ai-tab-${active}`}
            className="relative min-h-[26rem] overflow-hidden rounded-[20px] border border-line bg-surface/70 p-6 backdrop-blur sm:p-10 lg:col-span-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: 'blur(4px)', transform: 'translateY(6px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)', transition: { duration: 0.12 } }}
                transition={{ duration: 0.3, ease }}
                className="flex h-full flex-col"
              >
                <Flow labels={tab.flow} icons={FLOW_ICONS[active]} />
                <p className="mt-10 max-w-[56ch] text-lg leading-relaxed">{tab.desc}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {tab.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-[#6fd3ff]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
