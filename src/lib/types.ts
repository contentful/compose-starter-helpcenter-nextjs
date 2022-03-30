import { TypePage_help_center_articleFields, TypePage_landingFields } from './generated-types';
import * as Contentful from 'contentful';

export * from './generated-types';
export type TypePage = Contentful.Entry<
  TypePage_help_center_articleFields | TypePage_landingFields
>;
