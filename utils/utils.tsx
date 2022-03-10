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

export const getRandomName = (): string => {
  const adjectives = [
    'Shy',
    'Cranky',
    'Flamboyant',
    'Curious',
    'Angry',
    'Snarky',
    'Briliant',
    'Bald',
    'Elaborate',
    'Shocking',
    'Colorful',
    'Boring',
    'Nasty',
    'Musical',
    'Deadpan',
    'Motherly',
    'Squishy',
    'Persistent',
    'Stingy',
    'Idle',
    'Excited',
    'Moody',
    'Distracted',
    'Happy',
    'Shiny',
  ];

  const animals = [
    'Octopus',
    'Elephant',
    'Hippo',
    'Jellyfish',
    'Cat',
    'Kangaroo',
    'Shark',
    'Anglerfish',
    'Giraffe',
    'Zebra',
    'Sloth',
    'Anemone',
    'Spider',
    'Grasshopper',
    'Snail',
    'Seagull',
  ];
  const adj = adjectives.length;
  const noun = animals.length;
  return (
    adjectives[getRandomInt(0, adj)] + ' ' + animals[getRandomInt(0, noun)]
  );
};
