import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/data/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        return data.items;
      });
  });
  return (
    <>
      <div>videos{keyword ? `검색결과-${keyword} ` : 'main'}</div>
      {isLoading && <div>isLoading...</div>}
      {error && <div>somethig wrong</div>}
    </>
  );
}
