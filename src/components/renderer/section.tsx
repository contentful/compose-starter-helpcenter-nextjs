/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypeComponent_section } from 'lib/types';

const Column = ({ column }: { column: unknown }) => {
  return <BlockRenderer block={column} />;
};

export function Section(section: TypeComponent_section) {
  const { columns } = section.fields;

  if (!columns) {
    return null;
  }

  return (
    <section className="text-gray-700 body-font">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-row flex-wrap px-6 lg:px-4 mx-auto">
          {columns.map((column, index) => (
            <Column key={index} column={column} />
          ))}
        </div>
      </div>
    </section>
  );
}
