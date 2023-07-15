import React, { useEffect } from "react";
import { useStore, actions } from "./redux-state";

const Counter = () => {
  const count = useStore((s) => s.counter.value);
  useEffect(() => {
    console.log("Counter rendered!");
  });
  return (
    <div>
      {Math.random()}
      <div>
        <span>Count: {count}</span>
        <button type="button" onClick={() => actions.increment()}>
          +1
        </button>
        <button type="button" onClick={() => actions.decrement()}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
