// Writes a static HTML page per language, plus the sitemap
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrDir = path.resolve('dist-ssr')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, headTags, LANGS, PATHS, META, SITE } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

for (const lang of LANGS) {
  const html = template
    .replace('<html lang="he" dir="rtl">', `<html lang="${lang}" dir="${META[lang].dir}">`)
    .replace('<!--seo-head-->', headTags(lang))
    .replace('<!--app-html-->', render(lang))
  const out = path.join(dist, PATHS[lang], 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`prerendered ${PATHS[lang]} (${lang})`)
}

const today = new Date().toISOString().slice(0, 10)
const alternates = [
  ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + PATHS[l]}"/>`),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`
].join('\n')
const urls = LANGS.map((l) => `  <url>
    <loc>${SITE + PATHS[l]}</loc>
${alternates}
    <lastmod>${today}</lastmod>
  </url>`).join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`)
console.log('wrote sitemap.xml')

fs.rmSync(ssrDir, { recursive: true, force: true })
