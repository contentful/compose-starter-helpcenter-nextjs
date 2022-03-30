/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

import { getSummary } from 'lib/rich-text';
import { TypePage, TypePage_help_center_article } from 'lib/types';
import { Link } from 'components/link';

type HelpCenterArticleProps = TypePage_help_center_article & {
  parent: TypePage;
};

export const HelpCenterArticle = (props) => {
  const { fields }: HelpCenterArticleProps = props;
  const summary = getSummary(fields.body);

  return (
    // A modified version of:
    // https://github.com/mertJF/tailblocks/blob/master/src/blocks/blog/light/a.js
    <Link page={props}>
      <a className="p-4 max-w-sm md:w-1/3 block">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 break-word">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-600 mb-1">
              ARTICLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">{fields.title}</h1>
            <p className="leading-relaxed">{summary}</p>

            <div className="text-blue-600 inline-flex items-center pt-3 md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
