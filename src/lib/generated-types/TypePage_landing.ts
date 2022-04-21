import * as Contentful from 'contentful';
import { TypeComponent_heroFields } from './TypeComponent_hero';
import { TypeComponent_sectionFields } from './TypeComponent_section';
import { TypeSeoFields } from './TypeSeo';

export interface TypePage_landingFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  hero: Contentful.Entry<TypeComponent_heroFields>;
  sections: Contentful.Entry<TypeComponent_sectionFields>[];
  seo?: Contentful.Entry<TypeSeoFields>;
}

export type TypePage_landing = Contentful.Entry<TypePage_landingFields>;
