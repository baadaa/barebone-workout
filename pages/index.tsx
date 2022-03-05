import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout, StatusBar } from '@/components/Layout/index';
import { workouts } from '@/components/Workouts/workouts';
import { programs } from '@/components/Workouts/programs';
import { TargetArea, Workout } from '@/types/types';

const SettinggStyles = styled.div`
  margin: 0 auto;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;
const WorkoutPage: NextPage = () => {
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [primaryTarget, setPrimaryTarget] = useState<TargetArea>();
  const [program, setProgram] = useState<Array<Workout>>([]);
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
  const isLastWorkout = currentIndex === program.length - 1;
  const currentWorkout = program[currentIndex];
  const currentWorkoutTimeLeft =
    currentWorkout?.duration - Math.round(secondsLeftInCurrentWorkout);
  const nextWorkout = isLastWorkout
    ? 'End'
    : 'Next Up: ' + program[currentIndex + 1]?.name;
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
      secondsLeftInCurrentWorkout >= program[currentIndex].duration
    ) {
      if (currentIndex >= program.length - 1) {
        reset();
        return;
      }
      setSecondsLeftInCurrentWorkout(0);
      setCurrentIndex(currentIndex + 1);
    }
  });
  const selectProgram = (e) => {
    const programId = e.target.value;
    if (!programId) return setStarted(false);
    const selectedProgram = programs.find(
      (item) => item.id.toString() === programId
    );
    const routine = selectedProgram.routine;
    const mappedRoutine = routine.map((workId) =>
      workouts.find((workout) => workout.id === workId)
    );
    const totalSec = mappedRoutine.reduce(
      (total, workout) => total + workout.duration,
      0
    );
    setPrimaryTarget(selectedProgram.target);
    setProgram(mappedRoutine);
    setTotalSecond(totalSec);
  };
  const reset = () => {
    setStarted(false);
    setProgram([]);
    setSecondsLeftInCurrentWorkout(0);
    setSecondsSinceBeginning(0);
    setCurrentIndex(0);
  };
  return (
    <Layout>
      {started ? (
        currentWorkout.visual
      ) : (
        <SettinggStyles>
          <label htmlFor="program">
            Choose a workout:
            <select name="program" id="program" onChange={selectProgram}>
              <option value="">Choose</option>
              {programs.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() => (program.length !== 0 ? setStarted(true) : reset())}
          >
            START
          </button>
        </SettinggStyles>
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
      {primaryTarget}
      {started && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          style={{ position: 'fixed', top: 0, right: 0 }}
        >
          {!isPaused ? 'pause' : 'resume'}
        </button>
      )}
      <br />
      total left: {totalTimeLeft}
      <br />
      current workout left: {currentWorkoutTimeLeft}
    </Layout>
  );
};

export default WorkoutPage;
