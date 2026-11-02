import React, { useContext } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

export default function Portfolio() {
  const { t } = useContext(LangContext)
  const w = t.work
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h2" className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {w.title}
        </Reveal>

        <article className="mt-14">
          <motion.div
            ref={ref}
            style={{ scale }}
            className="overflow-hidden rounded-[20px] border border-line bg-surface-2 p-2 sm:p-3"
          >
            <img
              src="/projects/calma-by-lamar.png"
              alt="Calma by Lamar store: homepage with handmade decor products"
              width="1912"
              height="927"
              loading="lazy"
              className="w-full rounded-[14px]"
            />
          </motion.div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-sm text-ink-3">{w.category}</p>
              <h3 className="mt-1 text-2xl font-semibold sm:text-3xl" dir="ltr" style={{ textAlign: 'start' }}>{w.name}</h3>
              <p className="mt-3 max-w-[42ch] text-ink-2">{w.intro}</p>
            </Reveal>

            <Reveal delay={0.05} className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
              <div>
                <h4 className="text-sm font-semibold">{w.challengeLabel}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{w.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{w.builtLabel}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{w.built}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{w.deliverablesLabel}</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {w.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2">{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </article>
      </div>
    </section>
  )
}
