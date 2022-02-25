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

const program = [
  {
    name: 'Jumping Jacks',
    length: 5,
  },
  {
    name: 'Rest',
    length: 10,
  },
  {
    name: 'Push ups',
    length: 6,
  },
  // {
  //   name: 'Rest',
  //   length: 10,
  // },
  // {
  //   name: 'Jumping Jacks',
  //   length: 25,
  // },
  // {
  //   name: 'Rest',
  //   length: 10,
  // },
];

const StatusBar = () => {
  const [ticking, setTicking] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [second, setSecond] = useState(0);
  const tick = () => setSecond(second + 0.05);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 50);
    return function cleanUp() {
      clearInterval(timerID);
    };
  });
  useEffect(() => {
    if (second >= program[currentIndex].length) {
      if (currentIndex >= program.length - 1) {
        setTicking(false);
        return;
      }
      setSecond(0);
      setCurrentIndex(currentIndex + 1);
    }
  }, [second, currentIndex]);
  return (
    <StatusStyle>
      <Donut timeInSec={program[currentIndex].length} ticking={ticking} />
      {program[currentIndex].name}
      <br />
      {currentIndex === program.length - 1
        ? 'End'
        : 'Next Up: ' + program[currentIndex + 1].name}
    </StatusStyle>
  );
};

export { StatusBar };
