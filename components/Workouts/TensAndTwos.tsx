import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid red;
  svg {
    g#legs {
      transform-origin: bottom;
      animation: leg10 3s linear infinite;
    }
  }
  @keyframes leg10 {
    0% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(-30deg);
    }
  }
`;
export const TensAndTwos = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.6 284.3">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="188.4" cy="93" r="32.1" />
          <circle fill="var(--flesh)" cx="188.4" cy="100.6" r="32.1" />
          <path fill="var(--flesh)" d="M8.4 116.6h368.3l16 15.8H0Z" />
          <path fill="var(--flesh-shadow)" d="M8.4 147h368.3l16-14.5H0Z" />
          <path
            fill="var(--shirt)"
            d="M283.8 217.1H98.3l39-78.3-28.3-.3 12.6-29.3h135.2l11.8 25.6h-33.1l48.3 82.3z"
          />
          <path
            fill="var(--pants)"
            d="M255.9 284.3H128.4l-30.1-67.2h185.5l-27.9 67.2z"
          />
          <path
            fill="var(--shirt-shadow)"
            d="m122 169.5-13-31 28.3.3-15.3 30.7zM255 167.9l13.6-33.1h-33.1l19.5 33.1z"
          />
          <g id="legs">
            <path fill="var(--flesh)" d="M148.9 0h31.3v255.9h-31.3z" />
            <path
              fill="var(--flesh-shadow)"
              transform="rotate(180 145 128)"
              d="M141.1 0h7.9v255.9h-7.9z"
            />
            <path fill="var(--flesh)" d="M208.8 0h31.3v255.9h-31.3z" />
            <path
              fill="var(--flesh-shadow)"
              transform="rotate(180 204.8 128)"
              d="M200.9 0h7.9v255.9h-7.9z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
