import { useState } from 'react';
import styled from 'styled-components';
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--profile-bg);
  border-radius: 1.2rem;
  padding: 3rem;
  overflow-y: scroll;
  button.close {
    background: transparent;
    padding: 0.5rem 1rem;
    font-size: 3rem;
    line-height: 1;
    width: auto;
    position: absolute;
    margin: 0;
    transform: translateX(2.5rem) translateY(-2.5rem);
    top: 0;
    right: 0;
    z-index: 9;
    color: var(--profile-button);
    &:hover {
      background: transparent;
      box-shadow: none;
    }
  }
  .profile {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    svg {
      width: 8rem;
      height: 8rem;
      margin-right: 3rem;
      flex-basis: 8rem;
      flex-shrink: 0;
    }
  }
  .input-area {
    flex-basis: 100%;
    position: relative;
    input.name {
      width: 100%;
      height: auto;
      font-size: 2rem;
      padding: 1rem 5rem 1rem 1rem;
      border: 1px solid var(--cool200);
    }
    svg {
      position: absolute;
      width: 2rem;
      margin: 0;
      height: 1.6rem;
      top: 1.4rem;
      right: 1.8rem;
    }
  }
  @media screen and (max-width: 450px) {
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
    }
  }
`;

const Profile = () => {
  const [expanded, setExpanded] = useState(false);
  return !expanded ? (
    <FooterWrapper>
      <div className="left">
        <Avatar />
        <div className="overview">
          <p className="name">Curious Zebra</p>
          <p className="summary">6 workouts • 49 mins</p>
        </div>
      </div>
      <div className="right">
        <button className="profile" onClick={() => setExpanded(true)}>
          My profile
        </button>
      </div>
    </FooterWrapper>
  ) : (
    <ProfileWrapper>
      <div className="profile">
        <button className="close" onClick={() => setExpanded(false)}>
          &times;
        </button>
        <Avatar width="80" height="80" />
        <div className="input-area">
          <input className="name" type="text" value="Curious Zebra" readOnly />
          <IconShuffle />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      test
    </ProfileWrapper>
  );
};

export default Profile;
