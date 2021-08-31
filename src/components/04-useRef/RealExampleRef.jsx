import React, { useState } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button onClick={() => setShow(!show)} className="btn btn-success mt-2">
        Show/Hide
      </button>
    </div>
  );
};
