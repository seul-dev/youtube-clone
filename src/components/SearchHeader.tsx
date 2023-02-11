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
    <header className="w-full flex p-4 text-2xl border-b border-gray_active mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-red" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 outline-none bg-black border border-gray_active text-white_body rounded-l-3xl px-6 py-2 text-xl"
          type="text"
          placeholder="Search...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-gray_inactive pl-4 pr-5 rounded-r-3xl"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
