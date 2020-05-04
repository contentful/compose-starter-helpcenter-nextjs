/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { TypeComponent_image } from 'lib/types';

const styles = {
  image: {
    margin: 0,
  },
};

export function Image({ fields }: TypeComponent_image) {
  const { title, image } = fields;

  return (
    <div className="flex flex-col w-full lg:mb-12 mt-8">
      <img className="w-full" style={styles.image} src={`${image.fields.file.url}?w=960`} />
      <span className="py-4 text-gray-700 text-center">{title}</span>
    </div>
  );
}
