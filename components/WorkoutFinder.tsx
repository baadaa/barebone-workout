import { useEffect, useState } from 'react';
import { workouts } from './Workouts/workouts';

const WorkoutFinder = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [arr, setArr] = useState([]);
  const handleInput = (e) => {
    const val = e.target.value.toLowerCase();
    setInput(val);
    if (val === '') {
      setResults([]);
      return;
    }
    const match = workouts.filter((exercise) =>
      exercise.name.toLowerCase().startsWith(val)
    );
    setResults(match);
  };
  const clearResults = () => {
    setArr([]);
    setResults([]);
  };
  useEffect(() => setInput(''), [arr]);
  return (
    <div style={{ margin: '0 auto' }}>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={clearResults}>clear</button>
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((item, i) => (
            <li key={i}>
              <button onClick={() => setArr([...arr, item.id])}>
                {item.name} ({item.id})
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        [
        {arr.map((item, i) => (
          <span key={i}>{item}, 0, </span>
        ))}
        ]
      </div>
    </div>
  );
};

export default WorkoutFinder;
