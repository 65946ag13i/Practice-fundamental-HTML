import { CounterContext } from "./CounterContext.ts";
import { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { initialCounterState } from "./types";
import type { ReactNode } from "react";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
