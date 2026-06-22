import type { Lang } from '../i18n/translations';

export function getHomePath(lang: Lang): string {
  return lang === 'de' ? '/de/' : '/';
}

export function isHomePage(pathname: string, lang: Lang): boolean {
  const homePath = getHomePath(lang);
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return normalized === homePath;
}

export function resolveNavLinks(
  nav: readonly { href: string; label: string }[],
  lang: Lang,
  onHomePage: boolean,
) {
  if (onHomePage) return nav;

  const homePath = getHomePath(lang);
  return nav.map((link) => ({
    ...link,
    href: link.href.startsWith('#') ? `${homePath}${link.href}` : link.href,
  }));
}

export function resolveHomeHref(lang: Lang, onHomePage: boolean): string {
  return onHomePage ? '#home' : `${getHomePath(lang)}#home`;
}
