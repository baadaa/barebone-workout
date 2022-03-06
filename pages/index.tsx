import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Layout, StatusBar } from '@/components/Layout/index';
import { workouts } from '@/components/Workouts/workouts';
import { programs } from '@/components/Workouts/programs';
import { TargetArea, Workout, Program } from '@/types/types';
import Settings from '@/components/Settings';

const WorkoutPage: NextPage = () => {
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(7);
  const [primaryTarget, setPrimaryTarget] = useState<TargetArea>(
    TargetArea.Full
  );
  const [routine, setRoutine] = useState<Array<Workout>>([]);
  const [program, setProgram] = useState<Program>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeftInCurrentWorkout, setSecondsLeftInCurrentWorkout] =
    useState(0);
  const [secondsSinceBeginning, setSecondsSinceBeginning] = useState(0);
  const [totalSecond, setTotalSecond] = useState(0);
  const tick = () => {
    if (isPaused) return;
    setSecondsLeftInCurrentWorkout(secondsLeftInCurrentWorkout + 0.05);
    setSecondsSinceBeginning(secondsSinceBeginning + 0.05);
  };
  const totalTimeLeft = totalSecond - Math.round(secondsSinceBeginning);
  const isLastWorkout = currentIndex === routine.length - 1;
  const currentWorkout = routine[currentIndex];
  const currentWorkoutTimeLeft =
    currentWorkout?.duration - Math.round(secondsLeftInCurrentWorkout);
  const nextWorkout = isLastWorkout
    ? 'End'
    : 'Next Up: ' + routine[currentIndex + 1]?.name;
  useEffect(() => {
    if (started) {
      const timerID = setInterval(() => tick(), 50);
      return function cleanUp() {
        clearInterval(timerID);
      };
    }
  });
  useEffect(() => {
    if (
      started &&
      secondsLeftInCurrentWorkout >= routine[currentIndex].duration
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
    if (!program) return;
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
  }, [program]);
  const reset = () => {
    setStarted(false);
    setRoutine([]);
    setSecondsLeftInCurrentWorkout(0);
    setSecondsSinceBeginning(0);
    setCurrentIndex(0);
  };
  return (
    <Layout>
      {started ? (
        currentWorkout.visual
      ) : (
        <Settings
          duration={duration}
          setDuration={setDuration}
          primaryTarget={primaryTarget}
          setPrimaryTarget={setPrimaryTarget}
          program={program}
          setProgram={setProgram}
          setStarted={setStarted}
        />
      )}
      <StatusBar
        ticker={currentWorkoutTimeLeft}
        second={secondsLeftInCurrentWorkout}
        duration={currentWorkout?.duration}
        ticking={started}
        currentWorkout={currentWorkout?.name}
        nextWorkout={nextWorkout}
        focus={currentWorkout?.target}
      />
      {/* {primaryTarget} */}
      {started && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          style={{ position: 'fixed', top: 0, right: 0 }}
        >
          {!isPaused ? 'pause' : 'resume'}
        </button>
      )}
      {/* <br />
      total left: {totalTimeLeft}
      <br />
      current workout left: {currentWorkoutTimeLeft} */}
    </Layout>
  );
};

export default WorkoutPage;
