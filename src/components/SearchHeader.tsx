import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query === '') return;
    navigate(`/videos/${query}`);
  };

  useEffect(() => {
    setQuery(keyword || '');
  }, [keyword]);

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>youtube Logo</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
