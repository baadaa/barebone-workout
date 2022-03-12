import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeContext, Theme } from '@/contexts/index';
import { setLocalStorage, toggleColorMode } from 'utils';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const colorMode = { theme, setTheme };
  const applyColorTheme = (targetMode: Theme) => {
    setTheme(targetMode);
    toggleColorMode(targetMode);
  };

  useEffect(() => {
    const loadColorTheme = () => {
      const savedTheme = localStorage.getItem('bb7_colorMode');
      if (!savedTheme) {
        applyColorTheme(Theme.Light);
        return null;
      }
      const currentTheme = JSON.parse(savedTheme) as Theme;
      applyColorTheme(currentTheme);
    };
    loadColorTheme();
  }, []);

  useEffect(() => {
    setLocalStorage('bb7_colorMode', JSON.stringify(theme));
    applyColorTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
