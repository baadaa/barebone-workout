import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes jumping-jack-1 {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #jumping-jack-1 {
    animation-name: jumping-jack-1;
  }

  @keyframes jumping-jack-2 {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }

  #jumping-jack-2 {
    animation-name: jumping-jack-2;
  }
`;
export const JumpingJacks = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.6 677.5">
        <g className="shapes">
          <g id="jumping-jack-2">
            <path
              fill="var(--hair)"
              d="M255 618c4 2 6 5 8 11 3 11 8 22 13 34v6a27 27 0 0 1-10 8h-11c-10-4-14-12-13-22 1-5-1-8-4-11s-5-7-2-11c2-3 0-6 0-10 3 0 5 3 7 0 3-6 7-5 12-5Z"
            />
            <path
              fill="var(--shirt)"
              d="M86 378c-5-5-4-11-3-17 3-12 0-24-1-36a603 603 0 0 1-2-62 89 89 0 0 0-12-47c-1-4-2-7 0-10 2 0 2 2 2 3 2 6 3 7 9 4 3-2 4-6 6-8 5-5 10-9 14-15 3 5 3 12 7 16s5 10 11 12l3 2c8 8 24 9 33 3a94 94 0 0 1 14-21c3-4 5-7 4-12 4 0 6 3 8 5 8 8 15 15 25 16a261 261 0 0 1-8 29c-2 7 0 15 1 23a50 50 0 0 1-3 27 10 10 0 0 0-1 4c0 17-1 35 1 52l3 26c0 3-1 5-4 6l-9 2c-2-1-2-7-6-5-8 2-17 2-25 5-9 3-18 4-28 3l-33-8c-3 0-4 0-6 3Z"
            />
            <path
              fill="var(--pants)"
              d="M86 378c2-3 3-3 6-2l33 7c10 1 19 1 28-3 8-3 17-3 25-5 4-1 4 4 6 5 8 22 17 45 20 68 2 9 2 17 5 25a10 10 0 0 1 0 8c-5 6-12 9-20 10-5 2-10 2-15 5l-18 2c-4 1-7-1-8-6l-8-27c0-2 0-4-2-4-3 1-3 4-4 6l-8 28c-1 3-3 5-6 6a69 69 0 0 1-30 4 70 70 0 0 1-13-8l-17-11a7 7 0 0 1-1-5c7-32 14-63 24-94l3-9Z"
            />
            <path
              fill="var(--flesh)"
              d="M99 190c-4 6-9 10-14 15-2 2-3 6-6 8-6 3-7 2-9-4 0-1 0-3-2-3 0-8-1-16-3-23l1-15 1-4c2-12-2-24 3-35l10-23c4-10 11-18 17-26 13-16 22-33 24-53 1-8 5-15 7-22 0-2 1-5 3-5 3 0 3 3 3 5 9 21 12 44 27 62a364 364 0 0 1 40 62 11 11 0 0 1 1 6c-2 13 1 26 3 38a209 209 0 0 1-1 38c-10-1-17-8-25-16-2-2-4-5-8-5 0-14 0-28 5-42a12 12 0 0 0-1-11l-12-27c-10-17-13-39-32-52 0 6-3 7-7 10a18 18 0 0 0-6 8c-6 17-11 34-19 50-6 13-8 26-1 39a29 29 0 0 1 1 25Zm33-163h-1l-1 11 1 3c2 0 2-1 2-2l-1-12ZM174 496c5-3 10-3 15-5 8-1 15-4 20-10 2 1 2 3 2 5 0 16 9 29 16 42 8 14 12 30 16 46a303 303 0 0 0 11 37l1 7c-5 0-10-1-12 5-2 3-4 0-7 0 0-14-7-26-14-38-8-14-17-27-19-43-1-10-10-16-15-24-5-7-11-14-14-22ZM60 486l17 11a70 70 0 0 0 13 8c-2 9-10 14-14 21-4 5-7 10-8 16-2 16-10 29-18 43-5 8-10 17-11 27-2 4-4 9-7 1-2-4-6-4-10-5 7-16 6-33 11-49 3-13 7-25 14-37 6-11 13-23 13-36Z"
            />
            <path
              fill="var(--hair)"
              d="M22 608c4 1 8 1 10 5 3 8 5 3 7-1l6 14c1 3 0 6-4 8-6 4-9 9-8 17 2 7-2 13-9 15s-14 2-21-3c-4-3-4-13 0-19 6-9 11-17 13-28a12 12 0 0 1 6-8Z"
            />
            <path
              fill="var(--flesh)"
              d="M117 218a18 18 0 0 0-4-14c-5-7-7-13-4-21l2 4v-8c-1-1 5-15 7-16a6 6 0 0 1 3 0c7 2 15 2 22-1 4-1 8 0 9 5 1 8 9 14 7 24l3-9c3 6 2 12-2 16-5 8-6 16-7 25-9 6-25 5-33-3l-3-2Z"
            />
            <path
              fill="var(--hair)"
              d="m162 182-3 9c2-10-6-16-7-24-1-5-5-6-9-5-7 2-15 3-22 1a6 6 0 0 0-3 0c-2 1-8 15-7 16v8l-2-4c-3-9 1-19-3-29-1-2 1-4 3-5 10-7 21-11 33-8 4 1 7 2 9 6 16 6 8 19 10 29a29 29 0 0 1 1 6Z"
            />
          </g>
          <g id="jumping-jack-1">
            <path
              fill="var(--shirt)"
              d="M56 270c-2-1-2-3-1-4 4-14 8-27 14-40 3-8 9-11 16-14l31-11 9 11c2 1 1 5 4 5a70 70 0 0 0 23 0c7-1 11-6 13-13l37 17c7 3 8 10 11 15l11 31c1 4 2 8-2 10-5-3-9 0-12 3l-18 9-4-5-1 21-2 47c-1 15 1 29 2 44 1 6-1 7-6 6a20 20 0 0 0-3 0l-24 1-68-5c-3 0-5-1-7 1a1 1 0 0 1-1 0c-1-3-2-6-1-9l7-53c2-16 0-33 1-49 0-6 2-12 1-18l-5 6c-7-5-17-4-25-6Z"
            />
            <path
              fill="var(--pants)"
              d="M79 399c2-2 4-1 7-1l68 5h24l1 6c-2 12-4 24-3 37a207 207 0 0 0-2 30c0 3 0 5-4 5s-5 4-8 5c-11 0-21 0-31-6a4 4 0 0 0-4 0c-11 5-23 3-35 1-7 0-9-4-9-11-1-24-5-47-4-71Z"
            />
            <path
              fill="var(--flesh)"
              d="M92 481c12 2 24 4 35-1a4 4 0 0 1 4 0c10 6 20 6 31 6-2 10-4 19-4 29a89 89 0 0 0 0 17c3 18-3 34-7 51-4 15-8 29-8 44a14 14 0 0 1-1 6c-5-4-10-4-16 1v-17c4-13 3-27 2-40-1-11-2-23 0-34 1-7 3-14 1-21a192 192 0 0 1-3-27c-2 15-6 30-4 46 2 9 3 19 1 28-3 18-4 35 0 52 1 3 1 7-3 9-5-2-10-1-14 2 1-24-8-46-12-69-2-12-3-24-1-36 3-15 1-31-1-46ZM192 289l18-9c3-3 7-6 12-3 2 14-1 29 2 43 5 23-2 45-4 67-1 14-3 27-1 41 2 13-6 24-18 27l-9 2c-5-2-4-5-1-8s7-6 8-11c0-2 3-5 0-6-4-2-5 1-7 3a77 77 0 0 1-4 8 3 3 0 0 1-3 1 2 2 0 0 1-1-3c3-7 2-17 9-23s11-14 10-25l-1-37c-1-16 0-32-6-47-2-7-1-14-4-20ZM56 270c8 2 18 1 25 6l-1 9c-1 12-8 23-7 35a112 112 0 0 1-8 46c-4 10-6 22-2 32s6 21 6 31c0 2 1 5-2 5-2 1-3-1-4-2s-2-4-4-2c-2 1-1 3 0 5l4 8c1 1 1 4-1 5s-4 0-5-1a11 11 0 0 0-6-4l-4-6-3-8c-4-9-3-17 0-25 4-12 3-23 2-34-2-20 1-40 4-59l1-7c3-11 4-23 5-34ZM165 204c-2 7-6 12-13 13a70 70 0 0 1-23 0c-3 0-2-4-4-5l-9-11c7-5 8-15 2-23l-4-12c-1-2-1-5 2-6l3 6c0-9 0-16 3-23 3-4 4-7 8-5a34 34 0 0 0 21 0c3-1 8-1 8 3 1 6 6 11 6 18 0 1-1 3 1 4 3 0 2-3 3-4 3 3 3 12-1 16s-5 9-7 14c-2 6-2 11 4 15Z"
            />
            <path
              fill="var(--hair)"
              d="M106 632c4-3 9-4 14-1 0 3 1 7 6 3 6-5 11-5 16-1 5 8 10 16 9 25-2 13-18 19-28 12-1-1-2-2-4-1-18 8-26 1-23-18 1-7 3-14 10-19ZM169 159c-1 1 0 4-3 4-2-1-1-3-1-4 0-7-5-12-6-18 0-4-5-4-8-3a34 34 0 0 1-21 0c-4-2-6 1-8 5-3 7-3 14-3 23l-3-6c-2-10 2-21-2-32-1-2 1-4 4-6 10-6 21-9 33-6 4 1 6 4 10 6 16 10 7 25 8 37Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
