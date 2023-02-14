import type { Video } from '@projects/types/videos';
import { useNavigate } from 'react-router-dom';

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{publishedAt}</p>
      </div>
    </li>
  );
}
