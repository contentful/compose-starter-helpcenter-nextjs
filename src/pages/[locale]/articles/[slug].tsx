/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { isPreviewEnabled } from 'lib/preview';
import { withLocale } from 'lib/translations';
import { PageLink } from 'components/page-link';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { getPage, getPagesOfType } from 'lib/api';
import { RelatedPages } from 'components/RelatedPages';
import { MobileNavigation } from 'components/mobile-navigation';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypePage, TypePage_help_center_article } from 'lib/types';

const NoBodyAlert = () => {
  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <span className="font-bold block">Oops!</span>
      <span>Looks like the article content is missing, please add one and try again.</span>
    </div>
  );
};

const OtherPagesSidebar = ({ pages }: { pages: Array<TypePage> }) => {
  return (
    <ul className="list-reset text-sm">
      {pages.map((page) => (
        <PageLink key={page.fields.slug} page={page} />
      ))}
    </ul>
  );
};

type ArticleProps = {
  page: TypePage;
  otherPages: Array<TypePage>;
};

export default function Article({ page, otherPages }: ArticleProps) {
  const router = useRouter();
  const article = page?.fields.content as TypePage_help_center_article;

  if (!router.isFallback && !article) {
    return <ErrorPage statusCode={404} />;
  }

  const { body = [], relatedPages = [] } = article?.fields || {};

  return (
    <>
      <PageHead page={page} />
      <div className="container w-full flex flex-wrap mx-auto max-w-screen-xl p-8 pb-16 lg:pb-24">
        <div className="w-full lg:w-1/5 px-4 lg:px-0 py-8 text-xl text-gray-800 leading-normal">
          <p className="text-sm font-medium py-2 lg:px-5 lg:pb-4 text-gray-700 tracking-wide uppercase">
            Help center
          </p>
          <MobileNavigation pages={otherPages} />
          <div
            className="w-full inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent"
            style={{ top: '5em' }}>
            <OtherPagesSidebar pages={otherPages} />
          </div>
        </div>

        <div className="w-full lg:w-4/5 py-8 px-4 lg:px-8 lg:mt-0 leading-normal">
          <div className="prose lg:px-8 max-w-full break-words">
            <h1>{page.fields.title}</h1>
            {body.length > 0 ? <BlockRenderer block={body} /> : <NoBodyAlert />}
          </div>

          {relatedPages.length > 0 ? <RelatedPages pages={relatedPages} /> : null}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withLocale(async (locale, { params, query }) => {
  const slug = String(params.slug);
  const preview = isPreviewEnabled(query);
  const pageContentType = PageContentTypes.HelpDeskArticle;
  const [page, otherPages] = await Promise.all([
    getPage({ slug, preview, locale, pageContentType }),
    getPagesOfType({ preview, locale, pageContentType }),
  ]);

  return {
    props: { page, otherPages },
  };
});
