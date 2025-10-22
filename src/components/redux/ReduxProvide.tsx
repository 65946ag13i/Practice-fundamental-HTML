/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type ReactNode } from "react";

interface CounterState {
  count: number;
}

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const counterInit: CounterState = {
  count: 0,
};

const countReducer = (
  state: CounterState = counterInit,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
interface CounterContextType {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}
const CounterContext = createContext<CounterContextType | null>(null);

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(countReducer, counterInit);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
