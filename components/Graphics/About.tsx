import styled from 'styled-components';

const AboutStyle = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--about);
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border-radius: 5rem;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: transparent !important;
    box-shadow: none !important;
    --about: #fff;
  }
`;

export const About = ({ click }) => (
  <AboutStyle onClick={click}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z"
        fill="var(--about)"
      />
    </svg>
    About
  </AboutStyle>
);
