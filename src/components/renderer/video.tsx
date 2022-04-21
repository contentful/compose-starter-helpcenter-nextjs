/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import { TypeComponent_video } from 'lib/types';

const styles = {
  container: {
    paddingBottom: '56.25%', // 16/9 ratio
  },
};

export function Video({ fields }: Omit<TypeComponent_video, 'metadata'>) {
  const [isSSR, setIsSSR] = useState(true);
  const { title, youtubeVideoId } = fields;

  // fix for issue with React v18 and react player
  // Hydration failed because the initial UI does not match what was rendered on the server.
  // https://github.com/cookpete/react-player/issues/1428
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (!youtubeVideoId) {
    return null;
  }

  return (
    <div className="flex flex-col w-full lg:mb-12 mt-8">
      <div className="relative w-full h-0 items-center overflow-hidden" style={styles.container}>
        {!isSSR && (
          <ReactPlayer
            style={{ position: 'absolute' }}
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/embed/${youtubeVideoId}`}
          />
        )}
      </div>
      <span className="py-4 text-gray-700 text-center">{title}</span>
    </div>
  );
}
