import { workouts } from './workouts';
import { TargetArea, Program } from '@/types/types';

export const programs: Array<Program> = [
  {
    id: 58,
    target: TargetArea.Full,
    routine: [
      42, 0, 18, 0, 30, 0, 24, 0, 16, 0, 39, 0, 40, 0, 43, 0, 45, 0, 13,
    ],
  },
  {
    id: 60,
    target: TargetArea.Full,
    routine: [
      43, 0, 44, 0, 18, 0, 51, 0, 37, 0, 13, 0, 40, 0, 42, 0, 32, 0, 45,
    ],
  },
  {
    id: 0,
    target: TargetArea.Full,
    routine: [43, 0, 44],
  },
];
