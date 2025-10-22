import { useCounter } from "./redux/example/useCounter";
import {
  increment,
  decrement,
  setCount,
} from "../components/redux/example/action";
import { useState } from "react";
function ReactReducer() {
  const { state, dispatch } = useCounter();
  const [inputValue, setInputValue] = useState<string>("0");
  const handleSetCount = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      dispatch(setCount(num));
    }
  };
  return (
    <div>
      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">React Reducer</h1>
        <h2>計數總數</h2>
        <h3>counter : {state.count}</h3>

        <h3>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            點擊+1
          </button>
        </h3>
        <h3>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            點擊-1
          </button>
        </h3>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h3>
          <button onClick={handleSetCount}>設置數字</button>
        </h3>
      </section>
    </div>
  );
}

export default ReactReducer;
