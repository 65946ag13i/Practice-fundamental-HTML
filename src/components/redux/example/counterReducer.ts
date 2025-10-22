// counterReducer.ts
import type { CounterState, CounterAction } from "./types";
import { initialCounterState } from "./types";

export const counterReducer = (
  state: CounterState = initialCounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
