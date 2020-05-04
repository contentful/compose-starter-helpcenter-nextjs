import React from 'react';
import { Link } from 'components/link';

import { Logo } from 'components/logo';
import { SITE_NAME } from 'lib/constants';

export function TopNavigation() {
  return (
    <nav className="sticky w-full z-10 top-0 bg-white">
      <div className="w-full container max-w-screen-xl  mx-auto flex flex-wrap justify-between mt-0 py-8 px-8">
        <Link path="/">
          <a className="text-gray-700 text-lg flex items-center">
            <Logo />
            <span className="h-full w-px mx-4 bg-gray-400"></span>
            {SITE_NAME}
          </a>
        </Link>
      </div>
      <div className="w-full h-px bg-gray-300"></div>
    </nav>
  );
}
