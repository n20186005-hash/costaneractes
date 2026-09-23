// Central SEO site-name constants.
// Format: "景点名称 + 城市 + 旅游指南" (attraction + city + visitor guide).
export const SITE_NAME_ES = 'Costanera Corrientes, Corrientes — Guía de visita';
export const SITE_NAME_EN = 'Costanera Corrientes, Corrientes — Visitor Guide';

export function siteName(lang: 'es' | 'en'): string {
  return lang === 'es' ? SITE_NAME_ES : SITE_NAME_EN;
}
