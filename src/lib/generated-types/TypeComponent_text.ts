import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeComponent_textFields {
  title?: Contentful.EntryFields.Symbol;
  text: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeComponent_text = Contentful.Entry<TypeComponent_textFields>;
