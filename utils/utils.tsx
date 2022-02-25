import { Theme } from '@/contexts/ThemeContext';

export const isBrowser = typeof window !== 'undefined';

export const setLocalStorage = (key = '', data = ''): void => {
  window.localStorage.setItem(key, data);
};

export const localStorageIsAvailable = (data: string): boolean =>
  !!window.localStorage.getItem(data);

export const toggleColorMode = (targetMode: Theme): void => {
  if (isBrowser) {
    document.body.className = targetMode === 'Dark' ? 'darkMode' : 'lightMode';
  }
};
