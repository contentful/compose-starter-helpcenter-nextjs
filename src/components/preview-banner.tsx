import React from 'react';
import Link from 'next/link';

import { disablePreview } from 'lib/preview';
import { useNavigation } from 'lib/useNavigation';

export const PreviewBanner = () => {
  const { currentPath, isPreview, route } = useNavigation();

  if (!isPreview) {
    return null;
  }

  const exitURL = disablePreview(currentPath);

  return (
    <div className="bg-blue-800 text-center py-4 lg:px-4">
      <div
        className="flex w-full flex-col sm:flex-row max-w-screen-xl mx-auto p-2 px-8 text-blue-100"
        role="alert">
        <span className="mr-2 text-left flex-auto">
          {/* https://heroicons.dev/?search=info */}
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-flex information-circle w-5 h-5 mr-2 mb-1">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">Preview mode</span> is turned on. This enables viewing
          unpublished changes.
        </span>
        <Link href={route} as={exitURL}>
          <a className="flex font-semibold mr-3">Turn off</a>
        </Link>
      </div>
    </div>
  );
};
