import { StatusBar } from './StatusBar';

const ActiveWorkout = ({
  ticker,
  second,
  duration,
  ticking,
  currentWorkout,
  nextWorkout,
  focus,
}) => (
  <>
    {currentWorkout.visual}
    {/* <StatusBar
      ticker={currentWorkoutTimeLeft}
      second={secondsLeftInCurrentWorkout}
      duration={currentWorkout?.duration}
      ticking={started}
      currentWorkout={currentWorkout?.name}
      nextWorkout={nextWorkout}
      focus={currentWorkout?.target}
    /> */}
  </>
);
