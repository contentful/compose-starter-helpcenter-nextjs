import * as Contentful from 'contentful';

export interface TypeComponent_sectionFields {
  name: Contentful.EntryFields.Symbol;
  columns?: Contentful.Entry<Record<string, any>>[];
}

export type TypeComponent_section = Contentful.Entry<TypeComponent_sectionFields>;
