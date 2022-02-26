import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Donut } from '../Timer';

const StatusStyle = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const StatusBar = ({
  ticker,
  duration,
  ticking,
  currentWorkout,
  nextWorkout,
  focus,
  second,
}) => {
  return (
    <StatusStyle>
      <Donut
        duration={duration}
        ticker={ticker}
        ticking={ticking}
        second={second}
      />
      {currentWorkout}
      <br />
      {nextWorkout}
      {focus}
    </StatusStyle>
  );
};

export { StatusBar };
