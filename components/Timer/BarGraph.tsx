import styled from 'styled-components';

const BarStyles = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: var(--ticker-height);
  background-color: var(--timer-bg);
  .marker {
    background-color: var(--timer-marker);
    transition: flex-basis 0.5s linear;
  }
`;

const BarGraph = ({ duration, timeLeft }) => (
  <BarStyles>
    <div
      className="marker"
      style={{ flexBasis: `${(timeLeft / duration) * 100}%` }}
    ></div>
  </BarStyles>
);

export { BarGraph };
