import React, { useContext } from 'react'
import { InstagramLogo, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { LangContext } from '../App'

export default function Footer() {
  const { t } = useContext(LangContext)
  const links = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.ai, href: '#ai' },
    { name: t.nav.work, href: '#portfolio' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.faq, href: '#faq' }
  ]
  const social = [
    { Icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/dev.ultra.26' },
    { Icon: WhatsappLogo, label: 'WhatsApp', href: 'https://wa.me/972506598192' },
    { Icon: EnvelopeSimple, label: 'Email', href: 'mailto:younan.n@gmail.com' }
  ]

  return (
    <footer className="night aurora">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-xs">
            <img src="/brand/logo-full-light.png" alt="DevUltra" width="176" height="28" className="h-7 w-auto" />
            <p className="mt-4 text-sm text-ink-2">{t.footer.desc}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-2 transition-colors hover:text-ink">{l.name}</a>
            ))}
          </nav>

          <div className="flex gap-2">
            {social.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="btn btn-secondary btn-sm !px-0 size-10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-ink-3">
          &copy; {new Date().getFullYear()} DevUltra. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
