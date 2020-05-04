import * as Contentful from 'contentful';

export interface TypeComponent_imageFields {
  title?: Contentful.EntryFields.Symbol;
  image: Contentful.Asset;
}

export type TypeComponent_image = Contentful.Entry<TypeComponent_imageFields>;
