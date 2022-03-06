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
    font-size: 1.8rem;
    span {
      font-weight: 400;
    }
  }
  @media screen and (max-width: 900px) {
    bottom: calc(2rem + var(--ticker-height));
    left: 2rem;
    .seconds {
      font-size: 4.8rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.4rem;
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
          <span>That’s a wrap</span>
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
