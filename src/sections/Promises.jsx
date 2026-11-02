import React, { useContext } from 'react'
import { CurrencyCircleDollar, Eye, Key, Translate } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { LangContext } from '../App'

const icons = [CurrencyCircleDollar, Eye, Key, Translate]

const LOGOS = [
  ['react', 'React'], ['nextdotjs', 'Next.js'], ['typescript', 'TypeScript'], ['nodedotjs', 'Node.js'],
  ['anthropic', 'Anthropic'], ['n8n', 'n8n'], ['whatsapp', 'WhatsApp'], ['supabase', 'Supabase'],
  ['postgresql', 'PostgreSQL'], ['stripe', 'Stripe'], ['shopify', 'Shopify'], ['vercel', 'Vercel'],
  ['googlecloud', 'Google Cloud'], ['tailwindcss', 'Tailwind CSS'], ['figma', 'Figma']
]

export default function Promises() {
  const { t } = useContext(LangContext)

  return (
    <section aria-label="Our commitments" className="night border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {t.promises.map((p, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={p.title} delay={i * 0.05} className="flex gap-4 py-8 lg:px-6 lg:first:ps-0">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-grad text-white"><Icon size={20} weight="bold" /></span>
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="mt-1 text-sm text-ink-2">{p.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="border-t border-line py-10">
        <p className="mb-7 px-4 text-center text-sm text-ink-3">{t.stack}</p>
        <div className="marquee overflow-hidden" dir="ltr">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <ul key={dup} className="flex shrink-0 items-center gap-14 pe-14" aria-hidden={dup === 1}>
                {LOGOS.map(([slug, name]) => (
                  <li key={slug}>
                    <img
                      src={`/icons/${slug}.svg`}
                      alt={dup === 0 ? name : ''}
                      width="28"
                      height="28"
                      loading="lazy"
                      className="size-7"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
