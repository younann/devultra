/* eslint-disable react-refresh/only-export-components -- server entry, not hot-reloaded */
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { headTags, LANGS, PAGES, pagePath, META, SITE } from './seo'

export function render(lang, page) {
  return renderToString(
    <React.StrictMode>
      <App initialLang={lang} page={page} />
    </React.StrictMode>
  )
}
