import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return <div>videos{keyword ? `검색결과-${keyword} ` : 'main'}</div>;
}
