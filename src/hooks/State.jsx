import React, { useState } from "react";

export const State = () => {
  const [value, setValue] = useState(0);

  setValue((prevValue) => {
    return prevValue + 1;
  });

  return <div>{}</div>;
};
