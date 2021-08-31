import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state: counter, decrement, increment, reset } = useCounter(100);

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-dark">
        +1
      </button>

      <button onClick={reset} className="btn btn-danger">
        Reset
      </button>

      <button onClick={() => decrement(3)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
