import { defaultLocale, findLocale } from './locales';

export const getInitialLocale = () => {
  const previousLocale = localStorage.getItem('locale');
  const browserLocale = navigator.language;
  const browserLanguage = browserLocale.split('-')[0];
  const possibleLocales = [previousLocale, browserLocale, browserLanguage];

  return possibleLocales.find((locale) => findLocale(locale)) ?? defaultLocale;
};
