import React, { useContext } from 'react'
import { Robot, Browser, DeviceMobile, PenNib, ShieldCheck, ChatCircleText, CalendarBlank, UserPlus, FileText } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

export default function Services() {
  const { t } = useContext(LangContext)
  const s = t.services.items

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h2" className="max-w-[20ch] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {t.services.title}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* AI: the lead offer, brand gradient */}
          <Reveal className="bg-grad-deep relative overflow-hidden rounded-[20px] p-7 text-white md:col-span-4 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -end-20 size-96 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative flex h-full flex-col">
              <span className="grid size-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Robot size={26} weight="duotone" />
              </span>
              <h3 className="mt-7 text-2xl font-semibold sm:text-3xl">{s.ai.title}</h3>
              <p className="mt-3 max-w-[44ch] text-white/85">{s.ai.desc}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  [ChatCircleText, t.ai.tabs[0].label],
                  [CalendarBlank, t.ai.tabs[1].label],
                  [UserPlus, t.ai.tabs[2].label],
                  [FileText, t.ai.tabs[3].label]
                ].map(([Icon, label]) => (
                  <li key={label}>
                    <a
                      href="#ai"
                      className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm ring-1 ring-white/20 transition-colors hover:bg-white/25"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Websites: real project image */}
          <Reveal delay={0.05} className="card flex flex-col overflow-hidden md:col-span-2">
            <div className="p-7 pb-5">
              <span className="grid size-11 place-items-center rounded-xl bg-[rgb(87_51_236/0.12)] text-accent">
                <Browser size={22} weight="duotone" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.web.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-2">{s.web.desc}</p>
            </div>
            <div className="mt-auto ps-7">
              <img
                src="/projects/calma-by-lamar-800.webp"
                alt="Calma by Lamar store preview: product catalog page"
                width="1912"
                height="927"
                loading="lazy"
                className="h-40 w-full rounded-ss-[14px] border-s border-t border-line object-cover object-left-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="rounded-[20px] bg-[rgb(18_200_255/0.14)] p-7 md:col-span-2">
            <span className="grid size-11 place-items-center rounded-xl bg-[#12c8ff] text-[#04263a]">
              <DeviceMobile size={22} weight="duotone" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{s.apps.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-2">{s.apps.desc}</p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[20px] bg-[rgb(138_44_246/0.12)] p-7 md:col-span-2">
            <span className="grid size-11 place-items-center rounded-xl bg-[#8a2cf6] text-white">
              <PenNib size={22} weight="duotone" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{s.design.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-2">{s.design.desc}</p>
          </Reveal>

          <Reveal delay={0.15} className="night aurora rounded-[20px] p-7 md:col-span-2">
            <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-[#6fd3ff] ring-1 ring-white/15">
              <ShieldCheck size={22} weight="duotone" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{s.care.title}</h3>
            <p className="mt-2 text-[0.95rem] text-ink-2">{s.care.desc}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
