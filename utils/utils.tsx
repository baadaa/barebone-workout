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

export const getRandomInt = (min: number, max: number) => {
  const bottom = Math.ceil(min);
  const top = Math.floor(max);
  return Math.floor(Math.random() * (top - bottom) + bottom);
  // Maximum is exclusive and minimum is inclusive
};
