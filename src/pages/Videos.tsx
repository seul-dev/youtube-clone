import youtubeService from '@apis';
import VideoCard from '@components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtubeService.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      {isLoading && <div>isLoading...</div>}
      {error && <div>somethig is wrong</div>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
