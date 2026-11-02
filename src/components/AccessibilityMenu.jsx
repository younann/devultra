import React, { useContext, useEffect, useRef, useState } from 'react'
import { PersonArmsSpread, X, TextAa, CircleHalf, LinkSimple, Pause, TextT, ArrowCounterClockwise } from '@phosphor-icons/react'
import { LangContext } from '../App'
import { pagePath } from '../seo'

const KEY = 'a11y-prefs'
const SIZES = [100, 112.5, 125, 150]
const DEFAULTS = { size: 0, contrast: false, links: false, still: false, font: false }

// Saved settings only affect the closed panel, so no hydration mismatch
function load() {
  if (typeof window === 'undefined') return DEFAULTS
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') } } catch { return DEFAULTS }
}

export default function AccessibilityMenu({ onStillChange }) {
  const { t, lang } = useContext(LangContext)
  const m = t.a11y.menu
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(load)
  const btnRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = prefs.size ? `${SIZES[prefs.size]}%` : ''
    root.classList.toggle('a11y-contrast', prefs.contrast)
    root.classList.toggle('a11y-links', prefs.links)
    root.classList.toggle('a11y-still', prefs.still)
    root.classList.toggle('a11y-font', prefs.font)
    onStillChange(prefs.still)
    try { localStorage.setItem(KEY, JSON.stringify(prefs)) } catch { /* storage unavailable */ }
  }, [prefs, onStillChange])

  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector('button')?.focus()
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() } }
    const onDown = (e) => {
      if (!panelRef.current?.contains(e.target) && !btnRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown) }
  }, [open])

  const toggle = (k) => setPrefs((p) => ({ ...p, [k]: !p[k] }))
  const setSize = (d) => setPrefs((p) => ({ ...p, size: Math.min(SIZES.length - 1, Math.max(0, p.size + d)) }))

  const switches = [
    { k: 'contrast', label: m.contrast, Icon: CircleHalf },
    { k: 'links', label: m.links, Icon: LinkSimple },
    { k: 'still', label: m.still, Icon: Pause },
    { k: 'font', label: m.font, Icon: TextT }
  ]

  return (
    <div className="fixed bottom-5 start-5 z-40 sm:bottom-6 sm:start-6">
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-labelledby="a11y-title"
          className="card absolute bottom-[4.25rem] start-0 w-[min(19rem,calc(100vw-2.5rem))] p-4 shadow-[var(--shadow)]"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 id="a11y-title" className="text-base font-semibold">{m.title}</h2>
            <button type="button" onClick={() => { setOpen(false); btnRef.current?.focus() }} aria-label={m.close} className="btn btn-sm btn-secondary !px-0 size-11">
              <X size={18} />
            </button>
          </div>

          <div className="mb-2 flex items-center justify-between gap-2 rounded-xl border border-line p-2 ps-3">
            <span className="flex items-center gap-2 text-sm font-medium"><TextAa size={18} />{m.size}</span>
            <span className="flex items-center gap-1">
              <button type="button" onClick={() => setSize(-1)} disabled={prefs.size === 0} aria-label={m.smaller} className="btn btn-sm btn-secondary !px-0 size-11 disabled:opacity-40">A-</button>
              <span className="w-12 text-center text-sm tabular-nums" aria-live="polite">{SIZES[prefs.size]}%</span>
              <button type="button" onClick={() => setSize(1)} disabled={prefs.size === SIZES.length - 1} aria-label={m.larger} className="btn btn-sm btn-secondary !px-0 size-11 disabled:opacity-40">A+</button>
            </span>
          </div>

          <div className="grid gap-2">
            {switches.map(({ k, label, Icon }) => (
              <button
                key={k}
                type="button"
                aria-pressed={prefs[k]}
                onClick={() => toggle(k)}
                className={`flex min-h-11 items-center gap-2 rounded-xl border px-3 text-start text-sm font-medium transition-colors ${
                  prefs[k] ? 'border-[#1d4ed8] bg-[#1d4ed8] text-white' : 'border-line hover:bg-surface-2'
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <button type="button" onClick={() => setPrefs(DEFAULTS)} className="btn btn-sm btn-secondary gap-1.5">
              <ArrowCounterClockwise size={16} />
              {m.reset}
            </button>
            <a href={pagePath(lang, 'accessibility')} className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">
              {t.a11y.statement}
            </a>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={m.open}
        className="grid size-14 place-items-center rounded-full bg-[#1d4ed8] text-white shadow-[0_10px_30px_rgb(29_78_216/0.4)] transition-transform hover:scale-105"
      >
        <PersonArmsSpread size={30} weight="bold" />
      </button>
    </div>
  )
}
