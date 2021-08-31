import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-dark " onClick={() => increment(1)}>
        Increment
      </button>

      <button
        className="btn btn-outline-primary ms-2 "
        onClick={() => setShow(!show)}
      >
        Show/Hide:
        {JSON.stringify(show)}
      </button>
    </div>
  );
};
