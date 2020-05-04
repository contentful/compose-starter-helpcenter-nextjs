/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ReactPlayer from 'react-player';

import { TypeComponent_video } from 'lib/types';

const styles = {
  container: {
    paddingBottom: '56.25%', // 16/9 ratio
  },
};

export function Video({ fields }: TypeComponent_video) {
  const { title, youtubeVideoId } = fields;

  const url = youtubeVideoId ? `https://www.youtube.com/embed/${youtubeVideoId}` : fields.file?.url;

  return (
    <div className="flex flex-col w-full lg:mb-12 mt-8">
      <div className="relative w-full h-0 items-center overflow-hidden" style={styles.container}>
        <ReactPlayer
          style={{ position: 'absolute' }}
          width="100%"
          height="100%"
          controls
          url={url}
        />
      </div>
      <span className="py-4 text-gray-700 text-center">{title}</span>
    </div>
  );
}
