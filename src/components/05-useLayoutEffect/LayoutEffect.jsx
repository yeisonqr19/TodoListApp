import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = data !== null && data[0];

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pRef} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      {counter > 1 && (
        <button onClick={() => decrement(1)} className="btn btn-danger me-2">
          Previous Quote
        </button>
      )}

      <button onClick={() => increment(1)} className="btn btn-primary">
        Next Quote
      </button>
    </>
  );
};
