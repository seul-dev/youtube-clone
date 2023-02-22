import { useQuery } from '@tanstack/react-query';
import { youtubeService, CACHE_KEYS } from '@services';
import VideoCard from './VideoCard';

type Props = {
  id: string;
};

export default function RelatedVideos({ id }: Props) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(CACHE_KEYS.related(id), () => youtubeService.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <div>isLoading...</div>}
      {error && <div>somethig is wrong</div>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
