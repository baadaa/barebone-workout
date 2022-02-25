import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bodyBg: #eee;
    --cyan: #00a2d9;
    --berry: #b7295a;
    --green: #7ab800;
    --yellow: #f2af00;
    --black: #202020;
    --paleGray: #eee;
    --almostWhite: #f4f4f4;
    --cardLarge: 150px;
    --cardSmall: 140px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 62.5%;
  }
  body {
    background-color: var(--bodyBg);
    color: #222;
    color: var(--content);
    font-family: "Work sans", sans-serif;
    letter-spacing: -.025em;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
    transition: transform .5s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  *, * > * {
    box-sizing: border-box;
  }
  .lightMode {
    --timer-stroke: var(--berry);
  }

  .darkMode {
    --timer-stroke: var(--berry);
  }

  #root, #__next {
    position: relative;
  }

  .noscroll {
    overflow: hidden;
  }
`;
