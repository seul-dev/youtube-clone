import { useEffect } from 'react';

export default function useScrollToTop(id: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
}
