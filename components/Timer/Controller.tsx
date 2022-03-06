import styled from 'styled-components';

const ControllerStyles = styled.div`
  position: absolute;
  bottom: calc(3.2rem + var(--ticker-height));
  right: 3.2rem;
  padding: 2rem;
  width: 26rem;
  background-color: var(--controller-bg);
  border-radius: 1.2rem;
  .seconds {
    font-size: 5.6rem;
    color: var(--label-current);
  }
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.4rem;
    font-size: 2.8rem;
    line-height: 1;
    color: var(--controller-text);
    span {
      font-size: 1.4rem;
      margin-right: 1rem;
    }
  }
  .button-group {
    display: flex;
    width: 100%;
  }
  button {
    flex: 1;
    background: #fff;
    color: var(--cool700);
    border: none;
    outline: none;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    font-weight: 600;
    /* text-transform: uppercase; */
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--medium-elevation);
    svg {
      margin-right: 0.8rem;
      fill: var(--controller-button);
    }
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--high-elevation);
    }
    &:focus {
      box-shadow: 0px 1px 15px rgba(255, 100, 100, 0.3);
    }
    &[disabled] {
      opacity: 0.7;
      color: var(--cool500);
      cursor: not-allowed;
      svg {
        fill: var(--controller-button-disabled);
      }
      &:hover {
        transform: translateY(0);
      }
    }
  }
  button + button {
    margin-left: 1rem;
  }
`;

const Controller = ({ primaryTarget, totalLeft, isPaused, setIsPaused }) => {
  const min = Math.floor(totalLeft / 60);
  const sec = totalLeft % 60;
  return (
    <ControllerStyles>
      <h4>
        <span>{primaryTarget} Workout</span>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </h4>
      <div className="button-group">
        <button onClick={() => setIsPaused(!isPaused)}>
          {!isPaused ? (
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="17" />{' '}
              <rect x="9" width="5" height="17" />{' '}
            </svg>
          ) : (
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 8.5L0.749999 16.7272L0.75 0.272758L15 8.5Z" />
            </svg>
          )}
          {!isPaused ? 'Pause' : 'Resume'}
        </button>
        <button disabled={!isPaused}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 17 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="17" />
          </svg>
          Stop
        </button>
      </div>
    </ControllerStyles>
  );
};

export { Controller };
