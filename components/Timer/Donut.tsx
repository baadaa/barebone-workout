import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Arc } from './Arc';

const DonutStyle = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 10rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 15rem;
    height: 15rem;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5.5rem;
  }
`;

const Donut = ({ timeInSec, ticking }) => {
  const [second, setSecond] = useState(0);
  const tick = () => {
    setSecond(second + 0.05);
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 50);
    return function cleanUp() {
      clearInterval(timerID);
    };
  });
  useEffect(() => {
    setSecond(0);
  }, [timeInSec]);
  useEffect(() => {
    if (second >= timeInSec) setSecond(0);
  }, [second, timeInSec]);
  return (
    <DonutStyle>
      <Arc
        center={50}
        radius={45}
        delta={((2 * Math.PI) / timeInSec) * second}
        mu={-Math.PI / 2}
        color="var(--timer-stroke)"
        ticking={ticking}
      />
      {ticking && <span>{timeInSec - Math.round(second)}&#39;</span>}
      {!ticking && <span style={{ fontSize: '3rem' }}>Done!</span>}
    </DonutStyle>
  );
};

export { Donut };
