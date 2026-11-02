import React, { useContext } from 'react'
import { LangContext } from '../App'
import { legal, legalContact, contactLabels, LEGAL_UPDATED } from '../legal'

function ContactCard({ lang }) {
  const l = contactLabels[lang]
  return (
    <dl className="my-5 grid gap-2 rounded-2xl border border-line bg-surface-2 p-5 text-[0.95rem] sm:grid-cols-[auto_1fr] sm:gap-x-6">
      <dt className="text-ink-3">{l.name}</dt>
      <dd className="font-medium">{l.person}</dd>
      <dt className="text-ink-3">{l.phone}</dt>
      <dd><a href="tel:+972506598192" dir="ltr" className="font-medium underline underline-offset-4">{legalContact.phone}</a></dd>
      <dt className="text-ink-3">{l.email}</dt>
      <dd><a href={`mailto:${legalContact.email}`} dir="ltr" className="font-medium underline underline-offset-4">{legalContact.email}</a></dd>
    </dl>
  )
}

export default function LegalPage({ page }) {
  const { lang } = useContext(LangContext)
  const doc = legal[page][lang]

  return (
    <>
      <section className="night aurora">
        <div className="mx-auto max-w-3xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-ink-2">
            {doc.updatedLabel}: <time dateTime="2026-11-02">{LEGAL_UPDATED[lang]}</time>
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 leading-relaxed sm:px-6 lg:px-8">
        {doc.sections.map((s, i) => (
          <section key={i} className="mb-10">
            {s.h && <h2 className="mb-3 text-2xl font-semibold">{s.h}</h2>}
            {s.p?.map((t, j) => <p key={j} className="mb-3 text-ink-2">{t}</p>)}
            {s.list && (
              <ul className="mb-3 list-disc space-y-2 ps-6 text-ink-2">
                {s.list.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            )}
            {s.contact && <ContactCard lang={lang} />}
            {s.after?.map((t, j) => <p key={j} className="mb-3 text-ink-2">{t}</p>)}
          </section>
        ))}
      </article>
    </>
  )
}
