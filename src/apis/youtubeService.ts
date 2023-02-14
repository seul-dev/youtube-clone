import type {
  ChannelResponse,
  PopularListResponse,
  SearchListResponse,
  RelatedListResponse,
} from '@projects/types/videos';
import type { YoutubeClient } from './youtubeClient';

export default class YoutubeService {
  constructor(private apiClient: YoutubeClient) {}

  search = async (keyword?: string) => {
    return keyword ? this.searchBykeyword(keyword) : this.mostPopular();
  };

  channelImageURL = async (id: string) => {
    return this.apiClient
      .channels<ChannelResponse>({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  };

  relatedVideos = async (id: string) => {
    return this.apiClient
      .search<RelatedListResponse>({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  };

  private searchBykeyword = async (keyword: string) => {
    return this.apiClient
      .search<SearchListResponse>({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  };

  private mostPopular = async () => {
    return this.apiClient
      .videos<PopularListResponse>({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  };
}
