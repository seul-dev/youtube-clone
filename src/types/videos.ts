interface BaseVideo {
  kind: string;
  etag: string;
  id: string | Id;
  snippet: VideoSnippet;
}

interface Id {
  kind: string;
  videoId: string;
}

interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface DetailThumbnails extends Thumbnails {
  standard: Thumbnail;
  maxres: Thumbnail;
}

interface PopularSnippet extends VideoSnippet {
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Localized {
  title: string;
  description: string;
}

interface RelatedSnippet extends VideoSnippet {
  liveBroadcastContent: string;
  publishTime: string;
}

interface ChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export type SearchVideo = BaseVideo & {
  id: Id;
};

export type PopularVideo = BaseVideo & {
  id: string;
  snippet: PopularSnippet;
};

export type RelatedVideo = BaseVideo & {
  id: Id;
  snippet: RelatedSnippet;
};

export type ChannelVideo = BaseVideo & {
  id: string;
  snippet: ChannelSnippet;
};
