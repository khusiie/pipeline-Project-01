import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'hi', 'bn', 'te', 'ta', 'gu', 'ml', 'kn'];
export const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export function getLocaleFromPathname(pathname) {
  const segments = pathname.split('/');
  const locale = segments[1];
  return locales.includes(locale) ? locale : defaultLocale;
}

export function getPathnameWithoutLocale(pathname) {
  const locale = getLocaleFromPathname(pathname);
  return pathname.replace(`/${locale}`, '') || '/';
}