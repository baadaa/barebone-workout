import { createContext, useContext } from 'react';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (value: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  setTheme: (theme) => console.warn('no theme provider', theme),
});
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
