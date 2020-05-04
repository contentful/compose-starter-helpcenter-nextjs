import React from 'react';
import cn from 'classnames';

import { TypePage } from 'lib/types';
import { useNavigation } from 'lib/useNavigation';
import { Link } from 'components/link';

export interface PageLinkProps {
  page: TypePage;
}

export const PageLink = ({ page }: PageLinkProps) => {
  const { isActive } = useNavigation();

  const isActivePage = isActive(page);

  const linkClass = cn(
    'block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent',
    {
      'lg:border-blue-500 lg:hover:border-blue-500': isActivePage,
      'lg:hover:border-gray-500': !isActivePage,
    }
  );

  const textClass = cn('pb-1 md:pb-0 text-sm font-medium', {
    'text-blue-600 font-medium': isActivePage,
  });

  return (
    <li className="py-2 md:my-0 hover:bg-blue-500 lg:hover:bg-transparent">
      <Link page={page}>
        <a className={linkClass}>
          <span className={textClass}>{page.fields.title}</span>
        </a>
      </Link>
    </li>
  );
};
