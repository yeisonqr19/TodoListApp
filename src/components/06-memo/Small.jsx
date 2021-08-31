import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi A llamar :(");

  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
