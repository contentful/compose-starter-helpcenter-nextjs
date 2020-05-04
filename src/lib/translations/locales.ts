import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export type Locale = string;
// cheap trick
export const UnknownLocale = Symbol('unknown-locale');

export const defaultLocale: Locale = 'en-US';

// need to be in sync with space
export const availableLocales: Locale[] = [defaultLocale, 'de-DE'];

// for a potential locale picker
// export const languageNames = {
//   en: 'English',
//   fr: 'français',
//   pl: 'polski'
// }

export function findLocale(current: Locale): Locale | undefined {
  return availableLocales.find((locale) => current === locale);
}

/**
 * Returns UnknownLocale if the provided locale isn't one that can be used
 * @param locale
 */
export const getLocale = (
  locale: string | string[] | undefined
): Locale | typeof UnknownLocale | undefined => {
  if (!locale) {
    return;
  }

  const actualLocale = findLocale(String(locale));

  return actualLocale ?? UnknownLocale;
};

export const withLocale = (
  fn: (
    locale: Locale,
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<Record<string, unknown>>>
) => {
  return (context: GetServerSidePropsContext) => {
    const locale = getLocale(context.params.locale);

    switch (locale) {
      case UnknownLocale:
        context.res.writeHead(302, { Location: '/' }).end();
        break;
      case undefined:
        context.res.statusCode = 404;
        break;
      default:
        return fn(locale, context);
    }
  };
};
