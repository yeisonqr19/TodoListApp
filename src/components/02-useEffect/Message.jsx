import React, { useState, useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const { x, y } = e;

      setCoords({
        ...coords,
        x,
        y,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [coords]);

  return (
    <div>
      <h3>Genial</h3>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
};
