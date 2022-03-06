import styled from 'styled-components';

const StatusStyle = styled.footer`
  position: absolute;
  bottom: calc(3.2rem + var(--ticker-height));
  left: 3.2rem;
  .seconds {
    font-size: 5.6rem;
    color: var(--label-current);
  }
  h2,
  h3 {
    margin: 0;
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--label-current);
    margin-bottom: 0.5rem;
    span {
      font-weight: 300;
    }
  }
  h3 {
    color: var(--label-next);
    font-weight: 500;

    span {
      font-weight: 400;
    }
  }
`;

const StatusBar = ({ currentWorkout, nextWorkout, focus, second }) => {
  return (
    <StatusStyle>
      <span className="seconds">{second}’</span>
      <h2>
        {currentWorkout}
        <span> ({focus})</span>
      </h2>
      <h3>
        {nextWorkout === null ? (
          <span>End</span>
        ) : (
          <>
            <span>Next Up:</span> {nextWorkout}
          </>
        )}
      </h3>
    </StatusStyle>
  );
};

export { StatusBar };
