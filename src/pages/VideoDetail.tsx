import type { Video } from '@projects/types/videos';
import { useLocation } from 'react-router-dom';

type LocationState = {
  state: {
    video: Video;
  };
};

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation() as LocationState;
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <div>
      <iframe
        id="player"
        width="100%"
        height="640"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={title}
      />
    </div>
  );
}
