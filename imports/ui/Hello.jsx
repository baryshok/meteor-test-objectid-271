import React, { useState } from "react";

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);

    Meteor.call("testObjectId", (error, result) => {
      console.log("result", result);
    });
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
