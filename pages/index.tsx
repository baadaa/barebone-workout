import type { NextPage } from 'next';
import { useState } from 'react';
import { Layout, ActiveWorkout } from '@/components/Layout/index';
import { TargetArea, Program } from '@/types/types';
import Settings from '@/components/Settings';

const WorkoutPage: NextPage = () => {
  const [started, setStarted] = useState(false);
  const [duration, setDuration] = useState(7);
  const [primaryTarget, setPrimaryTarget] = useState<TargetArea>(
    TargetArea.Full
  );
  const [program, setProgram] = useState<Program>();

  return (
    <Layout>
      {started ? (
        <ActiveWorkout
          program={program}
          primaryTarget={primaryTarget}
          started={started}
          setStarted={setStarted}
        />
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
    </Layout>
  );
};

export default WorkoutPage;
