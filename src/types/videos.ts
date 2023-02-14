interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface DetailedThumbnails extends Thumbnails {
  standard: Thumbnail;
  maxres: Thumbnail;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface RelatedSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: DetailedThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface VideoSnippet extends Snippet {
  thumbnails: DetailedThumbnails;
  tags: string[];
  categoryId: string;
  localized: Localized;
  defaultAudioLanguage: string;
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

interface Localized {
  title: string;
  description: string;
}

interface Id {
  kind: string;
  videoId: string;
}

interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
}

interface Channeltem {
  kind: string;
  etag: string;
  id: string;
  snippet: ChannelSnippet;
}
interface RelatedItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: RelatedSnippet;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Video {
  id: string;
  kind: string;
  etag: string;
  snippet: Snippet;
}

export interface PopularListResponse {
  kind: string;
  etag: string;
  items: VideoItem[];
}

export interface ChannelResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Channeltem[];
}

export interface RelatedListResponse {
  kind: string;
  etag: string;
  items: RelatedItem[];
}
