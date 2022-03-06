import * as React from 'react';

export const Avatar: React.FC<React.SVGAttributes<SVGAElement>> = ({
  width = 30,
  height = 30,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#C6C8D2" />
    <g clipPath="url(#a)" fill="#fff">
      <path d="M15 24.6c-2.5 0-5-.4-7.4-1.3a.6.6 0 0 1-.4-.5 6 6 0 0 1 6-6h3.6a6 6 0 0 1 6 6 .6.6 0 0 1-.4.5c-2.3 1-4.9 1.4-7.4 1.3ZM15 15.6c-2.7 0-4.8-2.9-4.8-5.4a4.8 4.8 0 1 1 9.6 0c0 2.5-2 5.4-4.8 5.4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(5.4 5.4)"
          d="M0 0h19.2v19.2H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
