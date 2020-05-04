import React from 'react';

import { TypePage } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type RelatedPagesProps = {
  pages: Array<TypePage>;
};

export function RelatedPages({ pages }: RelatedPagesProps) {
  if (pages.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-full lg:px-8">
        <div className="w-full h-px bg-gray-300 my-10"></div>
      </div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto max-w-screen-xl">
          <div className="w-full lg:px-8 py-2">
            <h2 className="text-lg text-gray-700 tracking-wide font-medium title-font">See also</h2>
          </div>

          <div className="flex flex-row flex-wrap max-w-full lg:px-4 -mx-4 lg:mx-0 justify-center sm:justify-start">
            {pages.map((page, index) => (
              <BlockRenderer key={index} block={page} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
