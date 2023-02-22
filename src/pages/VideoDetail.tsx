import ChannelInfo from '@components/ChannelInfo';
import RelatedVideos from '@components/RelatedVideos';
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
    <section>
      <article>
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
