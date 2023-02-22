import { useLocation } from 'react-router-dom';
import type { Video } from '@projects/types/videos';
import { ChannelInfo, RelatedVideos } from '@components';
import useScrollToTop from '@hooks/useScrollToTop';

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

  useScrollToTop(video.id);

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6 m-5">
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div>
          <h1 className="text-3xl font-bold mt-6">{title}</h1>
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
