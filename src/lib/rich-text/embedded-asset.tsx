import React from 'react';
import noop from 'lodash/noop';
import { Image } from 'components/renderer/image';
import { Video } from 'components/renderer/video';
import { NodeRenderer } from '@contentful/rich-text-react-renderer';

export const EmbeddedAsset = (({
  data: {
    target: { sys, fields },
  },
}) => {
  const isVideo = fields.file.contentType.includes('video');
  if (isVideo) {
    return (
      <Video
        sys={sys}
        // Change fields format to what <Image /> expects
        fields={fields as any}
        toPlainObject={noop as any}
        update={noop as any}
      />
    );
  }

  const isImage = fields.file.contentType.includes('image');
  if (isImage) {
    return (
      <Image
        sys={sys}
        // Change fields format to what <Image /> expects
        fields={{
          title: fields.title,
          image: { fields } as any,
        }}
        toPlainObject={noop as any}
        update={noop as any}
      />
    );
  }

  // Ignore all other asset types, e.g. PDFs, other docs etc.
  return null;
}) as NodeRenderer;
