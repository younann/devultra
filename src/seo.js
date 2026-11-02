// Per-language URLs, metadata and structured data
import { legal } from './legal'

export const SITE = 'https://devultra.net'
export const LANGS = ['he', 'en', 'ar']
export const DEFAULT_LANG = 'he'
export const PATHS = { he: '/', en: '/en/', ar: '/ar/' }
export const PAGES = ['home', 'accessibility', 'privacy']

export function pagePath(lang, page = 'home') {
  return PATHS[lang] + (page === 'home' ? '' : `${page}/`)
}

export function langFromPath(pathname) {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/ar')) return 'ar'
  return DEFAULT_LANG
}

export function pageFromPath(pathname) {
  return PAGES.find((p) => p !== 'home' && pathname.includes(`/${p}`)) || 'home'
}

export const META = {
  he: {
    dir: 'rtl',
    locale: 'he_IL',
    title: 'בניית אתרים, אפליקציות וצ׳אטבוט AI לעסקים | DevUltra',
    description: 'בניית אתרים, חנויות אינטרנטיות, אפליקציות וצ׳אטבוטים AI לעסקים בישראל. מחיר קבוע בכתב, עדכון שבועי, ליווי בעברית, ערבית ואנגלית.'
  },
  en: {
    dir: 'ltr',
    locale: 'en_IL',
    title: 'Websites, Apps & AI Assistants for Israeli Businesses | DevUltra',
    description: 'DevUltra builds websites, online stores, apps and AI assistants for Israeli businesses. Fixed written price, weekly previews, support in Hebrew, Arabic and English.'
  },
  ar: {
    dir: 'rtl',
    locale: 'ar_IL',
    title: 'تصميم مواقع وتطبيقات وبوت واتساب ذكي للمصالح | DevUltra',
    description: 'تصميم مواقع ومتاجر إلكترونية وتطوير تطبيقات ومساعدين أذكياء للمصالح في البلاد. سعر ثابت مكتوب، متابعة أسبوعية، ودعم بالعربية والعبرية والإنجليزية.'
  }
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function jsonLd(lang) {
  const url = SITE + PATHS[lang]
  const israel = { '@type': 'Country', name: 'Israel' }
  const service = (name, serviceType, description) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, serviceType, description, areaServed: israel }
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': SITE + '/#business',
        name: 'DevUltra',
        url: SITE + '/',
        logo: { '@type': 'ImageObject', url: SITE + '/brand/icon-512.png', width: 512, height: 512 },
        image: SITE + '/brand/og-image.png',
        description: 'Websites, web and mobile apps, UI/UX design, hosting and care, and practical AI solutions for Israeli businesses, led by a single senior developer. Available in Hebrew, Arabic and English.',
        telephone: '+972506598192',
        email: 'younan.n@gmail.com',
        areaServed: israel,
        knowsLanguage: ['he', 'ar', 'en'],
        founder: { '@id': SITE + '/#founder' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+972506598192',
          email: 'younan.n@gmail.com',
          areaServed: 'IL',
          availableLanguage: ['he', 'ar', 'en']
        },
        sameAs: ['https://www.instagram.com/dev.ultra.26/'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'DevUltra services',
          itemListElement: [
            service('Websites and online stores', 'Web development', 'Fast, multilingual websites and online stores built to turn visitors into calls, orders and bookings.'),
            service('Web and mobile apps', 'App development', 'Customer portals, dashboards and apps for iOS and Android.'),
            service('UI/UX design', 'UI/UX design', 'Clear interfaces customers understand on the first try.'),
            service('AI assistants and automation', 'AI chatbot development', 'AI assistants that answer customers 24/7 on WhatsApp or the website, book appointments, follow up on leads and handle documents, in Hebrew, Arabic and English.'),
            service('Hosting and ongoing care', 'Web hosting and maintenance', 'Secure hosting, backups, updates and monitoring.')
          ]
        }
      },
      {
        '@type': 'Person',
        '@id': SITE + '/#founder',
        name: 'Younan Nwesre',
        jobTitle: 'Founder and Software Engineer',
        worksFor: { '@id': SITE + '/#business' },
        knowsLanguage: ['he', 'ar', 'en']
      },
      {
        '@type': 'WebSite',
        '@id': SITE + '/#website',
        url: SITE + '/',
        name: 'DevUltra',
        inLanguage: ['he', 'en', 'ar'],
        publisher: { '@id': SITE + '/#business' }
      },
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: META[lang].title,
        description: META[lang].description,
        isPartOf: { '@id': SITE + '/#website' },
        about: { '@id': SITE + '/#business' },
        inLanguage: lang
      }
    ]
  }
}

export function pageMeta(lang, page = 'home') {
  if (page === 'home') return META[lang]
  const l = legal[page][lang]
  return { ...META[lang], title: `${l.title} | DevUltra`, description: l.description }
}

// Head tags injected at build time
export function headTags(lang, page = 'home') {
  const m = pageMeta(lang, page)
  const url = SITE + pagePath(lang, page)
  const og = SITE + '/brand/og-image.png'
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE + pagePath(l, page)}">`)
  alternates.push(`<link rel="alternate" hreflang="x-default" href="${SITE + pagePath(DEFAULT_LANG, page)}">`)
  const otherLocales = LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${META[l].locale}">`)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<link rel="canonical" href="${url}">`,
    ...alternates,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:image" content="${og}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:locale" content="${m.locale}">`,
    ...otherLocales,
    `<meta property="og:site_name" content="DevUltra">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${og}">`,
    page === 'home' ? `<script type="application/ld+json">${JSON.stringify(jsonLd(lang)).replace(/</g, '\\u003c')}</script>` : ''
  ].filter(Boolean).join('\n    ')
}
