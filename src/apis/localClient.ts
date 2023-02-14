/* eslint-disable class-methods-use-this */
import axios, { AxiosRequestConfig } from 'axios';
import type { YoutubeClient } from './youtubeClient';

export default class LocalClient implements YoutubeClient {
  async search<T>(config?: AxiosRequestConfig) {
    return axios.get<T>(
      `/data/${config?.params.relatedToVideoId ? 'related' : 'search'}.json`
    );
  }

  async videos<T>() {
    return axios.get<T>(`/data/videos/popular.json`);
  }

  async channels<T>() {
    return axios.get<T>(`data/channel.json`);
  }
}
