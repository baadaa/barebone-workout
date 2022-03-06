import { useEffect, useState } from 'react';
import { StatusBar, BarGraph, Controller } from '../Timer';
import { Workout } from '@/types/types';
import { workouts } from '@/components/Workouts/workouts';

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
    console.log(mappedRoutine, totalSec, primaryTarget);
  }, []);
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
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
    </div>
  );
};

export { ActiveWorkout };
