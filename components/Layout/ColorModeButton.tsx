import styled from 'styled-components';
import { useTheme, Theme } from '@/contexts/ThemeContext';

const ButtonStyles = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: auto;
  &:focus {
    box-shadow: var(--focus-shadow);
  }
`;

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ButtonStyles
      onClick={() =>
        theme === Theme.Light ? setTheme(Theme.Dark) : setTheme(Theme.Light)
      }
    >
      Change to {theme === Theme.Light ? 'Dark' : 'Light'} Mode
    </ButtonStyles>
  );
};
