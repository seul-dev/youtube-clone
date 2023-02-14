import type { Video } from '@projects/types/videos';
import { useLocation } from 'react-router-dom';

type RouteState = {
  state: {
    video: Video;
  };
};

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation() as RouteState;
  const { title, channelId, channelTitle, description } = video.snippet;

  return <div>{title}</div>;
}
