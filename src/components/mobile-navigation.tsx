import React, { useState } from 'react';

import { TypePage } from 'lib/types';
import { useNavigation } from 'lib/useNavigation';
import { Link } from 'components/link';

interface DropdownTriggerProps {
  title: string;
  onClick: React.MouseEventHandler;
}

function DropdownTrigger({ onClick, title }: DropdownTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full justify-between items-center bg-gray-200 border rounded border-gray-200 focus:outline-none text-base appearance-none">
      <span className="py-2 px-3">{title}</span>
      <svg
        className="fill-current h-3 float-right px-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
  );
}

type MobileNavigationProps = {
  pages: Array<TypePage>;
};

export function MobileNavigation({ pages }: MobileNavigationProps) {
  const { isActive } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const links = pages.map((page) => ({
    page,
    title: page.fields.title,
    isActive: isActive(page),
  }));
  const activeLink = links.find(({ isActive }) => isActive === true);

  return (
    <div className="relative block lg:hidden inset-0">
      <DropdownTrigger onClick={() => setIsOpen(!isOpen)} title={activeLink?.title} />
      {isOpen && (
        <div
          className="w-full absolute inset-0 h-64 overflow-x-hidden overflow-y-auto mt-10 rounded border border-gray-400 bg-gray-200 shadow z-20"
          id="menu-content">
          <ul className="list-reset">
            {links.map((link, index) => (
              <li key={index} className="py-2 md:my-0">
                <Link page={link.page}>
                  <a
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent">
                    <span className="pb-1 md:pb-0 text-base text-gray-900">{link.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
