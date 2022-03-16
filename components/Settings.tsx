import { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { Logo, GitHub, About } from './Graphics';
import { TargetArea, Program } from '@/types/types';
import { ColorModeButton } from './Layout';
import { programs } from './Workouts/programs';
import { getRandomInt } from '../utils';

const SettingsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 1.5rem;
  background: linear-gradient(
    106.79deg,
    var(--gradient-cyan-end) 6.17%,
    var(--gradient-green-end) 94.78%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: var(--setting-panel-bg);
    box-shadow: var(--high-elevation);
    border-radius: 1.2rem;
    max-width: 100%;
    position: relative;
    border: 1px solid var(--setting-panel-border);
  }
  .about {
    position: absolute;
    opacity: 0;
    transform: translateY(2rem);
    transition: opacity 0.2s, transform 0.2s;
    pointer-events: none;
    width: 255px;
    bottom: 5rem;
    right: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    color: var(--controller-text);
    font-size: 1.2rem;
    background-color: var(--about-bg);
    border: 1px solid var(--about-border);
    box-shadow: var(--subtle-elevation);
    button.close-about {
      background-color: transparent;
      box-shadow: none;
      position: absolute;
      top: -3rem;
      right: 0rem;
      color: #fff;
      font-size: 2rem;
    }
    ul {
      margin: 0;
      padding: 0 0 0 1rem;
    }
    li + li {
      margin-top: 1rem;
    }
    a {
      text-decoration: underline;
      font-weight: 500;
      color: var(--controller-text);
    }
    &[data-showing='true'] {
      opacity: 1;
      transform: translateX(0);
      pointer-events: all;
    }
  }
  .inner-wrapper {
    padding: 3.5rem 3.5rem 0;
    margin-bottom: 3rem;
    button {
      border-radius: 3rem;
    }
  }
  .logo {
    svg {
      width: 100%;
    }
    margin-bottom: 3rem;
  }
  h3 {
    font-size: 10px;
    font-weight: 700;
    color: var(--setting-label);
    letter-spacing: 0.095em;
    text-transform: uppercase;
    margin: 0 0.5rem 0 0;
  }
  .radio {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  .radio + .radio {
    margin-left: 0.8rem;
  }
  input {
    overflow: hidden;
    width: 0;
    height: 0;
  }
  label {
    border-radius: 0.7rem;
    border: 1px solid var(--setting-pill-border);
    color: var(--setting-pill-text);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.3rem;
    background: var(--setting-pill);
    flex: 1;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  }
  input:focus + label {
    box-shadow: var(--focus-shadow);
  }
  input:checked + label {
    border: 1px solid var(--cyan500);
    background: var(--setting-pill-selected);
    color: var(--setting-pill-selected-text);
  }
  input + label:hover {
    box-shadow: var(--low-elevation);
    transform: translateY(-1px);
  }
  .radio-group {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    input {
      opacity: 0;
    }
  }

  .inner-wrapper button {
    font-weight: 500;
    background-color: var(--button-bg);
    color: #fff;
    padding: 1em;
    width: 100%;
    margin-top: 2rem;
    /* &:hover {
      transform: translateY(-2px);
      box-shadow: var(--low-elevation);
      background-color: var(--button-bg-hover);
    } */
  }
  button {
    border: none;
    outline: none;
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
    &:focus {
      border: var(--cyan800);
      box-shadow: var(--focus-shadow);
    }
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--low-elevation);
      background-color: var(--button-bg-hover);
    }
  }
  @media screen and (max-width: 450px) {
    .inner-wrapper {
      padding: 1.5rem 1.5rem 0;
      width: 100%;
    }
    .logo {
      max-width: 350px;
      margin: 0 auto 1.5rem;
    }
    button {
      font-size: 1.5rem;
      padding: 0.75em;
    }
  }
