import { useLocation } from 'react-router-dom';
import type { Video } from '@projects/types/videos';
import { ChannelInfo, RelatedVideos } from '@components';

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
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
