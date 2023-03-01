import { Outlet } from 'react-router-dom';
import SearchHeader from './SearchHeader';

export default function Layout() {
  return (
    <>
      <SearchHeader />
      <main className="max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
