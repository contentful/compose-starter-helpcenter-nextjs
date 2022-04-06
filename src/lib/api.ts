import { createClient } from 'contentful';

import { parsePage } from './pageParsers';
import { Locale } from './translations';

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

type GetPageParams = {
  slug: string;
  locale: Locale;
  pageContentType: string;
  preview?: boolean;
};

const getPageQuery = (params: GetPageParams) => ({
  limit: 1,
  include: 10,
  locale: params.locale,
  'fields.slug': params.slug,
  content_type: params.pageContentType,
});

export async function getPage(params: GetPageParams) {
  const query = getPageQuery(params);
  const { items } = await getClient(params.preview).getEntries(query);
  const page = items[0];

  return page ? parsePage(page) : null;
}

type GetPagesOfTypeParams = {
  locale: Locale;
  pageContentType: string;
  preview?: boolean;
};

export async function getPagesOfType(params: GetPagesOfTypeParams) {
  const { pageContentType, preview, locale } = params;
  const client = getClient(preview);

  const { items: pages } = await client.getEntries({
    limit: 100,
    locale,
    content_type: pageContentType,
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}
