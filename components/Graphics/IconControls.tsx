import * as React from 'react';

export const IconPause: React.FC<React.SVGAttributes<SVGAElement>> = ({
  width = 14,
  height = 17,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="5" height="17" />
    <rect x="9" width="5" height="17" />
  </svg>
);

export const IconPlay: React.FC<React.SVGAttributes<SVGAElement>> = () => (
  <svg
    width="15"
    height="17"
    viewBox="0 0 15 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z" />
  </svg>
);

export const IconStop: React.FC<React.SVGAttributes<SVGAElement>> = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 17 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="17" height="17" />
  </svg>
);
