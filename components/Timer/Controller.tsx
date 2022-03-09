import { useState } from 'react';
import styled from 'styled-components';
import { IconPause, IconPlay, IconStop } from '../Graphics';

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
  @media screen and (max-width: 900px) {
    top: 1.5rem;
    right: 1.5rem;
    bottom: auto;
  }
  @media screen and (max-width: 640px) {
    left: calc(50% - 13rem);
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
    font-weight: 500;
    padding: 1rem 0.5rem;
    transition: transform 0.2s;
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
      box-shadow: var(--focus-shadow);
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
  .paused {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    svg {
      pointer-events: all;
      fill: var(--red500);
      opacity: 0.4;
    }
    button {
      flex: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }
  .dialogue {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    transform: translateY(-20vh);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition: transform 0.2s, opacity 0.2s, visibility 0.2s;
    &[data-active='true'] {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      pointer-events: all;
    }
    h2,
    p {
      margin: 0;
    }
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      margin-top: 1rem;
    }
    button {
      font-size: 1.6rem;
      border-radius: 3rem;
    }
    .button-group {
      flex-direction: column;
      max-width: 33rem;
      margin-top: 2rem;
    }
    button + button {
      margin-left: 0;
      margin-top: 1rem;
    }
    button.abandon {
      background-color: transparent;
      color: var(--yellow500);
      border: 1px solid var(--yellow500);
    }
    button.continue {
      background-color: var(--green500);
      color: var(--green900);
    }
  }
`;

const Controller = ({
  primaryTarget,
  totalLeft,
  isPaused,
  setIsPaused,
  setStarted,
}) => {
  const min = Math.floor(totalLeft / 60);
  const sec = totalLeft % 60;
  const [showDialogue, setShowDialogue] = useState(false);
  const resume = () => {
    setShowDialogue(false);
    setIsPaused(false);
  };
  return (
    <ControllerStyles>
      <div className="dialogue" data-active={showDialogue}>
        <h2>Abandon the workout?</h2>
        <p>Your progress so far won&apos;t be saved.</p>
        <div className="button-group">
          <button className="abandon" onClick={() => setStarted(false)}>
            Yes, I’m stopping now.
          </button>
          <button className="continue" onClick={() => resume()}>
            No, let me finish.
          </button>
        </div>
      </div>
      {isPaused && (
        <div className="paused">
          <button onClick={() => setIsPaused(false)}>
            <IconPause width={150} height={200} />
          </button>
        </div>
      )}
      <h4>
        <span>{primaryTarget} Workout</span>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </h4>
      <div className="button-group">
        <button onClick={() => setIsPaused(!isPaused)}>
          {!isPaused ? <IconPause /> : <IconPlay />}
          {!isPaused ? 'Pause' : 'Resume'}
        </button>
        <button disabled={!isPaused} onClick={() => setShowDialogue(true)}>
          <IconStop />
          Stop
        </button>
      </div>
    </ControllerStyles>
  );
};

export { Controller };
