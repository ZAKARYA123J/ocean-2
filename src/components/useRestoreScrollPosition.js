// useRestoreScrollPosition.js
import { useEffect } from 'react';

export function useRestoreScrollPosition() {
  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      localStorage.removeItem('scrollPosition'); // Clear it after restoring
    }
  }, []);
}
