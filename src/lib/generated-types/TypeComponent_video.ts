import * as Contentful from 'contentful';

export interface TypeComponent_videoFields {
  title?: Contentful.EntryFields.Symbol;
  youtubeVideoId: Contentful.EntryFields.Symbol;
}

export type TypeComponent_video = Contentful.Entry<TypeComponent_videoFields>;
