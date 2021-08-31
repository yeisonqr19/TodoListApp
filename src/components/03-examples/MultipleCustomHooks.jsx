import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = data !== null && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-0">{quote}</p>

          <footer className="blockquote-footer mt-0">{author}</footer>
        </blockquote>
      )}

      {loading === false && (
        <div>
          {counter > 1 && (
            <button
              onClick={() => decrement(1)}
              className="btn btn-danger me-2"
            >
              Previous Quote
            </button>
          )}

          <button onClick={() => increment(1)} className="btn btn-primary">
            Next Quote
          </button>
        </div>
      )}
    </>
  );
};

export default MultipleCustomHooks;
