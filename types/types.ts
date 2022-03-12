export enum TargetArea {
  Full = 'Full Body',
  Upper = 'Upper Body',
  Lower = 'Lower Body',
  Core = 'Core',
  Rest = 'Recovery',
}
export type Program = {
  id: number;
  target: TargetArea;
  routine: Array<number>;
};
export type Workout = {
  id: number;
  name: string;
  duration: number;
  target: TargetArea;
  visual: (boolean) => JSX.Element;
};
