import * as Contentful from 'contentful';
import { TypeComponent_imageFields } from './TypeComponent_image';
import { TypeComponent_textFields } from './TypeComponent_text';
import { TypeComponent_videoFields } from './TypeComponent_video';
import { TypeSeoFields } from './TypeSeo';

export interface TypePage_help_center_articleFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  body: Contentful.Entry<
    TypeComponent_imageFields | TypeComponent_textFields | TypeComponent_videoFields
  >[];
  relatedPages?: Contentful.Entry<TypePage_help_center_articleFields>[];
  seo?: Contentful.Entry<TypeSeoFields>;
}

export type TypePage_help_center_article = Contentful.Entry<TypePage_help_center_articleFields>;
