import { useLayoutEffect } from 'react';

export default function useScrollToTop(id: string) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
}
