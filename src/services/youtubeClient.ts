import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

export interface YoutubeClient {
  search: <T>(config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  videos: <T>(config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  channels: <T>(config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}

export default class YoutubeClientImpl implements YoutubeClient {
  protected httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: API_KEY },
    });
  }

  async search<T>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>('search', config);
  }

  async videos<T>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>('videos', config);
  }

  async channels<T>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>('channels', config);
  }
}
