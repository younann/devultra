// Writes a static HTML page per language, plus the sitemap
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrDir = path.resolve('dist-ssr')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, headTags, LANGS, PAGES, pagePath, META, SITE } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

for (const page of PAGES) {
  for (const lang of LANGS) {
    const html = template
      .replace('<html lang="he" dir="rtl">', `<html lang="${lang}" dir="${META[lang].dir}">`)
      .replace('<!--seo-head-->', headTags(lang, page))
      .replace('<!--app-html-->', render(lang, page))
    const out = path.join(dist, pagePath(lang, page), 'index.html')
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
    console.log(`prerendered ${pagePath(lang, page)}`)
  }
}

const today = new Date().toISOString().slice(0, 10)
const urls = PAGES.flatMap((page) => {
  const alternates = [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + pagePath(l, page)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + pagePath('he', page)}"/>`
  ].join('\n')
  return LANGS.map((l) => `  <url>
    <loc>${SITE + pagePath(l, page)}</loc>
${alternates}
    <lastmod>${today}</lastmod>
  </url>`)
}).join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`)
console.log('wrote sitemap.xml')

fs.rmSync(ssrDir, { recursive: true, force: true })
