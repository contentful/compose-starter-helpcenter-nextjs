/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { BlockTitle } from 'components/block-title';
import { renderRichText } from 'lib/rich-text';
import { TypeComponent_text } from 'lib/types';

export function Text({ fields }: TypeComponent_text) {
  const { title, text } = fields;

  return (
    <>
      {title ? <BlockTitle title={title} /> : null}
      {renderRichText(text as any)}
    </>
  );
}
