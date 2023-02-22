import youtubeService from '@apis/index';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

type Props = {
  id: string;
};

export default function RelatedVideos({ id }: Props) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['relatedVideos', id], () => youtubeService.relatedVideos(id), {
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
