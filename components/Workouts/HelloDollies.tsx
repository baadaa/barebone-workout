import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes plank-1 {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #plank-1 {
    animation-name: plank-1;
  }

  @keyframes plank-2 {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }

  #plank-2 {
    animation-name: plank-2;
  }
`;
export const HelloDollies = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.6 282.2">
        <g id="dollies">
          <path
            fill="var(--hair)"
            d="M668 76c-2 0-3-1-3-3a169 169 0 0 0-3-22 13 13 0 0 0-4-7l-13-12a15 15 0 0 1-4-6c-1-4 0-7 4-7 11-1 20 1 28 9a43 43 0 0 1 5 6c7 9 15 16 24 23l4 2c4 3 7 5 9 10v4l-1 2a9 9 0 0 1-4 5l-19 13a1 1 0 0 1-2 0c0-2-1-5 1-7 4-8-2-16-9-16h-6c-2-1-2 0-2 1a6 6 0 0 1-5 5Z"
          />
          <path
            fill="var(--flesh)"
            d="m47 280-21 2a42 42 0 0 1-16-1 5 5 0 0 1-2-2l-8-10v-2l7-10c1-2 3-3 6-4l8-3a4 4 0 0 0 2 0c6-1 12-1 19 1 0 1-1 2 1 2l3 1 19 9a2 2 0 0 1 2 3l-2 1c-3 0-5 1-7 4a4 4 0 0 1-1 2 29 29 0 0 0-10 7Z"
          />
          <path
            fill="var(--hair)"
            d="m634 0 10 2a92 92 0 0 1 15 4 58 58 0 0 1 14 7l-1-5 1-2 1 2 1 8-2 1h-9l2-1 5-1a14 14 0 0 0-4-3c-16-8-32-12-50-9a49 49 0 0 0-23 10l-1 2h4l2 1-2 1a13 13 0 0 1-1 0c-3 0-7 1-7-1-2-2 0-5 0-8l1-2 1 2v4h2a53 53 0 0 1 26-11l1-1Z"
          />
          <path
            fill="var(--flesh)"
            d="M668 76a6 6 0 0 0 5-5c0-1 0-2 2-1h5c8 0 14 8 9 16v7l-9 15-11 21c-4 9-8 18-14 26-3 4-7 5-10 8l-13 7c-1 1-2 3-1 5 2 10 5 21 6 32l1 2c-2 1-1 2-1 3 0 6-1 13-4 19-1 2-2 3-5 3l-11-1a8 8 0 0 1-7-4c-1-3-3-7-6-9-5-3-8-9-11-14a5 5 0 0 1-1-4l4-24c0-1-1-2-2-1l-6 2c1-8 0-16 2-24a22 22 0 0 0-1-6c0-3 0-7 3-9 10-9 16-20 23-31 3-6 7-11 8-17l2-2c2 0 1-2 1-3 0-3 1-4 4-3 4 0 7 4 8 9a10 10 0 0 0 1 4c-3 4-4 10-4 15a98 98 0 0 1-2 13 12 12 0 0 0 0 2l4-5 20-23c6-6 10-14 11-23Z"
          />
          <path
            fill="var(--shirt)"
            d="M597 275c0 2-1 3-2 2a18 18 0 0 1-3-1c-5-2-11-3-17-3h-57l-23-1a19 19 0 0 1-12-5c-4-4-9-6-14-7l-7-4 6-1c3 0 6 0 7-3l5-14c1-2 3-4 1-6l-9-10c-1 0-2-1-1-2l2 1h1a6 6 0 0 0 8-3c1-2 3-5 7-4a9 9 0 0 0 5-2l5-4c1-2 3-5 6-5 3 6 7 7 13 6 7-1 14 0 20 2h2c7 0 14 3 22 1 3 0 7-1 10 1a5 5 0 0 0 4 1l7-1c2 3 2 6 3 10l8 36 3 16ZM47 280a29 29 0 0 1 9-7 4 4 0 0 0 2-2c1-3 4-4 7-4l2-1a2 2 0 0 0-2-3c-6-4-12-6-19-9l-3-1-1-2h3c7 0 13-1 17-6a27 27 0 0 1 5-5 16 16 0 0 0 6-7l4-2 12-10c4-4 10-5 16-6h29l12 3h21c3 1 3 3 3 5 1 8 1 15 5 22a8 8 0 0 1 0 7c-4 8 0 15 4 21-1 3-5 6-8 4a35 35 0 0 1-5-3 15 15 0 0 0-9-3l-31-1-40 5-18 3a82 82 0 0 0-15 2h-6Z"
          />
          <path
            fill="var(--flesh)"
            d="M178 190a209 209 0 0 0 2-22 110 110 0 0 1 1-11 20 20 0 0 0-1-5c0-7 2-13 6-19s7-13 10-21l11-26c4-8 7-16 7-25a7 7 0 0 0 1-4l1-2c3 0 4-3 4-5 0-3 2-3 4-4a9 9 0 0 1 10 10 9 9 0 0 0 1 5l-2 7-7 42c-2 9-5 17-10 24-3 4-6 9-7 14s0 10 2 14l8 37 1 4c-2 1-1 4-2 5-4 8-6 9-14 7s-14-7-20-12c-4-4-7-7-6-13ZM505 203c-4 0-5 3-7 5l-4 4a9 9 0 0 1-5 2c-4-1-6 2-7 4a6 6 0 0 1-8 3h-1l-2-1c-1 1 0 2 1 2l8 10c3 2 1 4 0 6l-5 14c-1 3-4 3-7 3l-6 1c-7-2-12-6-18-11l-8-7a9 9 0 0 1-3-4c-3-6-4-13 0-20l2-5c-1-1-2 0-2-2a3 3 0 0 1 1-2l6-7a2 2 0 0 0 2 0 13 13 0 0 1 9 0l10 3c1-6 4-7 9-5l3 2c2 1 3 1 4-2a3 3 0 0 0-1-3 30 30 0 0 1-7-8 6 6 0 0 0-3-4c-3-1-4-3-1-5a50 50 0 0 1 7-7 2 2 0 0 1 2-1c5 2 9 4 12 7 2 3 4 3 6 4a19 19 0 0 1 4 0c2 1 3 2 2 4s0 2 1 3c3 1 4 3 4 6a4 4 0 0 0 2 3c2 2 2 3 0 6v2Zm-36 14 2-2c2-2 2-4-1-5l-3-3h-2c-1 1 0 1 1 2 0 2 3 5 3 8Zm-14-3a11 11 0 0 0 7 2c-2-4-2-4-7-2Z"
          />
          <path
            fill="var(--pants)"
            d="M178 190c-1 6 2 9 6 13 6 5 12 10 20 12s10 1 14-7c1-1 0-4 2-5l8 18v7c-2 3-1 7-2 11v10c-1 10-9 23-23 24a184 184 0 0 1-24 0c-4-6-7-13-4-21a8 8 0 0 0 0-7c-4-7-4-14-5-22 0-2 0-4-3-5l-1-2 2-1c5-1 7-4 8-10v-10c0-2 0-4 2-5ZM597 275l-3-16-8-36c-1-4-1-7-3-10 2-5 1-10 1-14-1-4-1-7 1-10a24 24 0 0 0 2-8 4 4 0 0 1 1-2l6-2c1-1 2-1 2 1l-4 24a5 5 0 0 0 1 4c3 5 6 10 11 14 3 2 5 6 6 9a8 8 0 0 0 7 4l11 1c3 0 4-1 5-3 3-6 4-13 4-19 0-1-1-3 1-3 2 2 2 4 2 6-1 3-1 6 1 9l1 4c-2 4-3 7 1 11v3c-3 3-4 6-5 10l-3 9c-3 9-10 13-19 15a70 70 0 0 1-19-1Z"
          />
          <path
            fill="var(--hair)"
            d="M235 61a9 9 0 0 1-1-5 9 9 0 0 0-10-10c-2 1-4 1-4 4 0 2-1 5-4 5l-1 2a7 7 0 0 1-1 4l-2-1c-1-4-3-7-5-9-7-7-13-13-22-16a5 5 0 0 1-3-4c0-3 1-4 3-4a19 19 0 0 1 10-1h2l-1-2-3-2a5 5 0 0 1-2-6c0-3 2-3 4-3 5-1 10 0 14 2 12 5 22 12 32 19a55 55 0 0 1 6 5c3 2 2 4 1 7l-8 8a8 8 0 0 0-3 6l-2 1Z"
          />
          <path
            fill="var(--flesh)"
            d="M73 233a16 16 0 0 1-6 7 27 27 0 0 0-5 5c-4 5-10 6-17 6a27 27 0 0 1-2-2c-2-1-3-3-2-5s2-3 4-3h4c2 0 2-1 2-3a3 3 0 0 0-3-2 24 24 0 0 1-7-3 7 7 0 0 0-5-1c-3 0-4-1-4-4l4-10h9a19 19 0 0 0 13-2c1-1 2 1 3 2l2 1c2 0 4 1 5 3a3 3 0 0 0 3 2c3 0 3 2 3 4l-1 5Z"
          />
          <path
            fill="var(--hair)"
            d="M474 168a2 2 0 0 0-2 1 50 50 0 0 0-7 6c-3 3-2 5 1 6a6 6 0 0 1 3 4 30 30 0 0 0 7 8 3 3 0 0 1 1 3c-1 3-2 3-4 2l-3-2c-5-2-8-1-9 5l-10-3a13 13 0 0 0-9 0 2 2 0 0 1-2 0c-2-6 1-11 4-15 4-7 9-12 14-16l8-8c2-2 4-1 6 1a13 13 0 0 1 2 8ZM639 97a10 10 0 0 1-1-4c0-5-4-9-8-9-3-1-4 0-4 3 0 1 1 3-1 3a3 3 0 0 1-3-3 18 18 0 0 0-11-14 12 12 0 0 1-6-4c-2-4-1-8 3-8 6-2 12-1 17 3a73 73 0 0 0 23 15c5 2 5 4 2 8l-8 7c-2 0-1 2-3 3ZM36 218l-4 10c0 3 2 4 4 4a7 7 0 0 1 5 1 24 24 0 0 0 7 3 3 3 0 0 1 3 2c0 2 0 3-2 3h-4c-2 0-3 1-4 3s0 4 2 5a27 27 0 0 0 2 2h-3c-7-2-13-2-19-1a4 4 0 0 1-2 0c0-7-1-14 1-21l4-13c1-3 3-4 6-2a18 18 0 0 1 4 4Z"
          />
          <path
            fill="var(--shirt)"
            d="M341 155c2-1 3 1 3 2l6 11a3 3 0 0 1 0 3l-6 11c-1 1-5 2-6 1v-1l5-10a4 4 0 0 0 0-5l-4-9c-1-3-2-3 2-3Z"
          />
          <path
            fill="var(--hair)"
            d="m428 248-4 1h-2l1-2a363 363 0 0 0 9-1l2 8v1c-1 1-1 0-2-1l-1-5-1 2c-4 7-6 15-4 23v3c-1 1-1-1-1-2-3-8-1-16 2-23l2-4h-1Z"
          />
          <path
            fill="var(--hair)"
            d="M469 217c0-3-3-6-3-8l-1-2h2l3 3c3 1 3 3 1 5l-2 2Z"
          />
          <path fill="var(--hair)" d="M455 214c5-2 5-2 7 2a11 11 0 0 1-7-2Z" />
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
