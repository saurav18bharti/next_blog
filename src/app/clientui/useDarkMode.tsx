import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDarkMode') === 'true';
      setIsDarkMode(savedTheme);
      if (savedTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      localStorage.setItem('isDarkMode', newTheme.toString());
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
