import styled from 'styled-components';

const BarStyles = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 2rem;
  background-color: var(--timer-bg);
  .marker {
    background-color: var(--timer-marker);
    transition: flex-basis 0.5s linear;
  }
`;

const Bar = ({ duration, timeLeft }) => (
  <BarStyles>
    <div
      className="marker"
      style={{ flexBasis: `${(timeLeft / duration) * 100}%` }}
    ></div>
  </BarStyles>
);

export { Bar };
