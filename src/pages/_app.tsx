import React from 'react';
import Head from 'next/head';

import 'styles/index.css';
import { PreviewBanner } from 'components/preview-banner';
import { TopNavigation } from 'components/top-navigation';
import App, { AppContext } from 'next/app';
import { getLocale, LocaleContext, UnknownLocale } from 'lib/translations';

function HelpdeskApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;

  return (
    <LocaleContext.Provider value={locale}>
      <div className="flex flex-col bg-white">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
          <meta
            name="description"
            content={`Demo Help Center built using Next.js and Contentful Compose.`}
            key="description"
          />
        </Head>
        <PreviewBanner />
        <div className="w-full flex flex-col relative">
          <TopNavigation />
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

HelpdeskApp.getInitialProps = async (appContext: AppContext) => {
  const { pageProps, ...other } = await App.getInitialProps(appContext);
  const locale = getLocale(appContext.ctx.query.locale);

  switch (locale) {
    case UnknownLocale:
      appContext.ctx.res.writeHead(302, { Location: '/' }).end();
      break;
    case undefined:
      return { pageProps, ...other };
    default:
      return { pageProps: { ...pageProps, locale }, ...other };
  }
};

export default HelpdeskApp;
