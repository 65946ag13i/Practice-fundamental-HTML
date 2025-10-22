import { useContext } from "react";
import { CounterContext } from "./CounterContext.ts";

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within CounterProvider");
  }
  return context;
};
