import stringify from 'fast-safe-stringify';

import { TypePage } from './types';

export const parsePage = (page: unknown): TypePage => {
  // Kill circular references
  return JSON.parse(stringify(page)) as TypePage;
};
