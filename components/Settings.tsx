import styled from 'styled-components';
import { Logo } from './Graphics';
import { TargetArea, Workout } from '@/types/types';
import { SetStateAction } from 'react';

const SettingsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
};
const Settings: React.FC<SettingsProp> = ({
  duration,
  setDuration,
  primaryTarget,
  setPrimaryTarget,
}) => {
  const handleDuration = (e) => {
    const targetDuration = parseFloat(e.target.dataset.duration);
    setDuration(targetDuration);
  };
  const handleTarget = (e) => {
    const targetArea = e.target.dataset.target as TargetArea;
    setPrimaryTarget(targetArea);
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
        <button type="button">Start Workout</button>
      </div>
    </SettingsWrapper>
  );
};

export default Settings;
