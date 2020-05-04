import * as Contentful from 'contentful';

export interface TypeSeoFields {
  name: Contentful.EntryFields.Symbol;
  title?: Contentful.EntryFields.Symbol;
  description?: Contentful.EntryFields.Symbol;
  keywords?: Contentful.EntryFields.Symbol[];
  no_index?: Contentful.EntryFields.Boolean;
  no_follow?: Contentful.EntryFields.Boolean;
}

export type TypeSeo = Contentful.Entry<TypeSeoFields>;
