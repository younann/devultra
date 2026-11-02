import React, { useContext } from 'react'
import { MapPin, Translate, Clock } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

const icons = [MapPin, Translate, Clock]

export default function About() {
  const { t } = useContext(LangContext)

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* TODO: replace with a real founder photo, 1000x1250 */}
        <Reveal className="lg:col-span-5">
          <div className="night aurora relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[20px] lg:max-w-none">
            <img
              src="/brand/mark.png"
              alt="DevUltra logo mark"
              width="512"
              height="512"
              loading="lazy"
              className="absolute inset-0 m-auto w-1/2 drop-shadow-[0_20px_50px_rgb(80_60_255/0.45)]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{t.about.title}</h2>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-2">{t.about.body}</p>
          <ul className="mt-10 space-y-4">
            {t.about.facts.map((f, i) => {
              const Icon = icons[i]
              return (
                <li key={f} className="flex items-center gap-3">
                  <span className="bg-grad grid size-9 place-items-center rounded-full text-white">
                    <Icon size={18} />
                  </span>
                  <span className="font-medium">{f}</span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
