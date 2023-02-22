// import LocalClientImpl from './localClient';
import YoutubeClientImpl from './youtubeClient';
import YoutubeService from './youtubeService';

export * from './cacheKeys';

const client = new YoutubeClientImpl();
// const fakeClient = new LocalClientImpl();
export const youtubeService = new YoutubeService(client);
