import youtubeService from '@apis';
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

  console.log(videos);
  return (
    <>
      <div>videos{keyword ? `검색결과-${keyword} ` : 'main'}</div>
      {isLoading && <div>isLoading...</div>}
      {error && <div>somethig wrong</div>}
    </>
  );
}
