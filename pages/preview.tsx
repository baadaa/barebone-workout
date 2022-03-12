import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { workouts } from '@/components/Workouts/workouts';
import styled from 'styled-components';

const Select = styled.select`
  position: absolute;
  top: 2rem;
  width: 300px;
  left: calc(50% - 150px);
  z-index: 999;
  font-size: 2rem;
`;

const TestPage = () => {
  const [exerciseId, setExerciseId] = useState(11); // 10s-and-2s by default;
  const [exercise, setExercise] = useState(workouts[1]);

  useEffect(() => {
    const selected = workouts.find((ex) => ex.id === exerciseId);
    setExercise(selected);
  }, [exerciseId]);
  return (
    <Layout>
      <Select
        name="testWorkout"
        id="testWorkout"
        onChange={(e) => setExerciseId(parseFloat(e.target.value))}
        defaultValue={exerciseId}
      >
        {workouts.map((ex) => (
          <option key={ex.id} value={ex.id}>
            {ex.name}
          </option>
        ))}
      </Select>
      {exercise.visual(false)}
    </Layout>
  );
};

export default TestPage;
