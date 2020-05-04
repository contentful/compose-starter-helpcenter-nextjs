import get from 'lodash/get';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { ComponentContentTypes } from 'lib/constants';

const isTextNode = (node: unknown) => {
  return get(node, 'sys.contentType.sys.id') == ComponentContentTypes.Text;
};

export const getSummary = (content: unknown[] = []): string => {
  const text = content
    .filter(isTextNode)
    .map((node) => documentToPlainTextString(get(node, 'fields.text')))
    .join(' ');

  return truncate(text, { length: 70 });
};
