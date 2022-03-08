import { useEffect, useState } from 'react';
import { StatusBar, BarGraph, Controller } from '../Timer';
import { Workout } from '@/types/types';
import { WrapperStyles } from '../Workouts/WorkoutLayout';
import { workouts } from '@/components/Workouts/workouts';
import {
  isBrowser,
  localStorageIsAvailable,
  setLocalStorage,
} from '@/coreMethods/utils';
import { Confetti } from '../Graphics';

const ActiveWorkout = ({ program, primaryTarget, started, setStarted }) => {
  const [routine, setRoutine] = useState<Array<Workout>>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsInCurrentWorkout, setSecondsInCurrentWorkout] = useState(0);
  const [secondsSinceBeginning, setSecondsSinceBeginning] = useState(0);
  const [totalSecond, setTotalSecond] = useState(0);
  const tick = () => {
    if (isPaused) return;
    setSecondsInCurrentWorkout(secondsInCurrentWorkout + 0.5);
    setSecondsSinceBeginning(secondsSinceBeginning + 0.5);
  };
  const totalTimeLeft = totalSecond - secondsSinceBeginning;
  const isLastWorkout = currentIndex === routine.length - 1;
  const currentWorkout = routine[currentIndex];
  const currentWorkoutTimeLeft =
    currentWorkout?.duration - secondsInCurrentWorkout;
  const nextWorkout = isLastWorkout ? null : routine[currentIndex + 1]?.name;
  useEffect(() => {
    if (started) {
      const timerID = setInterval(() => tick(), 500);
      return function cleanUp() {
        clearInterval(timerID);
      };
    }
  });
  const completeWorkout = () => {
    // setStarted(false);
    setCompleted(true);
    setRoutine([]);
    setSecondsInCurrentWorkout(0);
    setSecondsSinceBeginning(0);
    setCurrentIndex(0);
  };
  useEffect(() => {
    if (started && secondsInCurrentWorkout >= routine[currentIndex]?.duration) {
      if (currentIndex >= routine.length - 1) {
        completeWorkout();
        return;
      }
      setSecondsInCurrentWorkout(0);
      setCurrentIndex(currentIndex + 1);
    }
  }, [secondsInCurrentWorkout]);
  useEffect(() => {
    const mappedRoutine = program.routine.map((workId) =>
      workouts.find((workout) => workout.id === workId)
    );
    const totalSec = mappedRoutine.reduce(
      (total, workout) => total + workout?.duration,
      0
    );
    setRoutine(mappedRoutine);
    setTotalSecond(totalSec);
    // console.log(mappedRoutine, totalSec, primaryTarget);
  }, []);
  useEffect(() => {
    if (!completed || !isBrowser) return;
    const latestArr = localStorageIsAvailable('bb7_history')
      ? JSON.parse(window.localStorage.getItem('bb7_history'))
      : [];
    latestArr.push({
      date: new Date().toLocaleDateString(),
      duration: totalSecond,
      target: primaryTarget,
    });
    setLocalStorage('bb7_history', JSON.stringify(latestArr));
  }, [completed]);
  return (
    <WrapperStyles>
      {!completed && (
        <>
          {currentWorkout?.visual}
          <StatusBar
            second={Math.round(currentWorkoutTimeLeft)}
            currentWorkout={currentWorkout?.name}
            nextWorkout={nextWorkout}
            focus={currentWorkout?.target}
          />
          <BarGraph
            duration={currentWorkout?.duration}
            timeLeft={currentWorkoutTimeLeft}
          />
          <Controller
            primaryTarget={primaryTarget}
            totalLeft={Math.round(totalTimeLeft)}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            setStarted={setStarted}
          />
        </>
      )}
      {completed && (
        <>
          <Confetti />
          <div className="post-workout">
            <h2>Woot! Woot!</h2>
            <h3>
              You nailed a {Math.round(totalSecond / 60)}-minute{' '}
              {program.target.toLowerCase()} workout !
            </h3>
            <button onClick={() => setStarted(false)}>Go back to menu</button>
          </div>
        </>
      )}
    </WrapperStyles>
  );
};

export { ActiveWorkout };
