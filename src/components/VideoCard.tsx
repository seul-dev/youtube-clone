import type { Video } from '@projects/types/videos';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '@utils/formatAgo';

type Props = {
  video: Video;
  type?: 'list';
};

export default function VideoCard({ video, type }: Props) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
      className={`cursor-pointer ${isList ? 'flex gap-2 m-2' : ''}`}
    >
      <img
        className={`rounded-xl aspect-video ${isList ? 'w-60 mr-2' : 'w-full'}`}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold text-lg my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
