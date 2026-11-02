import React, { useContext, useState } from 'react'
import { Plus } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

export default function FAQ() {
  const { t } = useContext(LangContext)
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h2" className="text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {t.faq.title}
        </Reveal>

        <Reveal delay={0.05} className="mt-14 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="rounded-2xl border border-line bg-surface">
                <h3>
                  <button
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-start text-base font-semibold sm:px-6"
                  >
                    {item.q}
                    <Plus
                      size={18}
                      weight="bold"
                      className="shrink-0 text-ink-3 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                    />
                  </button>
                </h3>
                <div className="accordion" data-open={isOpen}>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <p className="px-5 pb-5 leading-relaxed text-ink-2 sm:px-6">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
