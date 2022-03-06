import { useEffect, useState } from 'react';
import { StatusBar } from './index';
import { Bar } from '../Timer';
import { Workout } from '@/types/types';
import { workouts } from '@/components/Workouts/workouts';

const ActiveWorkout = ({ program, primaryTarget, started, setStarted }) => {
  const [routine, setRoutine] = useState<Array<Workout>>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeftInCurrentWorkout, setSecondsLeftInCurrentWorkout] =
    useState(0);
  const [secondsSinceBeginning, setSecondsSinceBeginning] = useState(0);
  const [totalSecond, setTotalSecond] = useState(0);
  const tick = () => {
    if (isPaused) return;
    setSecondsLeftInCurrentWorkout(secondsLeftInCurrentWorkout + 0.5);
    setSecondsSinceBeginning(secondsSinceBeginning + 0.5);
  };
  const totalTimeLeft = totalSecond - Math.round(secondsSinceBeginning);
  const isLastWorkout = currentIndex === routine.length - 1;
  const currentWorkout = routine[currentIndex];
  const currentWorkoutTimeLeft =
    currentWorkout?.duration - secondsLeftInCurrentWorkout;
  const nextWorkout = isLastWorkout
    ? 'End'
    : 'Next Up: ' + routine[currentIndex + 1]?.name;
  useEffect(() => {
    if (started) {
      const timerID = setInterval(() => tick(), 500);
      return function cleanUp() {
        clearInterval(timerID);
      };
    }
  });
  const reset = () => {
    setStarted(false);
    setRoutine([]);
    setSecondsLeftInCurrentWorkout(0);
    setSecondsSinceBeginning(0);
    setCurrentIndex(0);
  };
  useEffect(() => {
    if (
      started &&
      secondsLeftInCurrentWorkout >= routine[currentIndex]?.duration
    ) {
      if (currentIndex >= routine.length - 1) {
        reset();
        return;
      }
      setSecondsLeftInCurrentWorkout(0);
      setCurrentIndex(currentIndex + 1);
    }
  });
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
        border: '1px solid red',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {currentWorkout?.visual}
      <StatusBar
        ticker={currentWorkoutTimeLeft}
        second={secondsLeftInCurrentWorkout}
        duration={currentWorkout?.duration}
        ticking={started}
        currentWorkout={currentWorkout?.name}
        nextWorkout={nextWorkout}
        focus={currentWorkout?.target}
      />
      <Bar
        duration={currentWorkout?.duration}
        timeLeft={currentWorkoutTimeLeft}
      />
      <br />
      total left: {totalTimeLeft}
      <br />
      current workout left: {currentWorkoutTimeLeft}
      <button
        onClick={() => setIsPaused(!isPaused)}
        style={{ position: 'fixed', top: 0, right: 0 }}
      >
        {!isPaused ? 'pause' : 'resume'}
      </button>
    </div>
  );
};

export { ActiveWorkout };
