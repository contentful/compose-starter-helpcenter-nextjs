import React from 'react';
import { TypePage } from 'lib/types';
import NextLink from 'next/link';
import { useNavigation } from 'lib/useNavigation';

type LinkProps = {
  // one of them needs to be provided, RequireAtLeastOne from type-fest does not work properly
  page?: TypePage;
  path?: string;
  href?: string;

  children: React.ReactNode;
};

export const Link = ({ page, path, href, children }: LinkProps) => {
  const { linkTo, linkToPath } = useNavigation();
  const props = path ? linkToPath(path) : page ? linkTo(page) : { href };

  return <NextLink {...props}>{children}</NextLink>;
};
