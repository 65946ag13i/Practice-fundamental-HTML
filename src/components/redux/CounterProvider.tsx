import { createContext, useContext, useReducer, type ReactNode } from "react";

interface counterInit {
  count: number;
}

const counterInit: counterInit = {
  count: 0,
};

type actiontype = { type: "incre" } | { type: "decre" };

const counterReducer = (
  state: counterInit = counterInit,
  action: actiontype
) => {
  switch (action.type) {
    case "incre":
      return { ...state, count: state.count + 1 };

    case "decre":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

interface CountContext {
  state: counterInit;
  dispatch: React.Dispatch<actiontype>;
}

const CountContext = createContext<CountContext | null>(null);

export const useCounter = (): CountContext => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("must be used counter Provider");
  }
  return context;
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInit);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
