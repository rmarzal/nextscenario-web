// URL helpers. The blog listing lives at /blog/ (EN) and /es/blog-es/ (ES),
// but individual posts keep the historical WordPress permalinks: /{slug}/
// for EN and /es/{slug}/ for ES. Keeping those URLs preserves ~15k monthly
// organic clicks already indexed in Google.

export type Lang = 'es' | 'en';

export const DEFAULT_LANG: Lang = 'es';

export const SITE_URL = 'https://nextscenario.com';

export function postUrl(lang: Lang, slug: string): string {
  return lang === 'es' ? `/es/${slug}/` : `/${slug}/`;
}

export function postAbsUrl(lang: Lang, slug: string): string {
  return `${SITE_URL}${postUrl(lang, slug)}`;
}

export function listUrl(lang: Lang): string {
  return lang === 'es' ? '/es/blog-es/' : '/blog/';
}

export function listAbsUrl(lang: Lang): string {
  return `${SITE_URL}${listUrl(lang)}`;
}

/** Demo booking page on the marketing site (.com). */
export function demoUrl(lang: Lang): string {
  return lang === 'es' ? '/es/reservar-demo.html' : '/book-demo.html';
}

/** Free-trial signup on the product app (.es). UTM-tagged so leads
 * from the blog can be distinguished from home / paid traffic.
 * URL shape mirrors the format already in use on the marketing home:
 *   ES → /register?es&utm_source=...&utm_content=spanish
 *   EN → /register?&utm_source=...&utm_content=english   (no lang flag)
 */
export function trialUrl(lang: Lang, campaign = 'blog'): string {
  const utmContent = lang === 'es' ? 'spanish' : 'english';
  const params = new URLSearchParams({
    utm_source: 'landingweb',
    utm_medium: 'button',
    utm_campaign: campaign,
    utm_content: utmContent,
  });
  const prefix = lang === 'es' ? 'es&' : '&';
  return `https://nextscenario.es/register?${prefix}${params.toString()}`;
}

export const UI = {
  es: {
    blogTitle: 'Blog',
    readMore: 'Leer más',
    minRead: 'min de lectura',
    publishedOn: 'Publicado el',
    updatedOn: 'Actualizado el',
    relatedPosts: 'Artículos relacionados',
    backToBlog: 'Volver al blog',
    tableOfContents: 'Índice',
    allTags: 'Todas las etiquetas',
    switchToOther: 'English',
    switchToOtherShort: 'EN',
  },
  en: {
    blogTitle: 'Blog',
    readMore: 'Read more',
    minRead: 'min read',
    publishedOn: 'Published on',
    updatedOn: 'Updated on',
    relatedPosts: 'Related posts',
    backToBlog: 'Back to blog',
    tableOfContents: 'Contents',
    allTags: 'All tags',
    switchToOther: 'Español',
    switchToOtherShort: 'ES',
  },
} as const;

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
