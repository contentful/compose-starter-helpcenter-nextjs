import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypePage_help_center_articleFields } from './TypePage_help_center_article';
import { TypePage_landingFields } from './TypePage_landing';

export interface TypeComponent_heroFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  image: Contentful.Asset;
  ctaText: Contentful.EntryFields.Symbol;
  ctaLink?: Contentful.Entry<TypePage_help_center_articleFields | TypePage_landingFields>;
}

export type TypeComponent_hero = Contentful.Entry<TypeComponent_heroFields>;
