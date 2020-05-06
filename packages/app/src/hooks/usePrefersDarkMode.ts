import { useEffect, useState } from 'react';

export const usePrefersDarkMode = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [prefersDarkMode, setPrefersDarkMode] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = () => setPrefersDarkMode(mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [mediaQuery, prefersDarkMode]);

  return prefersDarkMode;
};
