export const CACHE_KEYS = {
  videos: (keyword: string | undefined) => ['videos', keyword],
  videoInfo: (id: string) => ['videoInfo', id],
  related: (id: string) => ['related', id],
};
