import has from 'lodash/has';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EmbeddedAsset } from './embedded-asset';
import { Hyperlink } from './hyperlink';

export const isRichText = (x: Document | unknown): x is Document => {
  return ['data', 'content', 'nodeType'].every((prop) => has(x, prop));
};

const PlainHyperlink = (props) => <Hyperlink {...props} type="PlainLink" />;
const AssetHyperlink = (props) => <Hyperlink {...props} type="AssetLink" />;

export const renderRichText = (rtd: any) =>
  documentToReactComponents(rtd, {
    renderNode: {
      [INLINES.HYPERLINK]: PlainHyperlink,
      [INLINES.ASSET_HYPERLINK]: AssetHyperlink,
      [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
    },
  });
