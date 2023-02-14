import SearchHeader from '@components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
