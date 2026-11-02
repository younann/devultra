import React, { useContext } from 'react'
import { PhoneCall, FileText, Monitor, RocketLaunch } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

const icons = [PhoneCall, FileText, Monitor, RocketLaunch]

export default function Process() {
  const { t } = useContext(LangContext)

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h2" className="max-w-[18ch] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {t.process.title}
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <li aria-hidden className="bg-grad absolute inset-x-6 top-6 hidden h-0.5 rounded-full opacity-60 lg:block" />
          {t.process.steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <Reveal as="li" key={step.title} delay={i * 0.07} className="relative">
                <div className="bg-grad relative grid size-12 place-items-center rounded-full text-white ring-4 ring-bg">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-[32ch] text-[0.95rem] leading-relaxed text-ink-2">{step.desc}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
