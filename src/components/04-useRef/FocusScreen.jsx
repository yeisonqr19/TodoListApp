import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder="Your Name"
      />

      <button onClick={handleClick} className="btn btn-info mt-2">
        Focus
      </button>
    </div>
  );
};
