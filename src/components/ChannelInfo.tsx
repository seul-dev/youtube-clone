import youtubeService from '@apis';
import { useQuery } from '@tanstack/react-query';

type Props = {
  id: string;
  title: string;
};

export default function ChannelInfo({ id, title }: Props) {
  const { data: channelUrl } = useQuery(
    ['videoInfo', id],
    () => youtubeService.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      <img className="rounded-full w-10 h-10" src={channelUrl} alt={title} />
      <p className="text-lg font-medium ml-3">{title}</p>
    </div>
  );
}
