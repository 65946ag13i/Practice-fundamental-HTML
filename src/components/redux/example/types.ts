export interface CounterState {
  count: number;
}

export const initialCounterState: CounterState = {
  count: 0,
};

export type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_COUNT"; payload: number };
