import { WrapperStyles } from './WorkoutLayout';

export const Rest = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <span className="rest-message">Catch your breath...</span>
  </WrapperStyles>
);
