import React, { useEffect } from 'react';
import Head from 'next/head';
import { getInitialLocale } from 'lib/translations/getInitialLocale';

export default function Index() {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
