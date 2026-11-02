import React, { useContext, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Sparkle, CalendarCheck, ArrowCounterClockwise, Checks } from '@phosphor-icons/react'
import { LangContext } from '../App'

// Timeline: [event, delay before it in ms]
const SCRIPT = [
  ['m0', 700],
  ['typing', 500],
  ['m1', 1300],
  ['m2', 1400],
  ['typing', 500],
  ['m3', 1500],
  ['event', 600]
]

const ease = [0.23, 1, 0.32, 1]

export default function ChatDemo() {
  const { t, lang } = useContext(LangContext)
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? SCRIPT.length : 0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (reduce) { setStep(SCRIPT.length); return }
    setStep(0)
    const timers = []
    let total = 0
    SCRIPT.forEach((_, i) => {
      total += SCRIPT[i][1]
      timers.push(setTimeout(() => setStep(i + 1), total))
    })
    return () => timers.forEach(clearTimeout)
  }, [run, reduce, lang])

  const replay = useCallback(() => setRun((r) => r + 1), [])

  const played = SCRIPT.slice(0, step).map((s) => s[0])
  const visible = played.filter((e) => e.startsWith('m')).map((e) => Number(e.slice(1)))
  const typing = played[played.length - 1] === 'typing'
  const showEvent = played.includes('event')
  const done = step >= SCRIPT.length

  return (
    <div className="relative">
      <div className="card overflow-hidden shadow-[var(--shadow)]">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-accent text-accent-ink">
              <Sparkle size={18} weight="fill" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{t.chat.name}</p>
              <p className="text-xs text-ink-3">{t.chat.status}</p>
            </div>
          </div>
          <button
            onClick={replay}
            disabled={!done}
            aria-label={t.chat.replay}
            className="btn btn-sm btn-secondary !h-8 !px-3 text-xs disabled:opacity-0 transition-opacity"
          >
            <ArrowCounterClockwise size={14} />
            {t.chat.replay}
          </button>
        </div>

        <div className="flex h-[21rem] flex-col justify-end gap-2.5 bg-bg/60 px-4 pb-12 pt-5 sm:px-5" aria-live="polite">
          <AnimatePresence initial={false}>
            {visible.map((i) => {
              const m = t.chat.messages[i]
              const mine = m.from === 'user'
              return (
                <motion.div
                  key={`${run}-${i}`}
                  initial={{ opacity: 0, transform: 'translateY(8px) scale(0.98)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
                  transition={{ duration: 0.35, ease }}
                  style={{ transformOrigin: mine ? 'bottom right' : 'bottom left' }}
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-snug ${
                    mine
                      ? 'self-end rounded-ee-md bg-accent text-accent-ink'
                      : 'self-start rounded-es-md border border-line bg-surface text-ink'
                  }`}
                >
                  {m.text}
                  {mine && <Checks size={14} className="ms-1.5 inline opacity-70" aria-hidden />}
                </motion.div>
              )
            })}
            {typing && (
              <motion.div
                key={`typing-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="flex gap-1 self-start rounded-2xl rounded-es-md border border-line bg-surface px-4 py-3.5"
                aria-hidden
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="size-1.5 rounded-full bg-ink-3"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showEvent && (
          <motion.div
            key={`event-${run}`}
            initial={{ opacity: 0, transform: 'translateY(10px) scale(0.96)' }}
            animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="card absolute -bottom-6 end-4 flex items-center gap-3 px-4 py-3 shadow-[var(--shadow)] sm:-end-6"
          >
            <div className="grid size-8 place-items-center rounded-lg bg-accent-soft text-accent">
              <CalendarCheck size={18} weight="bold" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{t.chat.event}</p>
              <p className="text-xs text-ink-3" dir="ltr">17:15</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
