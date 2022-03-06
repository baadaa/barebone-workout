import styled from 'styled-components';
import { Logo } from './Graphics';
import { TargetArea, Program } from '@/types/types';
import { SetStateAction, useEffect } from 'react';
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
    var(--cyan500) 6.17%,
    var(--green500) 94.78%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    padding: 3.5rem 3.5rem 0;
    background-color: #fff;
    box-shadow: var(--high-elevation);
    border-radius: 1.2rem;
    max-width: 100%;
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
    color: var(--cool500);
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
    display: none;
  }
  input:checked + label {
    border: 1px solid var(--cyan500);
    background: var(--cyan50);
    color: var(--cyan900);
  }
  label {
    border-radius: 0.7rem;
    border: 1px solid var(--cool100);
    color: var(--cool600);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.3rem;
    flex: 1;
  }
  .radio-group {
    display: flex;
    width: 100%;
    margin: 1rem 0;
  }
  button {
    border-radius: 3rem;
    font-weight: 500;
    background-color: var(--cyan500);
    color: #fff;
    border: none;
    outline: none;
    padding: 1em;
    width: 100%;
    margin-top: 2rem;
    &:focus {
      border: var(--cyan800);
    }
  }
  @media screen and (max-width: 450px) {
    .container {
      padding: 1.5rem 1.5rem 0;
      width: 100%;
    }
    .logo {
      max-width: 350px;
      margin: 0 auto 1.5rem;
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
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <h3>Duration:</h3>
        <div className="radio-group">
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
        </div>
        <h3>Target:</h3>
        <div className="radio-group">
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
        </div>
        <button type="button" onClick={initProgram}>
          Start Workout
        </button>
      </div>
    </SettingsWrapper>
  );
};

export default Settings;
