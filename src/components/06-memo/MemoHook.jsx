import React, { useMemo, useState } from "react";
import { heavyProcess } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(100);

  const [show, setShow] = useState(true);

  const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        counter: <small> {counter} </small>
      </h3>

      <hr />

      <p>{heavyProcessMemo}</p>

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
