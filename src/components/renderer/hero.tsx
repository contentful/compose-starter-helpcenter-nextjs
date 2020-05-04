/* eslint-disable @typescript-eslint/camelcase */
import { Link } from 'components/link';

import { TypeComponent_hero } from 'lib/types';
import { isRichText, renderRichText } from 'lib/rich-text';

export const Hero = ({ fields }: TypeComponent_hero) => {
  const { title, text, ctaText, ctaLink, image } = fields;
  const textComp = isRichText(text) ? renderRichText(text) : text;
  const linkProps = ctaLink ? { page: ctaLink } : { href: '#' };

  return (
    <div className="bg-white mx-auto max-w-screen-xl">
      <div className="px-8 py-20 mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full md:w-3/6 justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{textComp}</div>
          <Link {...linkProps}>
            <a className="w-full md:w-auto bg-blue-600 text-white font-semibold rounded-full px-3 py-2 text-center">
              {ctaText}
            </a>
          </Link>
        </div>
        <div className="w-full md:w-3/6 text-center py-8 md:py-0">
          <img className="w-full px-8 z-50 float-right" src={`${image.fields.file.url}?w=960`} />
        </div>
      </div>
    </div>
  );
};
