import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  getRandomName,
  setLocalStorage,
  isBrowser,
  localStorageIsAvailable,
} from '../utils';
import { Avatar, IconShuffle } from './Graphics';
const FooterWrapper = styled.footer`
  background-color: var(--profile-bg);
  border-radius: 0 0 1.2rem 1.2rem;
  width: 100%;
  padding: 2rem 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .overview {
    margin-left: 1rem;
    p {
      margin: 0;
      line-height: 1.2;
      font-weight: 700;
    }
    .name {
      font-size: 12px;
      color: var(--profile-primary);
    }
    .summary {
      font-size: 10px;
      color: var(--profile-secondary);
    }
  }
  button.profile {
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: 10px;
    font-weight: 600;
    color: var(--profile-button);
    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

const ProfileWrapper = styled.div`
  position: absolute;
  --pad: 3rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--profile-bg);
  border-radius: 1.2rem;
  padding: 0 var(--pad);
  overflow-y: scroll;
  button.close {
    background: transparent;
    padding: 0.5rem 1rem;
    font-size: 3rem;
    line-height: 1;
    width: auto;
    position: absolute;
    margin: 0;
    transform: translateX(2.5rem) translateY(0.5rem);
    top: 0;
    right: 0;
    z-index: 9;
    color: var(--profile-button);
    &:hover {
      background: transparent;
      box-shadow: none;
      transform: translateX(2.5rem) translateY(0.5rem) scale(1.2);
    }
  }
  .profile {
    position: sticky;
    padding-top: var(--pad);
    top: 0;
    display: flex;
    align-items: center;
    background-color: inherit;
    svg {
      width: 8rem;
      height: 8rem;
      margin-right: var(--pad);
      flex-basis: 8rem;
      flex-shrink: 0;
    }
  }
  .input-area {
    flex-basis: 100%;
    position: relative;
    &::before,
    &::after {
      display: block;
      height: 1.2rem;
      font-size: 1rem;
    }
    &::before {
      content: 'Changes are saved automatically';
      font-weight: 500;
      padding-bottom: 0.5em;
      letter-spacing: 0.03em;
      color: var(--input-description);
    }
    &::after {
      content: ' ';
      display: block;
    }
    input.name {
      width: 100%;
      height: auto;
      font-size: 2rem;
      padding: 1rem 5rem 1rem 1rem;
      color: var(--input-text);
      border: 1px solid var(--input-border);
      background-color: var(--input-bg);
    }
    .shuffle {
      background: transparent;
      transform: none;
      position: absolute;
      top: calc(50% - 0.6rem);
      right: 1.8rem;
      padding: 0;
      margin: 0;
      width: auto;
      &:hover {
        box-shadow: none;
      }
      &:focus {
        box-shadow: none;
      }
    }
    svg {
      width: 2rem;
      margin: 0;
      height: 1.6rem;
    }
  }
  .history-summary {
    padding-bottom: 2rem;
    background-color: inherit;
    .content {
      border: 1px solid var(--history-summary-border);
      padding: 1.5rem;
      background-color: var(--history-summary-bg);
      color: var(--history-summary-text);
      border-radius: 0.4rem;
      line-height: 1;
    }
    font-size: 1.4rem;
    text-align: center;
    position: sticky;
    bottom: 0rem;
    span {
      font-weight: 700;
    }
  }
  .history-list {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: table;
    width: 100%;
    font-size: 1.4rem;
    color: var(--history);
  }
  .row {
    display: table-row;
    &:nth-of-type(2) {
      .h-date,
      .h-duration,
      .h-target {
        padding-top: 1.25rem;
      }
    }
    &.empty {
      display: table-caption;
      caption-side: bottom;
      padding: 4rem 0;
      text-align: center;
    }
  }
  .h-date,
  .h-duration,
  .h-target {
    padding: 0.75rem 0;
    display: table-cell;
    text-align: center;
    &.head {
      font-weight: 700;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--cool300);
    }
  }
  @media screen and (max-width: 450px) {
    --pad: 2rem;
    .profile svg {
      width: 5rem;
      height: 5rem;
      flex-basis: 5rem;
      margin-right: 1rem;
    }
    .input-area {
      input.name {
        font-size: 1.4rem;
        padding-right: 4rem;
      }
      svg {
        width: 1.7rem;
        height: 1.4rem;
        top: 1.2rem;
        right: 0.6rem;
      }
      .shuffle {
        top: calc(50% - 0.4rem);
        /* top: 2.75rem; */
        right: 1rem;
      }
    }
    button.close {
      top: 0rem;
      right: 1rem;
    }
    .h-date,
    .h-duration,
    .h-target {
      padding: 0.5rem 0;
    }
  }
`;

const Profile = () => {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState('');
  const [history, setHistory] = useState([]);
  const [workoutCount, setWorkoutCount] = useState(0);
  const [workoutMins, setWorkoutMins] = useState(0);

  useEffect(() => {
    if (!isBrowser) return;
    if (localStorageIsAvailable('bb7_name')) {
      setName(window.localStorage.getItem('bb7_name'));
    } else {
      const tempName = getRandomName();
      setLocalStorage('bb7_name', tempName);
      setName(tempName);
    }
    if (localStorageIsAvailable('bb7_history')) {
      const localHistory = JSON.parse(
        window.localStorage.getItem('bb7_history')
      );
      const count = localHistory.length;
      const secs = localHistory.reduce((acc, curr) => acc + curr.duration, 0);

      setHistory(localHistory);
      setWorkoutCount(count);
      setWorkoutMins(Math.round(secs / 60));
    }
  }, []);
  useEffect(() => setLocalStorage('bb7_name', name), [name]);
  return !expanded ? (
    <FooterWrapper>
      <div className="left">
        <Avatar />
        <div className="overview">
          <p className="name">{name}</p>
          <p className="summary">
            {workoutCount} workout{workoutCount !== 1 ? 's' : null} •{' '}
            {workoutMins} mins
          </p>
        </div>
      </div>
      <div className="right">
        <button className="profile" onClick={() => setExpanded(true)}>
          My profile
        </button>
      </div>
    </FooterWrapper>
  ) : (
    <>
      <ProfileWrapper>
        <div className="profile">
          <button className="close" onClick={() => setExpanded(false)}>
            &times;
          </button>
          <Avatar width="80" height="80" />
          <div className="input-area">
            <input
              className="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="shuffle"
              onClick={() => setName(getRandomName())}
            >
              <IconShuffle />
            </button>
          </div>
        </div>
        <div className="history-list">
          <div className="row">
            <div className="h-date head">Date</div>
            <div className="h-duration head">Duration</div>
            <div className="h-target head">Target</div>
          </div>
          {history.length !== 0 ? (
            [...history].reverse().map((workout, i) => (
              <div className="row" key={i}>
                <div className="h-date">{workout.date}</div>
                <div className="h-duration">{workout.duration}</div>
                <div className="h-target">{workout.target}</div>
              </div>
            ))
          ) : (
            <div className="row empty">No workout history</div>
          )}
        </div>
        <div className="history-summary">
          <div className="content">
            Total <span>{workoutCount}</span> workouts in{' '}
            <span>{workoutMins}</span> minutes
          </div>
        </div>
      </ProfileWrapper>
      {/* Hacky stopgap for height shifting */}
      <div style={{ height: '7rem' }} />
    </>
  );
};

export default Profile;
