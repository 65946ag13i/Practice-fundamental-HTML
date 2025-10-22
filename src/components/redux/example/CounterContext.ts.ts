import { createContext } from "react";
import type { CounterState, CounterAction } from "./types";

export interface CounterContextType {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

export const CounterContext = createContext<CounterContextType | null>(null);
