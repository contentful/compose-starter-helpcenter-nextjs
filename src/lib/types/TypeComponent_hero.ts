import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

export interface TypeComponent_heroFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  text?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  image: Contentful.Asset;
  ctaText: Contentful.EntryFields.Symbol;
  ctaLink?: Contentful.Entry<TypePageFields>;
}

export type TypeComponent_hero = Contentful.Entry<TypeComponent_heroFields>;
