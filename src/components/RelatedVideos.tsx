import youtubeService from '@apis/index';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

type Props = {
  id: string;
};

export default function RelatedVideos({ id }: Props) {
  const { data: videos } = useQuery(
    ['relatedVideos', id],
    () => youtubeService.relatedVideos(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <ul>
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </ul>
  );
}
