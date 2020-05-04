import * as Contentful from 'contentful';
import { TypeComponent_textFields } from './TypeComponent_text';
import { TypeComponent_videoFields } from './TypeComponent_video';
import { TypePageFields } from './TypePage';

export interface TypePage_help_center_articleFields {
  name: Contentful.EntryFields.Symbol;
  headline: Contentful.EntryFields.Symbol;
  body: Contentful.Entry<TypeComponent_textFields | TypeComponent_videoFields>[];
  relatedPages?: Contentful.Entry<TypePageFields>[];
  teaserImage?: Contentful.Asset;
}

export type TypePage_help_center_article = Contentful.Entry<TypePage_help_center_articleFields>;
