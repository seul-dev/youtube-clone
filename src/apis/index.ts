import LocalClientImpl from './localClient';
import YoutubeClientImpl from './youtubeClient';
import YoutubeService from './youtubeService';

const client = new YoutubeClientImpl();
const fakeClient = new LocalClientImpl();
const youtubeService = new YoutubeService(fakeClient);

export default youtubeService;
