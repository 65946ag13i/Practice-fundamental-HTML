// actions.ts
import type { CounterAction } from "./types";

export const increment = (): CounterAction => ({
  type: "INCREMENT",
});

export const decrement = (): CounterAction => ({
  type: "DECREMENT",
});

export const setCount = (value: number): CounterAction => ({
  type: "SET_COUNT",
  payload: value,
});