`;
type SettingsProp = {
  duration: number;
  setDuration: React.Dispatch<SetStateAction<number>>;
  primaryTarget: TargetArea;
  setPrimaryTarget: React.Dispatch<SetStateAction<TargetArea>>;
  program: Program;
  setProgram: React.Dispatch<SetStateAction<Program>>;
  setStarted: React.Dispatch<SetStateAction<boolean>>;
};
const Settings: React.FC<SettingsProp> = ({
  duration,
  setDuration,
  primaryTarget,
  setPrimaryTarget,
  program,
  setProgram,
  setStarted,
}) => {
  const [showAbout, setShowAbout] = useState(false);
  const handleDuration = (e) => {
    const targetDuration = parseFloat(e.target.dataset.duration);
    setDuration(targetDuration);
  };
  const handleTarget = (e) => {
    const targetArea = e.target.dataset.target as TargetArea;
    setPrimaryTarget(targetArea);
  };

  useEffect(() => {
    updateProgram();
  }, [duration, primaryTarget]);

  const updateProgram = () => {
    const matchingPrograms = programs.filter(
      (item) => item.target === primaryTarget
    );
    const min = 0;
    const max = matchingPrograms.length;
    let program1;
    let program2;
    let program3;
    let program4;
    let merged;
    switch (duration) {
      case 7:
        return setProgram(matchingPrograms[getRandomInt(min, max)]);
      case 14:
        program1 = matchingPrograms[getRandomInt(min, max)];
        program2 = matchingPrograms[getRandomInt(min, max)];
        merged = {
          id: 999,
          target: primaryTarget,
          routine: [...program1.routine, 0, ...program2.routine],
        };
        return setProgram(merged);
      case 21:
        program1 = matchingPrograms[getRandomInt(min, max)];
        program2 = matchingPrograms[getRandomInt(min, max)];
        program3 = matchingPrograms[getRandomInt(min, max)];
        merged = {
          id: 999,
          target: primaryTarget,
          routine: [
            ...program1.routine,
            0,
            ...program2.routine,
            0,
            ...program3.routine,
          ],
        };
        return setProgram(merged);
      case 28:
        program1 = matchingPrograms[getRandomInt(min, max)];
        program2 = matchingPrograms[getRandomInt(min, max)];
        program3 = matchingPrograms[getRandomInt(min, max)];
        program4 = matchingPrograms[getRandomInt(min, max)];
        merged = {
          id: 999,
          target: primaryTarget,
          routine: [
            ...program1.routine,
            0,
            ...program2.routine,
            0,
            ...program3.routine,
            0,
            ...program4.routine,
          ],
        };
        return setProgram(merged);
    }
  };
  const initProgram = () => {
    // console.log('handleInitiation');
    const equipment =
      program.routine.indexOf(49) !== -1 || program.routine.indexOf(50) !== -1
        ? 'Chair'
        : 'Nothing';
    // console.log(program.routine, equipment);
    setStarted(true);
  };
  return (
    <SettingsWrapper>
      <GitHub />
      <ColorModeButton />
      <div className="container">
        <div className="inner-wrapper">
          <div className="logo">
            <Logo />
          </div>
          <h3>Duration:</h3>
          <form className="radio-group">
            {[7, 14, 21, 28].map((targetDuration, i) => (
              <div className="radio" key={i}>
                <input
                  type="radio"
                  id={`duration-${targetDuration}`}
                  data-duration={targetDuration}
                  checked={duration === targetDuration}
                  onChange={handleDuration}
                />
                <label htmlFor={`duration-${targetDuration}`}>
                  {targetDuration}&nbsp;min
                </label>
              </div>
            ))}
          </form>
          <h3>Target:</h3>
          <form className="radio-group">
            {[
              TargetArea.Full,
              TargetArea.Upper,
              TargetArea.Lower,
              TargetArea.Core,
            ].map((targetArea, i) => (
              <div className="radio" key={i}>
                <input
                  type="radio"
                  id={`target-${targetArea}`}
                  checked={primaryTarget === targetArea}
                  onChange={handleTarget}
                  data-target={targetArea}
                />
                <label htmlFor={`target-${targetArea}`} key={i}>
                  {targetArea}
                </label>
              </div>
            ))}
          </form>
          <button type="button" onClick={initProgram}>
            Start Workout
          </button>
        </div>
        <Profile />
      </div>
      <div className="about" data-showing={showAbout}>
        <button className="close-about" onClick={() => setShowAbout(false)}>
          &times;
        </button>
        <ul>
          <li>
            All workouts are from{' '}
            <a
              href="https://twitter.com/bklika"
              target="_blank"
              rel="noreferrer"
            >
              Brett Klika
            </a>
            &apos;s book{' '}
            <a
              href="https://www.amazon.com/Minutes-Fit-Anywhere-Interval-Workouts/dp/1452138478/"
              target="_blank"
              rel="noreferrer"
            >
              7 Minutes to Fit
            </a>
            .
          </li>
          <li>
            App is built with React and Next.js by{' '}
            <a href="https://bald.design" target="_blank" rel="noreferrer">
              Bumhan Yu
            </a>
          </li>
          <li>
            No copyright infringement intended. Just needed a better way to
            utilize the book.
          </li>
          <li>
            Get your copy of the{' '}
            <a
              href="https://www.amazon.com/Minutes-Fit-Anywhere-Interval-Workouts/dp/1452138478/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{' '}
            for full exercise guides and plans.
          </li>
        </ul>
      </div>
      <About click={() => setShowAbout(!showAbout)} />
    </SettingsWrapper>
  );
};

export default Settings;
