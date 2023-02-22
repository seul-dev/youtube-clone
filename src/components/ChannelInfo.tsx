import youtubeService from '@apis/index';
import { useQuery } from '@tanstack/react-query';

type Props = {
  id: string;
  title: string;
};

export default function ChannelInfo({ id, title }: Props) {
  const { data: channelUrl } = useQuery(
    ['videoInfo', id],
    () => youtubeService.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div>
      <img src={channelUrl} alt={title} />
    </div>
  );
}
